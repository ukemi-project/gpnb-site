import App, { Container } from 'next/app';
import React from 'react';
import Router from 'next/router';
// Import NProgress from 'next-nprogress/component';
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
			Router.push( '/signin' );
		}
	};

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				{/* <NProgress color="#F43779" options={{ trickleSpeed: 50 }} showAfterMs={0} /> */}
				<UserContext.Provider
					value={{
						user: this.state.user,
						theme: this.state.theme
					}}
				>
					<Component {...pageProps} />
				</UserContext.Provider>
			</Container>
		);
	}
}

export default MyApp;