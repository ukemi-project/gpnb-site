import React from 'react';
import Link from 'next/link';

const Home = () => (
	<>
		<h1>The Greatest Park Never Built</h1>
		<Link prefetch href='/upload'>
			<a>upload</a>
		</Link>
	</>
);

export default Home;
