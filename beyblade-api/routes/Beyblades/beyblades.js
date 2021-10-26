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

		// Returning result
		res.json(beyblades);
	} catch (err) {
		// Sending error
		res.status(500).json({ message: err.message });
	}
})

// Exports
module.exports = router;