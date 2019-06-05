import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='footer-container text-center text-white'>
			<span className='mr-2'>&copy;</span>
			<span>{year}</span>
			<span className='mx-2'>-</span>
			<span>The Greatest Park Never Built</span>
			<br />
			<span>
				Maintained with{' '}
				<span role='img' aria-label='Heart Emoji'>
					❤️
				</span>{' '}
				by <a href='https://ukemi.ninja'>Ukemi Project</a>
			</span>
		</footer>
	);
};

export default Footer;
