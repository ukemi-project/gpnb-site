import App, { Container } from 'next/app';
import React from 'react';
import NProgress from 'next-nprogress/component';
import component from 'next-nprogress/dist/component';
// import Page from '../containers/Page';

class MyApp extends App {
	render() {
		<Container>
			<NProgress />
			<React.Fragment>
				<Component {...pageProps} />
			</React.Fragment>
		</Container>;
	}
}

export default MyApp;
