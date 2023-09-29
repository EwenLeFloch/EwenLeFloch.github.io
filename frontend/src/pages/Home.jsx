import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Projects from "../components/Projects";
import Landing from "../components/Landing";

const Home = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Landing />
				<Projects />
			</main>
			<Footer />
		</>
	);
};

export default Home;
