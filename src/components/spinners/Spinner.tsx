import styles from "./Spinner.module.css";

const Spinner: () => JSX.Element = () => {
	return (
		<div className={styles.spinnerContainer}>
			<div className={styles.spinner}></div>
		</div>
	);
}

export default Spinner;
