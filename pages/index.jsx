import Carrosel from '../components/index/carrosel/Carrosel';
import Form from '../components/index/form/Form';
import Head from 'next/head';
import Info from '../components/index/info/Info';

function EnvoyerVotreCV() {
	return (
		<>
			<Head>
				<title>Chargè de Clientèle</title>
			</Head>
			<main>
				<Carrosel cv />
				<Info />
				<Form />
			</main>
		</>
	);
}

export default EnvoyerVotreCV;
