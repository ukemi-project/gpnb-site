import React from 'react';
import { Input, Form, FormGroup } from 'reactstrap';
import { auth, createUserProfileDocument } from '../firebase';
import useForm from '../hooks/useForm';

const SignUp = () => {
	// UseForm Callback function
	const submit = async() => {
		const { displayName, email, password } = values; // eslint-disable-line no-use-before-define

		try {
			const user = await auth.createUserWithEmailAndPassword( email, password );

			createUserProfileDocument( user.user, { displayName } );
		} catch ( err ) {
			console.error( err );
		}
	};

	const { values, hasErrors, handleChange, handleSubmit } = useForm( submit );

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
						data-validate='[&quot;required&quot;, &quot;alphanum&quot;]'
						invalid={hasErrors( 'displayName', 'required' ) || hasErrors( 'displayName', 'alphanum' )}
						value={values.displayName}
						onChange={handleChange}
					/>
					<div className='input-group-append'>
						<span className='input-group-text text-muted bg-transparent border-left-0'>
							<em className='fa fa-user' />
						</span>
					</div>
					{hasErrors( 'displayName', 'required' ) && (
						<span className='invalid-feedback'>Field is required</span>
					)}
					{hasErrors( 'displayName', 'alphanum' ) && (
						<span className='invalid-feedback'>Must be alphanumeric only</span>
					)}
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
					{hasErrors( 'email', 'required' ) && <span className='invalid-feedback'>Field is required</span>}
					{hasErrors( 'email', 'email' ) && <span className='invalid-feedback'>Field must be valid email</span>}
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
					{hasErrors( 'password', 'required' ) && <span className='invalid-feedback'>Field is required</span>}
					{hasErrors( 'password', 'minlen' ) && (
						<span className='invalid-feedback'>Must be at least 6 characters</span>
					)}
				</div>
			</FormGroup>
			<FormGroup>
				<div className='input-group with-focus'>
					<Input
						type='password'
						id='id-password2'
						name='password2'
						className='border-right-0'
						placeholder='Confirm Password'
						invalid={hasErrors( 'password2', 'equalto' )}
						data-validate='[&quot;equalto&quot;]'
						data-param='id-password'
						value={values.password2}
						onChange={handleChange}
					/>
					<div className='input-group-append'>
						<span className='input-group-text text-muted bg-transparent border-left-0'>
							<em className='fa fa-lock' />
						</span>
					</div>
					{hasErrors( 'password2', 'equalto' ) && (
						<span className='invalid-feedback'>Passwords must match</span>
					)}
				</div>
			</FormGroup>
			<button className='btn btn-block btn-primary mt-3' type='submit'>
				Create Account
			</button>
		</Form>
	);
};

export default SignUp;
