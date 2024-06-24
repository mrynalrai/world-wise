// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";
import Button from "../button/Button";

// export function convertToEmoji(countryCode) {
// 	const codePoints = countryCode
// 		.toUpperCase()
// 		.split("")
// 		.map((char) => 127397 + char.charCodeAt());
// 	return String.fromCodePoint(...codePoints);
// }

const Form: () => JSX.Element = () => {
	const navigate = useNavigate();

	const [cityName, setCityName] = useState<string>("");
	const [country, setCountry] = useState<string>("");
	const [date, setDate] = useState<string>(new Date().toDateString());
	const [notes, setNotes] = useState("");

	function handleAdd (args: unknown): void {
		// TODO
		const [e, msg] = [...(args as unknown[])];
		(e as Event).preventDefault();
		console.log(msg);
	}

	function handleBack (args: unknown): void {
		(args as Event).preventDefault();
		navigate(-1);
	}

	return (
		<form className={styles.form}>
			<div className={styles.row}>
				<label htmlFor="cityName">City name</label>
				<input
					id="cityName"
					onChange={(e) => setCityName(e.target.value)}
					value={cityName}
				/>
				{/* <span className={styles.flag}>{emoji}</span> */}
			</div>

			<div className={styles.row}>
				<label htmlFor="date">When did you go to {cityName}?</label>
				<input
					id="date"
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
			</div>

			<div className={styles.row}>
				<label htmlFor="notes">Notes about your trip to {cityName}</label>
				<textarea
					id="notes"
					onChange={(e) => setNotes(e.target.value)}
					value={notes}
				/>
			</div>

			<div className={styles.buttons}>
				<Button onClick={(e) => handleAdd([e, "add"])} type="primary">Add</Button>
				<Button onClick={handleBack} type="back">&larr; Back</Button>
			</div>
		</form>
	);
}

export default Form;
