import { useCallback } from "react";
import City from "../types/City";
import useHttp from "./useHttp";

const useApiCities = () => {
    const { get } = useHttp();
    const getCities: () => Promise<City[]> = useCallback(
        async () => {
            const data: City[] = await get<City[]>(`cities`);
            return data
                ? data.map(city => ({
                    ...city,
                    date: city.date ? new Date(city.date) : new Date()
                }))
                : [];
        }, [get]
    );

    return { getCities };
}

export default useApiCities;