import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';
import UserContext from '../components/UserContext';

class MyApp extends App {
	state = {
		user: true,
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
					{/* <Layout> */}
					<Component {...pageProps} />
					{/* </Layout> */}
				</UserContext.Provider>
			</Container>
		);
	}
}

export default MyApp;
