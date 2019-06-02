import React, { useState, useCallback } from 'react';
import { Input, Form, FormGroup, FormText, Label } from 'reactstrap';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import useForm from '../hooks/useForm';

const FileUploader = () => {
	const [ uploadPercentage, setUploadPercentage ] = useState( 0 ),
		[ uploadedFile, setUploadedFile ] = useState( {} ),
		[ message, setMessage ] = useState( '' ),
		maxSize = 1048576 * 50; // 1MB * number

	const onDrop = useCallback( async( acceptedFiles ) => {
		try {
			let formData = new FormData();

			acceptedFiles.forEach( ( file ) => {
				formData.append( 'file', file );
			} );

			console.log( formData ); // LOG

			const res = await axios.post( '/api/upload', formData, {
				onUploadProgress: ( progressEvent ) => {
					setUploadPercentage( parseInt( Math.round( progressEvent.loaded * 100 / progressEvent.total ) ) );
					setTimeout( () => setUploadPercentage( 0 ), 10000 );
				}
			} );

			const { fileName, filePath } = res.data;

			setUploadedFile( { fileName, filePath } );
			setMessage( 'File Uploaded' );
		} catch ( err ) {
			console.log( err );
		}
	}, [] );

	const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone( {
			onDrop,
			accept: 'image/png, image/jpeg, image/gif',
			minSize: 0,
			maxSize
		} ),
		isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[ 0 ].size > maxSize;

	const acceptedFilesItems = acceptedFiles.map( ( file ) => (
		<p key={file.path}>
			{file.path} - {file.size} bytes
		</p>
	) );

	const rejectedFilesItems = rejectedFiles.map( ( file ) => (
		<p key={file.path}>
			{file.path} - {file.size} bytes
		</p>
	) );

	return (
		<section className='container'>
			<div className='container text-center mt-5'>
				<div {...getRootProps( { className: 'dropzone' } )}>
					<input {...getInputProps()} />
					{!isDragActive && 'Drag & drop, or click to select files'}
					{isDragActive && !isDragReject && 'Drop!'}
					{isDragReject && 'File type not accepted, sorry!'}
					{isFileTooLarge && <div className='text-danger mt-2'>File is too large.</div>}
				</div>
				<div>
					<h4>Accepted files</h4>
					<div className='card card-flat mt-1 text-success'>{acceptedFilesItems}</div>
					<h4>Rejected files</h4>
					<div className='card card-flat mt-1 text-danger'>{rejectedFilesItems}</div>
				</div>
			</div>
		</section>
	);
};

export default FileUploader;
