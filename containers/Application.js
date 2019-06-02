import React, { useContext } from 'react';
import CurrentUser from './../components/CurrentUser';
import { UserContext } from '../providers/UserProvider';

const Application = () => {
	const [ user ] = useContext( UserContext );

	return <CurrentUser {...user} />;
};

export default Application;
