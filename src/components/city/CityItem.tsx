import City from "../../types/City";
import formatDate from "../../utils/formatDate";
import styles from "./CityItem.module.css";

type CityItemProps = {
    city: City
}
const CityItem: (props: CityItemProps) => JSX.Element = (props) => {
    const { cityName, emoji, date } = props.city;

    return (
        <li className={styles.cityItem} >
            <span className={styles.emoji} > {emoji} </span>
            <h3 className={styles.name} > {cityName} </h3>
            <time className={styles.date} > {formatDate(date)} </time>
            <button className={styles.deleteBtn} >&times;</button>
        </li>
    )
}

export default CityItem;