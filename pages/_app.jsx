import '../styles/globals.css';

import Header from '../components/index/header/Header';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
