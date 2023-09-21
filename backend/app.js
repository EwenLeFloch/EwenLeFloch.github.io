const express = require("express");
const helmet = require("helmet");
const sanitize = require("express-mongo-sanitize");

const app = express();

//Middleware pour gérer les requêtes JSON
app.use(express.json());

//Middleware pour la sécurité
app.use(sanitize());
app.use(helmet({ crossOriginPolicy: false }));

//Middleware pour gérer les en-têtes CORS
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next();
});

// Routes

// Gestion des erreurs
app.use((error, req, res, next) => {
	console.error("Error", error);
	res.status(500).json({ error: "Une erreur est survenue" });
});

module.exports = app;
