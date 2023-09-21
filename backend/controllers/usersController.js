const bcrypt = require("bcrypt");

exports.login = (req, res, next) => {
	const { username, password } = req.body;

	bcrypt.compare(password, adminPasswordHash, (err, result) => {
		if (err) {
			res.status(500).json({ err });
		} else if (result) {
			res.redirect();
		}
	});
};
