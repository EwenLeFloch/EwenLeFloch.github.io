import React from "react";

const Modal = ({ showModal, handleClose }) => {
	return (
		showModal && (
			<div className="modal">
				<div className="modal-content">
					<span className="close" onClick={handleClose}>
						&times;
					</span>
					<h2>Connexion</h2>
					{/* Contenu de la modal (formulaires, etc.) */}
				</div>
			</div>
		)
	);
};

export default Modal;
