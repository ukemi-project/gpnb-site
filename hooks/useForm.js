import { useState } from 'react';
import FormValidator from '../components/Validator';

const useForm = ( callback ) => {
	const [ values, setValues ] = useState( {} ),
		[ errors, setErrors ] = useState( {} );

	const handleSubmit = ( event ) => {
		if ( event ) {
			event.preventDefault();
		}

		const inputs = [ ...event.target.elements ].filter( ( i ) => [ 'INPUT', 'SELECT' ].includes( i.nodeName ) ),
			{ errs, hasError } = FormValidator.bulkValidate( inputs );

		if ( hasError ) {
			return setErrors( () => errs );
		}

		callback();
	};

	const handleChange = ( event ) => {
		event.persist();

		const input = event.target,
			value = input.type === 'checkbox' ? input.checked : input.value,
			result = FormValidator.validate( input );

		setValues( () => ( { ...values, [ input.name ]: value } ) );
		setErrors( () => ( { ...errors, [ input.name ]: result } ) );
	};

	const hasErrors = ( inputName, method ) => {
		return errors && errors[ inputName ] && errors[ inputName ][ method ];
	};

	return {
		handleChange,
		handleSubmit,
		errors,
		hasErrors,
		values,
		setValues
	};
};

export default useForm;
