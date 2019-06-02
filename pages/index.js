import React, { useContext } from 'react';
import CurrentUser from '../components/CurrentUser';
import SignInAndSignUp from '../components/SignInAndSignUp';
import { UserContext } from '../providers/UserProvider';

const Index = ( { loading } ) => {
	const [ user ] = useContext( UserContext );

	if ( loading ) {
		return null;
	}

	return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Index;
