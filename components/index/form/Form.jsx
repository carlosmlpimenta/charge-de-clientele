import Link from 'next/link';
import images from '../../../images/images.json';
import styles from './Form.module.css';
import { useState } from 'react';

function Form() {
	const [nome, setNome] = useState('');
	const [preNome, setPreNome] = useState('');
	const [email, setEmail] = useState('');
	const [telefone, setTelefone] = useState('');
	const [isChecked, setChecked] = useState(false);

	const onSubmit = e => {
		e.preventDefault();
		alert('TESTE BOM DIA');
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
				<h3>Candidature</h3>
				<form className={styles.form} {...{ onSubmit }}>
					<input
						type='text'
						name='preNome'
						placeholder='*PRÉNOM'
						value={preNome}
						onChange={changer(setPreNome)}
					/>
					<input
						type='text'
						name='nome'
						placeholder='*NOM'
						value={nome}
						onChange={changer(setNome)}
					/>
					<input
						type='email'
						name='email'
						placeholder='*E-MAIl'
						value={email}
						onChange={changer(setEmail)}
					/>
					<input
						type='tel'
						name='telefone'
						placeholder='*TÉLÉPHONE'
						value={telefone}
						onChange={changer(setTelefone)}
					/>
					<div className={styles['check-around']}>
						<i
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
						disabled={!isChecked}
					>
						Envoyer votre Candidature
					</button>
				</form>
			</div>
		</section>
	);
}

export default Form;
