import React from 'react';
import { Input, Form, FormGroup } from 'reactstrap';
import { auth, createUserProfileDocument } from '../firebase';
import useForm from '../hooks/useForm';

const SignUp = () => {
	// UseForm Callback function
	const register = async() => {
		const { displayName, email, password } = values; // eslint-disable-line no-use-before-define

		try {
			const user = await auth.createUserWithEmailAndPassword( email, password );

			createUserProfileDocument( user.user, { displayName } );
		} catch ( err ) {
			console.error( err );
		}
	};

	const { values, handleChange, handleSubmit } = useForm( register );

	return (
		<Form className='mb-3' name='register' onSubmit={handleSubmit}>
			<FormGroup>
				<div className='input-group with-focus'>
					<Input
						type='text'
						id='id-name'
						name='displayName'
						className='border-right-0'
						placeholder='Display Name'
						value={values.displayName}
						onChange={handleChange}
					/>
					<div className='input-group-append'>
						<span className='input-group-text text-muted bg-transparent border-left-0'>
							<em className='fa fa-user' />
						</span>
					</div>
				</div>
			</FormGroup>
			<FormGroup>
				<div className='input-group with-focus'>
					<Input
						type='email'
						id='id-email'
						name='email'
						className='border-right-0'
						placeholder='Enter email'
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
			<Input className='btn btn-block btn-primary mt-3' type='submit' value='Sign Up' />
		</Form>
	);
};

export default SignUp;
