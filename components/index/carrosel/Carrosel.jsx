import Button from '../../generics/button/Button';
import CarroselBackground from './background/CarroselBackground';
import Link from 'next/link';
import { goToForm } from '../../navigate';
import styles from './Carrosel.module.css';

function Carrosel({ cv }) {
	return (
		<section className={styles.carrosel}>
			<CarroselBackground />
			<div className={styles.backdrop} />
			<div className={styles['main-text']}>
				<h1>Chargè de Clientèle</h1>
				<p>
					Vous maîtrisez la langue française et avez une excellente capacité de
					communication et d’argumentation? Êtes vous proactif, dynamique,
					assidu et avec sens de responsabilité?
				</p>
				{cv ? (
					<Button className={styles.button} onClick={goToForm}>
						Envoyer votre CV
					</Button>
				) : (
					<Link href='/#info-section'>
						<Button className={styles.button}>Envoyer votre CV</Button>
					</Link>
				)}
			</div>
		</section>
	);
}

export default Carrosel;
