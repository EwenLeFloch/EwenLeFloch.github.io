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
		{
			title: "Titre 3",
			paragraph: "Description du contenu 3.",
		},
	];

	return (
		<section id="about" className="carousel">
			<Carousel items={contentItems} />
		</section>
	);
};

export default About;
