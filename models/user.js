
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: String,
	firstName: String,
	lastName: String,
	physicalAddress: {
		street: String,
		city: String,
		state: String,
		zip: String,
		zip4: String
	}
});

module.exports = mongoose.model('User', userSchema);