import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				{/* En cas de route non existente */}
				{/* <Route path="/404" element={<Error404 />}></Route>
				<Route path="*" element={<Navigate to="/404" />}></Route> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
