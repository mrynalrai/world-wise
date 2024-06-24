import City from "../../types/City";
import Message from "../message/Message";
import Spinner from "../spinners/Spinner";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

type CityListProps = {
    cities: City[],
    isLoading: boolean
}

const CityList: (props: CityListProps) => JSX.Element = (props) => {
    if (props.isLoading)
        return <Spinner />

    if (!props.cities.length)
        return <Message message={"Add your first city by clicking on a city on the map"} />
    return (
        <ul className={styles.cityList}>
            {props.cities.map((city: City) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>
    )
}

export default CityList;