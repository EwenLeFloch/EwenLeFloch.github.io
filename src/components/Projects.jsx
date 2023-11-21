// import React from "react";
import projects from "../assets/json/projects";
import Tags from "./Tags";

const Projects = () => {
	return (
		<section id="projects" className="projects">
			<h2 className="section__title">MES PROJETS</h2>
			<div className="projects__gallery">
				{projects &&
					projects.map((project) => (
						<article
							key={project._id}
							className="projects__article"
						>
							<img
								className="projects__article__image"
								src={`./assets/images/${project.cover}`}
								alt={`${project.title} sur ordinateur`}
							/>
							<div className="projects__article__content">
								<h3 className="projects__article__title">
									{project.title}
									<img
										className="projects__article__image projects__article__image--small"
										src={`./assets/images/${project.cover}`}
										alt={`${project.title} sur ordinateur`}
									/>
								</h3>
								<p className="projects__article__text">
									{project.description}
								</p>
								<Tags tags={project.tags} />
								<div className="projects__article__button__list">
									{project.link != null ? (
										<a
											className="projects__article__button"
											href={project.link}
											target="_blank"
											rel="noreferrer"
										>
											Site
										</a>
									) : (
										""
									)}

									<a
										className="projects__article__button"
										href={project.github}
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="./assets/images/github.webp"
											alt=""
										/>
										<img
											className="hover"
											src="./assets/images/github-hover.webp"
											alt=""
										/>
										Github
									</a>
								</div>
							</div>
							<a
								aria-label="site"
								className="projects__link"
								href={project.link}
								target="_blank"
								rel="noreferrer"
							>
								{" "}
							</a>
						</article>
					))}
			</div>
		</section>
	);
};

export default Projects;
