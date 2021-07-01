import Button from '../../generics/button/Button';
import { goToForm } from '../../navigate';
import styles from './Info.module.css';

function Info() {
	return (
		<section className={styles.info}>
			<div className={styles['info-around']}>
				<h3>Contacts</h3>
				<p>
					Vous pouvez nous contacter via notre e-mail ou en envoyant un message
					en utilisant le formulaire sur cette page.
				</p>
				{/*
					href="mailto:" - para enviar email para o endereço
					href="tel:" - para ligar para o telemóvel
				*/}
				<a href='mailto:noreply.chargedeclientele@gmail.com'>
					<i aria-hidden className='fas fa-envelope' />{' '}
					noreply.chargedeclientele@gmail.com
				</a>
				<Button className={styles.button} onClick={goToForm}>
					Envoyer votre Message
				</Button>
			</div>
		</section>
	);
}

export default Info;
