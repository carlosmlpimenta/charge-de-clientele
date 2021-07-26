import Link from 'next/link';
import { goToForm } from '../../navigate';
import images from '../../../images/images.json';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={styles['logo-around']}>
				<Link href='/'>
					<img src={images.logos.temp} alt='Chargè de Clientèle' />
				</Link>
			</div>
			<div className={styles['links-around']}>
				{router.pathname === '/' ? (
					<span onClick={goToForm}>
						<i aria-hidden className='fas fa-file-alt' /> Envoyer votre CV
					</span>
				) : (
					<Link href='/'>
						<span>
							<i aria-hidden className='fas fa-file-alt' /> Envoyer votre CV
						</span>
					</Link>
				)}

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
