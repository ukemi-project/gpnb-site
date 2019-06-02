import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { auth, createUserProfileDocument } from '../firebase';

const SignUp = () => {
	const [ values, setValues ] = useState( {} );

	const handleChange = ( event ) => {
		event.persist();

		setValues( () => ( { ...values, [ event.target.name ]: event.target.value } ) );
	};

	const handleSubmit = async( event ) => {
		event.preventDefault();

		const { displayName, email, password } = values;

		try {
			const user = await auth.createUserWithEmailAndPassword( email, password );

			createUserProfileDocument( user.user, { displayName } );
		} catch ( err ) {
			console.error( err );
		}

		setValues( { displayName: '', email: '', password: '' } );
	};

	return (
		<form className='mb-3' name='register' onSubmit={handleSubmit}>
			<div className='form-group'>
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
			</div>
			<div className='form-group'>
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
			</div>
			<div className='form-group'>
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
			</div>
			<input className='btn btn-block btn-primary mt-3' type='submit' value='Sign Up' />
		</form>
	);
};

export default SignUp;
