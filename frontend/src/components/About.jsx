import React from "react";
import Carousel from "./Carousel";

const About = () => {
	const contentItems = [
		{
			title: "Titre 1",
			paragraph: "Description du contenu 1.",
		},
		{
			title: "Titre 2",
			paragraph: "Description du contenu 2.",
		},
		{
			title: "Titre 3",
			paragraph: "Description du contenu 3.",
		},
	];

	return (
		<section id="about" className="about">
			<h2>À PROPOS DE</h2>
			<Carousel items={contentItems} />
		</section>
	);
};

export default About;
