const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: {type: String},
	nickname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	mail: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	contacts: {
		type: Array,
		required: true
	}
});

module.exports = mongoose.model('Users', userSchema);