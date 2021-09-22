const mongoose = require('mongoose');

const beybladeSchema = mongoose.Schema({
	_id: {type: String},
	name: {
		type: String,
		required: true
	}, series: {
		type: String,
		required: true
	}, attack: {
		type: Number,
		required: true
	}, burst: {
		type: Number,
		required: true
	}, defense: {
		type: Number,
		required: true
	}, weight: {
		type: Number,
		required: true
	}, agility: {
		type: Number,
		required: true
	}, stamina: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Beyblade', beybladeSchema);