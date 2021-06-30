import Button from '../../generics/button/Button';
import { goToForm } from '../../navigate';
import images from '../../../images/images.json';
import styles from './Info.module.css';

function Info() {
	return (
		<section className={styles.info}>
			<div className={styles['info-around']}>
				<h3>Notre Offre</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis
					gravida ante ac consequat. Maecenas at neque facilisis, porta ante ac,
					rhoncus lorem. Nulla risus purus, aliquet nec volutpat quis, dictum
					vel nibh. Nam in nunc at nunc ultrices posuere. Pellentesque non
					blandit sem. Aliquam nulla mauris, sodales at nibh id, semper mattis
					massa. Fusce aliquam ultrices justo, ac suscipit risus maximus id.
					Nunc feugiat ornare fringilla.
				</p>
				<div className={styles['image-row']}>
					<div className={styles['offre-around']}>
						<h3>Nous vous offrons</h3>
						<ul className={styles.list}>
							<li>Salaire et primes motivants et attractifs;</li>
							<li>Prime transport;</li>
							<li>Formation rémunérée et contrat de travail;</li>
							<li>
								Contrat de travail de 6 mois avec possibilité d’évolution en
								CDI;
							</li>
							<li>Dimanches toujours libres;</li>
							<li>
								Perspectives d’évolution et reconnaissance des collaborateurs;
							</li>
							<li>
								Ambiance multiculturelle et décontractée avec espace de détente
								(Zone Relax avec canapés, télévisions, console de jeux
								Playstation 4);
							</li>
							<li>
								Salaire de base de 800 Euro plus alimentation (prime repas);
							</li>
							<li>Prime de performance;</li>
							<li>Prime de transport.</li>
						</ul>
						<Button className={styles.button} onClick={goToForm}>
							Envoyer votre CV
						</Button>
					</div>
					<img
						alt='Envoyer votre CV'
						className={styles.splash}
						src={images.index.splash}
					/>
				</div>
			</div>
		</section>
	);
}

export default Info;
