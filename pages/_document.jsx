import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name='theme-color' content='#56a4ff' />
					<meta httpEquiv='Accept-CH' content='DPR, Viewport-Width, Width' />

					<link
						rel='shortcut icon'
						href='https://res.cloudinary.com/cdn-cmlp/image/upload/v1624544861/charge-de-clientele/logos/temp.png'
					/>

					<script
						src='https://kit.fontawesome.com/0f207d9f23.js'
						crossOrigin='anonymous'
					></script>

					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
