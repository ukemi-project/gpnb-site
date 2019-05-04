import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import NProgress from 'next-nprogress/component';
import withApollo from './../lib/withData';
import Page from '../containers/Page';
class MyApp extends App {
	render() {
		const { Component, pageProps, apolloClient } = this.props;

		return (
			<Container>
				<ApolloProvider client={apolloClient}>
					<NProgress color="#F43779" options={{ trickleSpeed: 50 }} showAfterMs={0} />
					<Page>
						<Component {...pageProps} />
					</Page>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withApollo(MyApp);
