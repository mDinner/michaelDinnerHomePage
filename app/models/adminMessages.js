var mongoose = require('mongoose');

var MessagesSchema = new mongoose.Schema({
	content: String,
	sender: { type: String, default: ''},
	recipient: { type: String, default: ''},
	sent: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Messages', MessagesSchema);