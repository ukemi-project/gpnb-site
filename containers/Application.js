import React, { useContext } from 'react';
import CurrentUser from './../components/CurrentUser';
import { UserContext } from '../providers/UserProvider';
import FileUploader from '../components/FileUploader';

const Application = () => {
	const [ user ] = useContext( UserContext );

	return (
		<>
			<FileUploader />
			<CurrentUser {...user} />
		</>
	);
};

export default Application;
