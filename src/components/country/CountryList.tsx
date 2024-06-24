import Country from "../../types/Country";
import Message from "../message/Message";
import Spinner from "../spinners/Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css"

type CountryListProps = {
    countries: Country[],
    isLoading: boolean
};

const CountryList: (props: CountryListProps) => JSX.Element = (props) => {
    if (props.isLoading)
        return <Spinner />

    if (!props.countries.length)
        return <Message message={"Add your first country by clicking on a country on the map"} />
    return (
        <ul className={styles.countryList}>
            {props.countries.map((country: Country) => (
                <CountryItem country={country} key={country.country} />
            ))}
        </ul>
    )
}

export default CountryList;