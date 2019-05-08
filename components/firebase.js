import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	databaseURL: process.env.databaseURL,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId
};

class Firebase {
	constructor() {
		app.initializeApp( config );
		this.auth = app.auth();
		this.db = app.db;
	}

	login( email, password ) {
		return this.auth.signInWithEmailAndPassword( email, password );
	}

	googleLogin() {
		return this.auth.signInWithPopup( new this.auth.GoogleAuthProvider() );
	}

	handleLogout() {
		return this.auth.signOut();
	}

	isInitialized() {
		return new Promise( ( resolve ) => {
			this.auth.onAuthStateChanged( resolve );
		} );
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName;
	}
}

export default new Firebase();
