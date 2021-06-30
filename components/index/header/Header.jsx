import Link from 'next/link';
import images from '../../../images/images.json';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles['logo-around']}>
				<Link href='/'>
					<img src={images.logos.temp} alt='Chargè de Clientèle' />
				</Link>
			</div>
			<div className={styles['links-around']}>
				<Link href='/'>
					<span>
						<i className='fas fa-home' /> Accueil
					</span>
				</Link>
				<Link href='/envoyer-votre-cv'>
					<span>
						<i className='fas fa-file-alt' /> Envoyer votre CV
					</span>
				</Link>
				<Link href='/contacts'>
					<span>
						<i className='fas fa-phone-alt' /> Contacts
					</span>
				</Link>
			</div>
		</header>
	);
}

export default Header;
