import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<footer className="footer">
			<a
				className="footer__button"
				href="https://www.linkedin.com/in/ewen-le-floch/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faLinkedin} />
				<p className="footer__button__text">
					linkedin.com/in/
					<br />
					ewen-le-floch
				</p>
			</a>
			<a
				className="footer__button"
				href="mailto:contact@ewenlefloch.fr"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faAt} />
				<p className="footer__button__text">contact@ewenlefloch.fr</p>
			</a>
			<button className="footer__button">
				<FontAwesomeIcon icon={faPhone} />
				<p className="footer__button__text">+33 6 70 36 11 07</p>
			</button>
		</footer>
	);
};

export default Footer;
