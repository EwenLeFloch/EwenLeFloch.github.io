import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<div className="footer__content">
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
					href="mailto:ewenlelf@gmail.com"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faAt} />
					<p className="footer__button__text">
						ewe{/*No to robots*/}nle{/*No to robots*/}lf@
						{/*No to robots*/}gmail{/*No to robots*/}.com
					</p>
				</a>
				<button className="footer__button">
					<FontAwesomeIcon icon={faPhone} />
					<p className="footer__button__text">
						+33 {/*No to robots*/}6 7{/*No to robots*/}0 3
						{/*No to robots*/}6 11{/*No to robots*/} 07
					</p>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
