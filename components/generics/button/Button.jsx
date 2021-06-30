import styles from './Button.module.css';

function Button({ className, onClick, children }) {
	return (
		<div className={`${styles.button} ${className || ''}`} {...{ onClick }}>
			{children}
		</div>
	);
}

export default Button;
