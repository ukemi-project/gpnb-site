import React, { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInAndSignUp = () => {
	const [ formType, setFormType ] = useState( null );

	return <div>{formType ? <SignUp form={setFormType} /> : <SignIn form={setFormType} />}</div>;
};

export default SignInAndSignUp;
