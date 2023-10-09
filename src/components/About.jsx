import React from "react";
import Carousel from "./Carousel";

const About = () => {
	const contentItems = [
		{
			title: "MOI",
		},
		{
			title: "MA FORMATION",
		},
	];

	return (
		<section id="about" className="carousel">
			<Carousel items={contentItems} />
		</section>
	);
};

export default About;
