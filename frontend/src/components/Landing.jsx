import React from "react";
import TypeWriter from "react-typed";

const Landing = () => {
	return (
		<section className="home" id="home">
			<div className="home__text">
				<h1 className="home__text__title">
					<TypeWriter
						strings={["HI, I'M EWEN.", "I AM A WEB DEVELOPPER."]}
						typeSpeed={50}
						loop
					/>
				</h1>
				<p className="home__text__description"></p>
			</div>
			<div className="home__image__container">
				<img
					className="home__image"
					src="assets/images/web-developer.png"
					alt="Ewen Le Floch"
				/>
				<img
					className="home__logo home__logo--html"
					src="assets/images/html.png"
					alt="Logo HTML"
				/>
				<img
					className="home__logo home__logo--css"
					src="assets/images/css.png"
					alt="Logo CSS"
				/>
				<img
					className="home__logo home__logo--js"
					src="assets/images/js.png"
					alt="Logo JavaScript"
				/>
				<img
					className="home__logo home__logo--sass"
					src="assets/images/sass.png"
					alt="Logo Sass"
				/>
				<img
					className="home__logo home__logo--react"
					src="assets/images/react.png"
					alt="Logo React"
				/>
				<img
					className="home__logo home__logo--node"
					src="assets/images/node.png"
					alt="Logo NodeJs"
				/>
				<img
					className="home__logo home__logo--mongoDB"
					src="assets/images/mongoDB.png"
					alt="Logo MongoDB"
				/>
			</div>
		</section>
	);
};

export default Landing;
