import { useCallback } from "react";

type UseHttp = {
	get: <T>(url: string) => Promise<T>;
}

const formatUrl = (partialUrl: string): string => {
    const url = `${import.meta.env.VITE_API_URL}/${partialUrl}`;
	console.log(url);
	return url;
};

const useHttp: () => UseHttp = () => {
	const get: <T>(url: string) => Promise<T> = useCallback(async (url) => {
		return await fetch(formatUrl(url))
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			});
	}, []);

	return { get };
}

export default useHttp;
