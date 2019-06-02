import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import config from '../credentials/firebase-config';

firebase.apps.length ? firebase.app() : firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup( provider );
export const signOut = () => auth.signOut();
// TODO: Sign in with user/pass

// Return userDocument from firestore
export const getUserDocument = async( user ) => {
	if ( !user ) {
		return null;
	}

	const uid = user.uid;

	try {
		return firestore.doc( `users/${uid}` );
	} catch ( err ) {
		console.error( 'Error fetching user', err.message );
	}
};

// Create userDocument and return getUserDocument()
export const createUserProfileDocument = async( user, additionalData ) => {
	if ( !user ) {
		return;
	}

	try {
		const userRef = firestore.doc( `users/${user.uid}` ),
			snapshot = await userRef.get();

		if ( !snapshot.exists ) {
			const createdAt = new Date(),
				{ displayName, email, photoURL } = user;

			try {
				await userRef.set( {
					displayName,
					email,
					photoURL,
					createdAt,
					...additionalData
				} );
			} catch ( err ) {
				return console.error( 'Error creating user', err.message );
			}
		}
	} catch ( err ) {
		return console.error( err.message );
	}

	return getUserDocument( user );
};

export default firebase;
