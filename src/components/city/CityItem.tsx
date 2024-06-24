import { Link } from "react-router-dom";
import City from "../../types/City";
import formatDate from "../../utils/formatDate";
import styles from "./CityItem.module.css";

type CityItemProps = {
    city: City
}
const CityItem: (props: CityItemProps) => JSX.Element = (props) => {
    const { cityName, emoji, date, id, position } = props.city;

    return (
        <li>
            <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`} >
                <span className={styles.emoji} > {emoji} </span>
                <h3 className={styles.name} > {cityName} </h3>
                <time className={styles.date} > {formatDate(date)} </time>
                <button className={styles.deleteBtn} >&times;</button>
            </Link>
        </li>
    )
}

export default CityItem;