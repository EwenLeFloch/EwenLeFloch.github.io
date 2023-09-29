import React from "react";

const Card = () => {
	return (
		<section className="gallery">
			{project &&
				project.map(({ title, id, cover }) => (
					<article key={id} className="card">
						{/* <Link
							to={`/accomoditation/${id}`}
							className="card__link"
						></Link> */}
						<img className="card__image" src={cover} alt={title} />
						<h2 className="card__title">{title}</h2>
					</article>
				))}
		</section>
	);
};

export default Card;
