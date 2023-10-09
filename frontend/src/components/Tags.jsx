import React from "react";

const Tags = ({ tags }) => {
	return (
		<ul className="projects__article__tags__list">
			{tags.map((tags, index) => (
				<li className="projects__article__tags" key={index}>
					#{tags}
				</li>
			))}
		</ul>
	);
};

export default Tags;
