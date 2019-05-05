import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';
import UserContext from '../components/UserContext';
import Layout from '../containers/Layout';

import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import 'simple-line-icons/css/simple-line-icons.css';

import '../styles/app.scss';

class MyApp extends App {
	state = {
		user: null,
		theme: 'dark'
	};

	static async getInitialProps( { Component, ctx } ) {
		let pageProps = {};

		if ( Component.getInitialProps ) {
			pageProps = await Component.getInitialProps( ctx );
		}

		return { pageProps };
	}

	componentDidMount = () => {
		const user = localStorage.getItem( 'gpnb-user' );

		if ( this.state.user ) {
			this.setState( {
				user
			} );
		} else {
			Router.push( '/login' );
		}
	};

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<UserContext.Provider
					value={{
						user: this.state.user,
						theme: this.state.theme
					}}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</UserContext.Provider>
			</Container>
		);
	}
}

export default MyApp;
