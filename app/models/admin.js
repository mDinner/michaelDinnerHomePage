var mongoose = require('mongoose');
var MessagesSchema = require('./adminMessages.js');

var AdminSchema = new mongoose.Schema({
	email: String,
	password: { type: String, default: '' },
	type: { type: String, default: ''},
	fname: { type: String, default: ''},
	lname: { type: String, default: ''},
	birthday: Date,
	messages: [MessagesSchema]
});

module.exports = mongoose.model('Admin', AdminSchema);



