import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import images from '../../../images/images.json';
import { key } from '../../../config/auth';
import styles from './Form.module.css';
import { useState } from 'react';

function Form() {
	const [nome, setNome] = useState('');
	const [preNome, setPreNome] = useState('');
	const [email, setEmail] = useState('');
	const [telefone, setTelefone] = useState('');
	const [message, setMessage] = useState('');
	const [isChecked, setChecked] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const onSubmit = e => {
		e.preventDefault();

		setLoading(true);

		fetch('/api/email/send-message', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				auth: key,
				data: {
					preNome,
					nome,
					email,
					telefone,
					message
				}
			})
		})
			.then(res => {
				if (res.status === 200) {
					document.body.scrollIntoView({ behavior: 'smooth' });
					alert('Message envoyé');
					window.location.reload();
				} else alert("Une erreur s'est produite. Veuillez réessayer");
			})
			.catch(err => {
				alert("Une erreur s'est produite. Veuillez réessayer");
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	const changer = setValue => e => setValue(e.target.value);

	return (
		<section id='form-section' className={styles['form-section']}>
			<div className={styles['form-around']}>
				<img
					className={styles.img}
					src={images.logos.temp}
					alt='Chargè de Clientèle'
				/>
				<h3>Envoyer un Message</h3>
				<form className={styles.form} {...{ onSubmit }}>
					<input
						required
						type='text'
						name='preNom'
						placeholder='*PRÉNOM'
						value={preNome}
						onChange={changer(setPreNome)}
					/>
					<input
						required
						type='text'
						name='nome'
						placeholder='*NOM'
						value={nome}
						onChange={changer(setNome)}
					/>
					<input
						required
						type='email'
						name='email'
						placeholder='*E-MAIl'
						value={email}
						onChange={changer(setEmail)}
					/>
					<input
						required
						type='tel'
						name='telefone'
						placeholder='*TÉLÉPHONE'
						value={telefone}
						onChange={changer(setTelefone)}
					/>
					<textarea
						required
						name='message'
						placeholder='*ÉCRIVEZ VOTRE MESSAGE'
						value={message}
						onChange={changer(setMessage)}
					/>
					<div className={styles['check-around']}>
						<i
							aria-hidden
							className={`far fa-${isChecked ? 'check-square' : 'square'}`}
							onClick={() => setChecked(!isChecked)}
						/>
						<span>
							J'accepte les{' '}
							<Link href='/termes-et-conditions'>termes et conditions</Link> et
							la{' '}
							<Link href='/politique-de-confidentialite'>
								politique de confidentialité
							</Link>
						</span>
					</div>
					<button
						className={`${styles.button} ${!isChecked ? styles.disabled : ''}`}
						disabled={!isChecked || isLoading}
					>
						Envoyer votre Message
					</button>
				</form>
			</div>
		</section>
	);
}

export default Form;
