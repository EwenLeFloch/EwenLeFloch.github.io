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

	return (
		<div className="carousel">
			<button onClick={goToPrevSlide}>Previous</button>
			<div className="carousel-content">
				{items.map((item, index) => (
					<div
						key={index}
						className={`carousel-slide ${
							index === currentIndex ? "active" : ""
						}`}
					>
						<div className="content">
							<h2>{item.title}</h2>
							<p>{item.paragraph}</p>
						</div>
					</div>
				))}
			</div>
			<button onClick={goToNextSlide}>Next</button>
		</div>
	);
};

export default Carousel;
