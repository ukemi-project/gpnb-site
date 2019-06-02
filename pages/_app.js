import App, { Container } from 'next/app';
import React from 'react';
import { UserProvider } from '../providers/UserProvider';
import Layout from '../containers/Layout';

import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'simple-line-icons/css/simple-line-icons.css';

import '../styles/bootstrap.scss';
import '../styles/app.scss';

class MyApp extends App {
	static async getInitialProps( { Component, ctx } ) {
		let pageProps = {};

		if ( Component.getInitialProps ) {
			pageProps = await Component.getInitialProps( ctx );
		}

		return { pageProps };
	}

	// ComponentDidMount = () => {
	// 	const user = localStorage.getItem( 'gpnb-user' );

	// 	if ( this.state.user ) {
	// 		this.setState( {
	// 			user
	// 		} );
	// 	} else {
	// 		Router.push( '/login' );
	// 	}
	// };

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<UserProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</UserProvider>
			</Container>
		);
	}
}

export default MyApp;
