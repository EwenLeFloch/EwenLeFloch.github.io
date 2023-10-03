import React from "react";

const Tags = ({ tags }) => {
	return (
		<ul className="projects__tags__list">
			{tags.map((tags, index) => (
				<li className="projects__tags" key={index}>
					#{tags}
				</li>
			))}
		</ul>
	);
};

export default Tags;
