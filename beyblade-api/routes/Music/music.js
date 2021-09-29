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

// Creating music
router.post('/', async (req, res) => {
	// Creating the music object
	const music = new Music({
		_id: req.body._id,
		name: req.body.name
	})

	try   {
		// Saving the object and then returning all the music in total
		await music.save();
		res.status(201).json(await Music.find())
	} catch (e) {
		// Returrning the error
		res.status(400).json({message: e.message});
	}
})

// Exports
module.exports = router;