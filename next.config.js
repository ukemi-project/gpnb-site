const withSass = require( '@zeit/next-sass' ),
	withCss = require( '@zeit/next-css' );

module.exports = withSass(
	withCss( {
		webpack: ( config ) => {
			// Fixes npm packages that depend on `fs` module
			config.node = {
				fs: 'empty'
			};

			// Resolves alias to root folder
			config.resolve.alias[ '@' ] = __dirname;

			// Font face support
			config.module.rules.push( {
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: '[name].[ext]'
					}
				}
			} );

			return config;
		}
	} )
);
