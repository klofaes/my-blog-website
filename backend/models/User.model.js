const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
	userName: {
		type: String,
		required: true,
		unique: true,
		minlength: 3,
	},
	Email: {
		type: String,
		required: true,
		unique: true,
	},
	Password: {
		type: String,
		required: true,
	},
}, {
	timestamps: true,
});

const addUser = mongoose.model("user-credentials", User);

module.exports = addUser;
