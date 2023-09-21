import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
const Header = () => {
	const [isOpen, setOpen] = useState(false);

	if (isOpen) {
	}
	return (
		<header className="header">
			<nav className="header__nav">
				<ul
					className={`header__nav__list ${
						isOpen ? "--open" : "--closed"
					}`}
				>
					<li className="header__nav__list__item">
						<NavLink to="/">Ewen</NavLink>
					</li>
					<li className="header__nav__list__item">
						<NavLink to="/projects">Projects</NavLink>
					</li>
				</ul>
				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					size={20}
					color={isOpen ? "#7510f7" : "#000"}
				/>
			</nav>
		</header>
	);
};

export default Header;
