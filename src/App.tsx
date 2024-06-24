import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import useApiCities from "./hooks/useApiCities";
import { useEffect, useState } from "react";
import City from "./types/City";
import CityList from "./components/city/CityList";

function App() {
    const { getCities } = useApiCities();
    const [cities, setCities] = useState<City[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
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
						<Route path="countries" element={<p> List of Countries</p>} />
						<Route path="form" element={<p> Form</p>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
