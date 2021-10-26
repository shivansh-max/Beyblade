const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({
	_id: {type: String},
	TT: {type: String},
	Hasbro: {type: String}
})

module.exports = mongoose.model('Name', nameSchema)