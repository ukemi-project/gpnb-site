import React from 'react';
import Head from './Head';

const Layout = ( props ) => {
	return (
		<div className='wrapper'>
			<Head />
			{/* <Header /> */}
			<section className='section-container'>{props.children}</section>
		</div>
	);
};


export default Layout;
