// Imports
const express = require('express');
const Beyblade = require('../../models/beyblade');
const check = require('../Battle/Check');

// Creating Router
const router = express.Router();

//Get-All
router.get('/', async (req, res) => {
	try {
		// Getting the beyblades
		const beyblades = await Beyblade.find();
		let beyblade_json = {};

		// Looping throughout the beyblades and appending it to the result
		for (const beyblade of beyblades) beyblade_json[beyblade._id] = beyblade;

		// Returning result
		res.json(beyblade_json);
	} catch (err) {
		// Sending error
		res.status(500).json({ message: err.message });
	}
})

// Exports
module.exports = router;