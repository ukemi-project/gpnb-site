import dotenv from 'dotenv';
dotenv.config();

import next from 'next';
import express from 'express';
import fileUpload from 'express-fileupload';
import session from 'express-session';
import * as admin from 'firebase-admin';

import path from 'path';
import cluster from 'cluster';
import bodyParser from 'body-parser';

const FileStore = require( 'session-file-store' )( session ),
	numCPUs = require( 'os' ).cpus().length,
	dev = process.env.NODE_ENV !== 'production',
	port = process.env.PORT || 3000,
	routes = [ { src: '/login', dest: '/pages/login' } ];

if ( !dev && cluster.isMaster ) {
	console.log( `Node cluster master ${process.id} is running.` );

	// Fork workers
	for ( let i = 0; i < numCPUs; i++ ) {
		cluster.fork();
	}

	cluster.on( 'exit', ( worker, code, signal ) => {
		console.error( `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}` );
	} );
} else {
	const app = next( { dir: '.', dev } ),
		handle = app.getRequestHandler(),
		firebase = admin.initializeApp(
			{
				credential: admin.credential.cert( require( './credentials/server' ) ),
				databaseURL: '' // TODO database URL goes here
			},
			'server'
		);

	app
		.prepare()
		.then( () => {
			const server = express();

			if ( !dev ) {
				// Enforce SSL & HSTS in production
				server.use( ( req, res ) => {
					let proto = req.headers[ 'x-forwarded-proto' ];

					if ( proto === 'https' ) {
						res.set( {
							'Strict-Transport-Security': 'max-age=31557600' // One-year
						} );
						return next();
					}

					res.redirect( `https://${req.headers.host}${req.url}` );
				} );
			}

			// Static files
			// https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
			server.use(
				'/images',
				express.static( path.join( __dirname, 'images' ), {
					maxAge: dev ? '0' : '365d'
				} )
			);

			server.use( fileUpload() ).use( bodyParser.json() );

			server.post( '/upload', ( req, res ) => {
				if ( req.files === null ) {
					return res.status( 400 ).json( { msg: 'No file uploaded.' } );
				}

				const file = req.files.file;

				file.mv( `${__dirname}/public/uploads/${file.name}`, ( err ) => {
					if ( err ) {
						console.error( err );

						return res.status( 500 ).send( err );
					}

					res.json( { fileName: file.name, filePath: `/uploads/${file.name}` } );
				} );
			} );

			routes.forEach( ( r ) => server.get( r.src, ( req, res ) => app.render( req, res, r.dest, req.params ) ) );

			server.get( '*', ( req, res ) => handle( req, res ) );

			server.listen( port );

			console.log( `> Ready on http://localhost:${port}` );
		} )
		.catch( ( err ) => console.log( err ) );
}
