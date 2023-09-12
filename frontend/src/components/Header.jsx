import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
	const location = useLocation();
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
						<Link
							className={
								location.hash === "#home" ||
								location.hash === ""
									? "active"
									: ""
							}
							to="#home"
						>
							Ewen
						</Link>
					</li>
					<li className="header__nav__list__item">
						<Link
							className={
								location.hash === "#projects" ? "active" : ""
							}
							to="#projects"
						>
							Projects
						</Link>
					</li>
					<li className="header__nav__list__item">
						<Link
							className={
								location.hash === "#contact" ? "active" : ""
							}
							to="#contact"
						>
							Contact
						</Link>
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
