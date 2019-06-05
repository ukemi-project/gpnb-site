import React, { useContext } from 'react';
import Application from '../containers/Application';
import SignInAndSignUp from '../containers/SignInAndSignUp';
import { UserContext } from '../providers/UserProvider';

const Index = ( { loading } ) => {
	const [ user ] = useContext( UserContext );

	if ( loading ) {
		return null;
	}

	return <>{user ? <Application /> : <SignInAndSignUp />}</>;
};

export default Index;
