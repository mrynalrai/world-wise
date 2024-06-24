import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import useApiCities from "./hooks/useApiCities";
import City from "./types/City";
import CityList from "./components/city/CityList";
import Country from "./types/Country";
import CountryList from "./components/country/CountryList";

function App() {
    const { getCities } = useApiCities();
    const [cities, setCities] = useState<City[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
	function getCountries(cities: City[]) {
		return cities.reduce((countries: Country[], city: City) => {
			if (countries.find(country => city.country === country.country))
				return countries;
			else {
				const newCountry: Country = {
					country: city.country,
					emoji: city.emoji
				}
				return [...countries, newCountry];
			}
		}, [])
	}

	const countries: Country[] = useMemo(() => {
		// Get Country List from cities
		return getCountries(cities);
	}, [cities])

    useEffect(() => {
        const fetchCities = async () => {
            setIsLoading(true);
            try {
                const fetchedCities = await getCities();
                setCities(fetchedCities);
            } catch {
                alert("Something went wrong while fetching cities data");
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities();
    }, [getCities])
	
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="/product" element={<Product />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<PageNotFound />} />
					<Route path="/app" element={<AppLayout />} >
						<Route index element={
								<CityList cities={cities} isLoading={isLoading} />
							} 
						/>
						<Route path="cities" element={
								<CityList cities={cities} isLoading={isLoading} />
							} 
						/>
						<Route path="countries" element={
								<CountryList countries={countries} isLoading={isLoading} />
							}  
						/>
						<Route path="form" element={<p> Form</p>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
