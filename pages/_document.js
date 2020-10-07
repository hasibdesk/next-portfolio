import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name='description' content='A site for my programming portfolio' />
					<meta charSet='utf-8' />
					<meta name='robots' content='noindex, nofollow' />
					<meta name='viewport' content='width=device-width' />

					<link rel='stylesheet' href='' />
				</Head>

				<Main />

				<NextScript />

				<style global jsx>
					{`
						* {
							padding: 0;
							margin: 0;
						}
						body {
							padding: 0;
							margin: 0;
						}
					`}
				</style>
			</Html>
		);
	}
}

export default MyDocument;
