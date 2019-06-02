import React, { useContext } from 'react';
import Application from '../containers/Application';
import SignInAndSignUp from '../components/SignInAndSignUp';
import { UserContext } from '../providers/UserProvider';

const Index = ( { loading } ) => {
	const [ user ] = useContext( UserContext );

	if ( loading ) {
		return null;
	}

	return <div>{user ? <Application /> : <SignInAndSignUp />}</div>;
};

export default Index;
