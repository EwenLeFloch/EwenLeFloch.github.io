const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
	userId: { type: String, required: true },
	title: { type: String, required: true },
	cover: { type: String, required: true },
	description: { type: String, required: true },
	link: { type: String, required: true },
	github: { type: String, required: true },
	role: { type: String, required: true },
	languages: [{ type: String, required: true }],
	project: { type: String },
});

module.exports = mongoose.model("Project", projectSchema);
