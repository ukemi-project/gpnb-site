import Document from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
		};
	}
}

export default MyDocument;
