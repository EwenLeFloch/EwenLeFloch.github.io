import React, { useState, useEffect } from "react";
import axios from "axios";
import Tags from "./Tags";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3002/api/projects")
			.then((response) => {
				setProjects(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<section id="projects" className="projects">
			<h2 className="section__title">Projets</h2>
			<ul className="projects__list">
				{projects.map((project, index) => (
					<li className="projects__list__item" key={project._id}>
						<div className="projects__visible">
							<span>
								{`${(index + 1)
									.toString()
									.padStart(2, "0")} - `}
								{project.title}
							</span>
							<div className="projects__visible__button__list">
								<a
									className="projects__visible__button"
									href={project.link}
									target="_blank"
								>
									Site
								</a>
								<a
									className="projects__visible__button"
									href={project.github}
									target="_blank"
								>
									<img
										src="../assets/images/github.webp"
										alt=""
									/>
									<img
										className="hover"
										src="../assets/images/github-hover.webp"
										alt=""
									/>
									Github
								</a>
							</div>

							<Tags tags={project.languages} />
						</div>

						<div className="projects__cover">
							<img
								className="projects__cover__image"
								src={`../assets/images/${project.cover}`}
							></img>
						</div>

						<div className="projects__description">
							<p>{project.description}</p>
							<p className="projects__description--role">
								Rôle : <br />
								{project.role}
							</p>
						</div>
						<a
							className="projects__link"
							href={project.link}
							target="_blank"
						></a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
