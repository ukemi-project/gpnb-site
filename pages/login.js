import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from 'reactstrap';

const Login = ( props ) => {
	const [ email, setEmail ] = useState( '' ),
		[ password, setPassword ] = useState( '' );

	return (
		<div className='block-center mt-4 wd-xl'>
			<div className='card card-flat'>
				<div className='card-header text-center bg-info'>
					{/* <img className='block-center rounded' src='/static/img/logo.png' alt='Logo' /> */}
					<h4 className='block-center text-white'>GPNB</h4>
				</div>
				<div className='card-body'>
					<p className='text-center text-bold py-2'>Please note, this site is still in beta.</p>
					<form className='mb-3' name='login' onSubmit={( e ) => e.preventDefault() && false}>
						<div className='form-group'>
							<div className='input-group with-focus'>
								<Input
									type='email'
									id='id-email'
									name='email'
									className='border-right-0'
									placeholder='Enter email'
									invalid=''
									data-validate='[&quot;required&quot;, &quot;email&quot;]'
									value={email}
									onChange={( e ) => setEmail( e.target.value )}
								/>
								<div className='input-group-append'>
									<span className='input-group-text text-muted bg-transparent border-left-0'>
										<em className='fa fa-envelope' />
									</span>
								</div>
							</div>
						</div>
						<div className='form-group'>
							<div className='input-group with-focus'>
								<Input
									type='password'
									id='id-password'
									name='password'
									className='border-right-0'
									placeholder='Password'
									invalid=''
									data-validate='[&quot;required&quot;]'
									value={password}
									onChange={( e ) => setPassword( e.target.value )}
								/>
								<div className='input-group-append'>
									<span className='input-group-text text-muted bg-transparent border-left-0'>
										<em className='fa fa-lock' />
									</span>
								</div>
							</div>
						</div>
						<div className='clearfix'>
							<div className='checkbox c-checkbox float-left mt-0'>
								<label>
									<input type='checkbox' value='' name='remember' />
									<span className='fa fa-check' />Remember Me
								</label>
							</div>
							<div className='float-right'>
								<Link href='/pages/recover' as='/recover'>
									<a className='text-muted'>Reset password</a>
								</Link>
							</div>
						</div>
						<button className='btn btn-block btn-primary mt-3' type='submit' onClick={login}>
							Login
						</button>
					</form>

					<p className='pt-3 text-center'>
						Need an account?
						<Link href='/pages/register' as='/register'>
							<a className='text-muted'> Register Now</a>
						</Link>
					</p>
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

export default Login;
