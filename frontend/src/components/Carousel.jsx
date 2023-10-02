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

	const showSkills = () => {
		return (
			<div className="presentation__content presentation__content--skills">
				oui
			</div>
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
						avec d'autres développeur. <br />
						Disponible sur RENNES et ses alentours.
					</p>
					<img></img>
				</div>
			);
		} else {
			return <p className="carousel__content__text">{item.paragraph}</p>;
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
