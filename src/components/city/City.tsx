import styles from "./City.module.css";
import formatDate from "../../utils/formatDate"
import CityType from "../../types/City";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Message from "../message/Message";

type CityProps = {
	cities: CityType[]
}

const City: (props: CityProps) => JSX.Element = (props) => {
	const { id } = useParams();
	
	const city: CityType | null = useMemo(() => {
		if (id) {
			return props.cities.find(city => city.id.toString() === id) ?? null;
		} 
		return null;
	}, [id, props.cities])

	if (city === null)
		return <Message message="No city with the selected id was found :(" />

	const { cityName, emoji, date, notes } = city;

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
				{/* <ButtonBack /> */}
			</div>
		</div>
	);
}

export default City;
