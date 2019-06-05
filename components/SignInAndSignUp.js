import React, { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInAndSignUp = () => {
	const [ formType, setFormType ] = useState( 'login' );

	return (
		<div className='block-center mt-4 wd-xl'>
			<div className='card card-flat'>
				<div className='card-header text-center bg-blue-light'>
					{/* <img className='block-center rounded' src='/static/img/logo.png' alt='Logo' /> */}
					<h4 className='block-center text-white'>GPNB</h4>
				</div>
				<div className='card-body'>
					<p className='text-center text-bold py-2'>Please note, this site is still in beta.</p>
					{formType === 'register' ? <SignUp /> : <SignIn />}
					{formType === 'login' ? (
						<>
							<p className='pt-3 text-center'>Need an account?</p>
							<button className='btn btn-block btn-secondary' onClick={() => setFormType( 'register' )}>
								Register Now
							</button>
						</>
					) : (
						<>
							<p className='pt-3 text-center'>Already have an account?</p>
							<button className='btn btn-block btn-secondary' onClick={() => setFormType( 'login' )}>
								Login
							</button>
						</>
					)}
				</div>
			</div>

			<div className='p-3 text-center text-white'>
				<span className='mr-2'>&copy;</span>
				<span>2019</span>
				<span className='mx-2'>-</span>
				<span>The Greatest Park Never Built</span>
				<br />
				<span>
					Maintained by <a href='https://ukemi.ninja'>Ukemi Project</a>
				</span>
			</div>
		</div>
	);
};

export default SignInAndSignUp;
