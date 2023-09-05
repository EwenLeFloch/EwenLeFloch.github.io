const mongoose = require("mongoose");
mongoose.set("strict", true);

exports.connectToDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("Connected to DB");
	} catch (err) {
		console.error(err);
	}
};
