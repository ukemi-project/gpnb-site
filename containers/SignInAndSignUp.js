import React, { useState } from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

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
		</div>
	);
};

export default SignInAndSignUp;
