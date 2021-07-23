import Link from 'next/link';
import { goToForm } from '../../navigate';
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
				<span onClick={goToForm}>
					<i aria-hidden className='fas fa-file-alt' /> Envoyer votre CV
				</span>
				<Link href='/contacts'>
					<span>
						<i aria-hidden className='fas fa-envelope' /> Contacts
					</span>
				</Link>
			</div>
		</header>
	);
}

export default Header;
