import { useEffect, useState } from 'react';

import images from '../../../../images/images.json';
import styles from './CarroselBackground.module.css';

const imgList = images.carrosel;

function CarroselBackground() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((index + 1) % imgList.length);
		}, 4000);

		return () => {
			clearInterval(interval);
		};
	}, [index]);

	return (
		<div className={styles.around}>
			{imgList.map((e, i) => (
				<img
					key={e}
					className={`${styles.image} ${
						i === index ? styles.show : styles.hide
					}`}
					alt='Chargè de Clientèle'
					src={e}
				/>
			))}
		</div>
	);
}

export default CarroselBackground;
