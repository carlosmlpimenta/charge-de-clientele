import Carrosel from '../components/index/carrosel/Carrosel';
import Head from 'next/head';
import PhoneNumber from '../components/contacts/PhoneNumber';

function contacts() {
	return (
		<>
			<Head>
				<title>Contacts</title>
			</Head>
			<Carrosel />
			<PhoneNumber number='918768932' />
		</>
	);
}

export default contacts;
