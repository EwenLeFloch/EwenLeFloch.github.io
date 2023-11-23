import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="*" element={<Navigate to="/" />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
