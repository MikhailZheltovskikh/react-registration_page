import styles from "./TextField.module.css"

export const TextField = ({ label, error, ...otherProps }) => {
	return (
		<div className={styles.item}>
			{error && <span className={styles.error}>{error}</span>}
			<label>
				<span className={styles.name}>{label}</span>
				<input className={styles.input} {...otherProps} />
			</label>
		</div>
	);
};
