import React from 'react';
import Link from 'next/link';
import { Input } from 'reactstrap';
import { signInWithGoogle, signInWithEmailAndPassword } from '../firebase';
import useForm from '../hooks/useForm';

const SignIn = () => {
	const submit = () => {
			signInWithEmailAndPassword( values.email, values.password ); // eslint-disable-line no-use-before-define

			setValues( { email: '', password: '' } ); // eslint-disable-line no-use-before-define
		},
		{ values, setValues, handleChange, handleSubmit } = useForm( submit );

	return (
		<form className='mb-3' name='login' onSubmit={handleSubmit}>
			<div className='form-group'>
				<div className='input-group with-focus'>
					<Input
						type='email'
						id='id-email'
						name='email'
						className='border-right-0'
						placeholder='Enter email'
						autoComplete='current-email'
						value={values.email}
						onChange={handleChange}
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
						autoComplete='current-password'
						value={values.password}
						onChange={handleChange}
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
			<input className='btn btn-block btn-primary mt-3' type='submit' value='Login' />
			<button className='btn btn-block btn-primary mt-3' onClick={signInWithGoogle}>
				Login With Google
			</button>
		</form>
	);
};

export default SignIn;
