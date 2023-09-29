import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const location = useLocation();

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
