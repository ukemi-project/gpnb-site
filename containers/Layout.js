import React from 'react';
import Head from './Head';
import Footer from '../components/Footer';

const Layout = ( props ) => {
	return (
		<div className='wrapper'>
			<Head />
			{/* <Header /> */}
			<section className='section-container'>{props.children}</section>
			<Footer />
		</div>
	);
};

export default Layout;
