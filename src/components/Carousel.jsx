import React, { useState } from "react";

const Carousel = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1
		);
	};

	const goToPrevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		);
	};

	const carouselContent = (item, index) => {
		if (index === 0) {
			return (
				<div className="carousel__content__text__container">
					<p className="carousel__content__text">
						Je m'appelle Ewen, développeur web de Père en Fils
						depuis 2023. J'aime comprendre le fonctionnement de tout
						ce qui m'entoure et apprendre à les recréer moi-même.
						Curieux et aimant le travail en équipe, je cherche à
						intégrer une entreprise afin d'apprendre à programmer
						avec d'autres développeurs. <br />
						Disponible sur RENNES et ses alentours, je recherche un
						poste de développeur web Junior. <br /> <br />
						Mes skills : HTML, CSS, SCSS, JAVASCRIPT, REACT, MONGODB
						et NODE JS.
						<br /> <br />
						Logiciels utilisés : GITHUB, VSCODE, POSTMAN.
					</p>
					<img
						className="carousel__image"
						src="../assets/images/ewen.webp"
						alt="Ewen Le Floch"
					></img>
				</div>
			);
		} else {
			return (
				<div className="carousel__content__text__container">
					<div className="carousel__content__text">
						J'ai suivi la formation développeur web
						d'OpenClassrooms. <br />
						OpenClassrooms est une école de formations en ligne,
						celles-ci sont basées sur des projets
						professionnalisant. En plus des différents langages
						appris sur cette plateforme, ces projets m'ont permis
						d'apprendre :
						<ul className="carousel__content__text__list">
							<li>L'autonomie et la recherche</li>
							<li>L'organisation de projet (Notion)</li>
							<li>
								L'utilisation de différents logiciels. (Github,
								Figma)
							</li>
						</ul>
					</div>
					<img
						className="carousel__image carousel__image--formation"
						src="../assets/images/openclassrooms.webp"
						alt="Ewen Le Floch"
					></img>
				</div>
			);
		}
	};

	return (
		<>
			<h2 className="section__title">À PROPOS DE</h2>
			<button
				className="carousel__button carousel__button--prev"
				onClick={goToPrevSlide}
			>
				←
			</button>
			<div className="carousel__container">
				{items.map((item, index) => (
					<div
						key={index}
						className={`carousel__container__slide ${
							index === currentIndex ? "active" : ""
						}`}
					>
						<div className="carousel__content">
							<h2 className="carousel__content__title">
								{item.title}
							</h2>
							{carouselContent(item, index)}
						</div>
					</div>
				))}
			</div>
			<button
				className="carousel__button carousel__button--next"
				onClick={goToNextSlide}
			>
				→
			</button>
		</>
	);
};

export default Carousel;
