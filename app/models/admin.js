var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
	email: String,
	password: { type: String, default: '' },
	type: { type: String, default: ''},
	fname: { type: String, default: ''},
	lname: { type: String, default: ''},
	birthday: Date
});

module.exports = mongoose.model('Admin', AdminSchema);
