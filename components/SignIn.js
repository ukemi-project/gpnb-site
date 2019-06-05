import React from 'react';
import Link from 'next/link';
import { Input, Form, FormGroup, Label } from 'reactstrap';
import { signInWithGoogle, signInWithEmailAndPassword } from '../firebase';
import useForm from '../hooks/useForm';

const SignIn = () => {
	// UseForm Callback function
	const submit = () => {
			signInWithEmailAndPassword( values.email, values.password ); // eslint-disable-line no-use-before-define

			setValues( { email: '', password: '' } ); // eslint-disable-line no-use-before-define
		},
		{ values, hasErrors, setValues, handleChange, handleSubmit } = useForm( submit );

	return (
		<Form className='mb-3' name='login' onSubmit={handleSubmit}>
			<FormGroup>
				<div className='input-group with-focus'>
					<Input
						type='email'
						id='id-email'
						name='email'
						className='border-right-0'
						placeholder='Enter email'
						autoComplete='username'
						data-validate='[&quot;required&quot;, &quot;email&quot;]'
						invalid={hasErrors( 'email', 'required' ) || hasErrors( 'email', 'email' )}
						value={values.email}
						onChange={handleChange}
					/>
					<div className='input-group-append'>
						<span className='input-group-text text-muted bg-transparent border-left-0'>
							<em className='fa fa-envelope' />
						</span>
					</div>
				</div>
			</FormGroup>
			<FormGroup>
				<div className='input-group with-focus'>
					<Input
						type='password'
						id='id-password'
						name='password'
						className='border-right-0'
						placeholder='Password'
						autoComplete='current-password'
						data-param={6}
						data-validate='[&quot;required&quot;, &quot;minlen&quot;]'
						invalid={hasErrors( 'password', 'required' ) || hasErrors( 'password', 'minlen' )}
						value={values.password}
						onChange={handleChange}
					/>
					<div className='input-group-append'>
						<span className='input-group-text text-muted bg-transparent border-left-0'>
							<em className='fa fa-lock' />
						</span>
					</div>
				</div>
			</FormGroup>
			<div className='clearfix'>
				<div className='checkbox c-checkbox float-left mt-0'>
					<Label check>
						<Input type='checkbox' value='' name='remember' />
						<span className='fa fa-check' />Remember Me
					</Label>
				</div>
				<div className='float-right'>
					<Link href='/pages/recover' as='/recover'>
						<a className='text-muted'>Reset password</a>
					</Link>
				</div>
			</div>
			<button className='btn btn-block btn-blue mt-3' type='submit'>
				Login
			</button>
			<button className='btn btn-block btn-blue mt-3' type='button' onClick={signInWithGoogle}>
				Login with Google
			</button>
		</Form>
	);
};

export default SignIn;
