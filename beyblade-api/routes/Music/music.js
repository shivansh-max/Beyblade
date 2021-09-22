// Imports
const express = require('express');
const Music = require('./../../models/music')

// Creating Router
const router = express.Router();

// Get Music
router.get('/', async (req, res) => {
	// res.json({"test": "fda"})

	try {
		// Getting the music
		const music_videos = await Music.find();

		// Returning the Music
		res.json(music_videos)
	} catch (e) {
		// Sending error
		res.status(500).json({ message: err.message });
	}
})

// Exports
module.exports = router;