const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	users: {
		type: Array,
		required: true
	},
	messages: {
		type: Array,
		required: true
	}
});

module.exports = mongoose.model('Conversations', conversationSchema);