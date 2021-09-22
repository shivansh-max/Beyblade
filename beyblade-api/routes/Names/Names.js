// Imports
const express = require('express');
const Beyblade = require('./../../models/beyblade')
const convert = require('./../Convert')
const find = require('./find')

// Creating router
const router = express.Router();

router.get('/', async (req, res) => {
	
	res.status(200).json({names : find(await Beyblade.find())})
})

// Exports
module.exports = router;