import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Container, Row, Col } from 'reactstrap';

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
			accept: 'image/png, image/jpeg, image/gif, model/gltf+json',
			minSize: 0,
			maxSize
		} ),
		isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[ 0 ].size > maxSize,
		acceptedFilesItems = acceptedFiles.map( ( file ) => (
			<p key={file.path}>
				{file.path} - {file.size} bytes
			</p>
		) ),
		rejectedFilesItems = rejectedFiles.map( ( file ) => (
			<p key={file.path}>
				{file.path} - {file.size} bytes
			</p>
		) );

	const clearFiles = ( e ) => {
		e.preventDefault();
		e.stopPropagation();
		// This.setState( {
		// 	stat: this.state.files.length ? `${this.state.files.length} file(s) cleared.` : 'No files to clear.'
		// } );
		// this.setState( {
		// 	files: []
		// } );
	};

	// Const thumbs = files.map( ( file, index ) => (
	// 	<Col key={index} md={3}>
	// 		<img className='img-fluid mb-2' src={file.preview} alt='Item' />
	// 	</Col>
	// ) );

	return (
		/* <div className='content-heading'>Upload.</div> */
		<Container className='container-md'>
			<p className='text-center text-white mb-3'>
				You can contribute to the Greatest Park Never Built by submitting your 3D models and designs below.
				Currently we can only accept submissions in <em>gITF</em> file format and all files are subject to
				manual verification.
			</p>
			<div {...getRootProps()} className={`dropzone card p-3 ${isDragActive ? 'dropzone-drag-active' : ''}`}>
				<input {...getInputProps()} />
				<div className='dropzone-previews flex'>
					<div className='text-center dz-default dz-message'>Drop files here to upload</div>
				</div>
				<div className='d-flex align-items-center'>
					<small>File type/size restrictions active.</small>
					<small className='ml-auto'>
						<button type='button' className='btn btn-link' onClick={clearFiles}>
							Clear files
						</button>
					</small>
				</div>
				{/* {!isDragActive && 'Drag & drop, or click to select files'}
					{isDragActive && !isDragReject && 'Drop!'}
					{isDragReject && 'File type not accepted, sorry!'}
					{isFileTooLarge && <div className='text-danger mt-2'>File is too large.</div>} */}
			</div>
			<p>
				<b>Status</b>: <span>{message}</span>
				<h4>Accepted files</h4>
				<div className='card card-flat mt-1 text-success'>{acceptedFilesItems}</div>
				<h4>Rejected files</h4>
				<div className='card card-flat mt-1 text-danger'>{rejectedFilesItems}</div>
			</p>
		</Container>
	);
};

export default FileUploader;
