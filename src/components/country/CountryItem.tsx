import Country from "../../types/Country";
import styles from "./CountryItem.module.css";

type CountryItemProps = {
	country: Country
}

const CountryItem: (props: CountryItemProps) => JSX.Element = (props) => {
	return (
		<li className={styles.countryItem}>
			<span>{props.country.emoji}</span>
			<span>{props.country.country}</span>
		</li>
	);
}

export default CountryItem;
