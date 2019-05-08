import React from 'react';

const Login = () => (
	<div className='block-center mt-4 wd-xl'>
		<div className='card card-flat'>
			<div className='card-header text-center bg-info'>
				{/* <img className='block-center rounded' src='/static/img/logo.png' alt='Logo' /> */}
				<h5 className='block-center text-white'>GPNB</h5>
			</div>
			<div className='p-3 text-center'>
				<span className='mr-2'>&copy;</span>
				<span>2019</span> - <span>The Greatest Park Never Built</span>
				<br />
				<span>
					Maintained by @<a href='https://ukemi.ninja'>UkemiProject</a>
				</span>
			</div>
		</div>
	</div>
);

export default Login;
