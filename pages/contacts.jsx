import Carrosel from '../components/index/carrosel/Carrosel';
import Form from '../components/contacts/form/Form';
import Head from 'next/head';
import Info from '../components/contacts/info/Info';

function contacts() {
	return (
		<>
			<Head>
				<title>Contacts</title>
			</Head>
			<Carrosel />
			<Info />
			<Form />
		</>
	);
}

export default contacts;
