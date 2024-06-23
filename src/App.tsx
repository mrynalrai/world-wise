import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
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
						<Route index element={<p>List of Cities</p>} />
						<Route path="cities" element={<p> List of Cities</p>} />
						<Route path="countries" element={<p> List of Countries</p>} />
						<Route path="form" element={<p> Form</p>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
