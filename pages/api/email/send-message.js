import { key } from '../../../config/auth';
import { transport } from '../../../config/email';

export default async (req, res) => {
	if (
		!(
			req.body &&
			req.body.auth === key &&
			req.body.data &&
			req.body.data.preNome &&
			req.body.data.nome &&
			req.body.data.email &&
			req.body.data.telefone &&
			req.body.data.message
		)
	) {
		res.status(401).send('Unauthorized');
		return;
	}

	const { preNome, nome, email, telefone, message } = req.body.data;

	const r = await transport.sendMail({
		to: ['carlosmlpimenta@gmail.com'],
		from: '"Chargè de Clientèle" <noreply.chargedeclientele@gmail.com>',
		subject: 'Message envoyé',
		text: `
    Foi enviada uma mensagem a partir da página "Envoyer votre CV".

    Informação da mensagem:
    Prenom: ${preNome}
    Nom: ${nome}
    Email: ${email}
    Telefone: ${telefone}
		Message: ${message}
		`
	});

	if (r.accepted && r.accepted.length) res.status(200).send('OK');
	else res.status(500).send('Internal Server Error');
};
