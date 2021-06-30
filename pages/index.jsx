import Carrosel from '../components/index/carrosel/Carrosel';
import Head from 'next/head';

function index() {
	return (
		<>
			<Head>
				<title>Chargè de Clientèle</title>
			</Head>
			<main>
				<Carrosel />
			</main>
		</>
	);
}

export default index;
