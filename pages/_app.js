import App, { Container } from 'next/app';
import React from 'react';
import NProgress from 'next-nprogress/component';
// import Page from '../containers/Page';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		<Container>
			<NProgress color="#F43779" options={{ trickleSpeed: 50 }} showAfterMs={0} />
			<React.Fragment>
				<Component {...pageProps} />
			</React.Fragment>
		</Container>;
	}
}

export default MyApp;
