import styles from "./City.module.css";
import formatDate from "../../utils/formatDate"
import CityType from "../../types/City";

type CityProps = {
	cityItem: CityType
}

const City: (props: CityProps) => JSX.Element = (props) => {
	const { cityName, emoji, date, notes } = props.cityItem;

	return (
		<div className={styles.city}>
			<div className={styles.row}>
				<h6>City name</h6>
				<h3>
					<span>{emoji}</span> {cityName}
				</h3>
			</div>

			<div className={styles.row}>
				<h6>You went to {cityName} on</h6>
				{
					date && <p>{formatDate(date)}</p>
				}

			</div>

			{notes && (
				<div className={styles.row}>
					<h6>Your notes</h6>
					<p>{notes}</p>
				</div>
			)}

			<div className={styles.row}>
				<h6>Learn more</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${cityName}`}
					target="_blank"
					rel="noreferrer"
				>
					Check out {cityName} on Wikipedia &rarr;
				</a>
			</div>

			<div>
				<ButtonBack />
			</div>
		</div>
	);
}

export default City;
