// Imports
const express = require('express');
const Beyblade = require('../../models/beyblade');
const escapeRegex = require('./../../escapeRegex')

// Creating router
const router = express.Router();

// Search
router.get('/', async (req, res) => {
	// Getting search values
	const regex = new RegExp(escapeRegex(req.query.search), 'gi');
	
	try {
		// Getting beyblades
		const beys = await Beyblade.find({"name": regex});

		res.status(200).json(beys);
	} catch (err) {
		// Sending error
		res.status(500).json({message: err.message});
	}
});

// Exports
module.exports = router;