import React from 'react';
import Link from 'next/link';
import { Input, Form, FormGroup, Label } from 'reactstrap';
import { signInWithGoogle, signInWithEmailAndPassword } from '../firebase';
import useForm from '../hooks/useForm';

const SignIn = () => {
	const submit = () => {
			signInWithEmailAndPassword( values.email, values.password ); // eslint-disable-line no-use-before-define

			setValues( { email: '', password: '' } ); // eslint-disable-line no-use-before-define
		},
		{ values, setValues, handleChange, handleSubmit } = useForm( submit );

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
			<Input className='btn btn-block btn-primary mt-3' type='submit' value='Login' />
			<Input
				className='btn btn-block btn-primary mt-3'
				type='button'
				value='Login With Google'
				onClick={signInWithGoogle}
			/>
		</Form>
	);
};

export default SignIn;
