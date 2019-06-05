import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='footer-container text-center'>
			<span>
				&copy; {year} - GPNB - A <a href='http://ukemi.ninja'>Ukemi</a> Project
			</span>
		</footer>
	);
};

export default Footer;
