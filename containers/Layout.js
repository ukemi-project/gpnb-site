import React, { useContext } from 'react';
import Head from './Head';
import Footer from './Footer';
import { UserContext } from '../providers/UserProvider';
import Header from './Header';

const Layout = ( props ) => {
	const [ user ] = useContext( UserContext );

	return (
		<div className='wrapper'>
			<Head />
			{user && <Header />}
			<section className='section-container'>{props.children}</section>
			<Footer />
		</div>
	);
};

export default Layout;
