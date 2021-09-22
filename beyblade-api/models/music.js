const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({
	_id : {
		type: String,
		required: true
	},
	name : {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Music', musicSchema)