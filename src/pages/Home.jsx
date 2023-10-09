import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Projects from "../components/Projects";
import Landing from "../components/Landing";
import About from "../components/About";

const Home = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Landing />
				<About />
				<Projects />
			</main>
			<Footer />
		</>
	);
};

export default Home;
