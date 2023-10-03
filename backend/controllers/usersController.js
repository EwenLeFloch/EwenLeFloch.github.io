const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = (req, res, next) => {
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (!user) {
				return res.status(401).json({ message: "Email inconnu" });
			}
			bcrypt
				.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid) {
						return res
							.status(401)
							.json({ message: "Mot de passe incorrect" });
					}
					res.status(200).json({
						userId: user._id,
						token: jwt.sign(
							{ userId: user._id },
							process.env.TOKEN_KEY,
							{ expiresIn: "4h" }
						),
					});
				})
				.catch((error) => res.status(500).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
