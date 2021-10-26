// Imports
const express = require('express');
const name = require('./../../models/name')
const escapeRegex = require('./../../escapeRegex');

// Creating router
const router = express.Router();

router.get('/', async (req, res) => {
	 res.json(await name.find())
})

router.get('/hasbro', async (req, res) => {
	const regex = new RegExp(escapeRegex(req.query.search), 'gi');

	res.json(await name.find({"Hasbro": regex}))
})

router.get('/takara-tomy', async (req, res) => {
	const regex = new RegExp(escapeRegex(req.query.search), 'gi');

	res.json(await name.find({"TT": regex}))
})

router.get('/both', async (req, res) => {
	const regex = new RegExp(escapeRegex(req.query.search), 'gi');

	res.json(await name.find({"TT": regex, "Hasbro": regex}))
})

// Exports
module.exports = router;