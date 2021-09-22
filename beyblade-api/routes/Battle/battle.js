// Imports
const express = require('express');
const Beyblade = require("../../models/beyblade");
const check = require("./Check");

// Creating router
const router = express.Router();

// Battle
router.get('/', async (req, res) => {
    // Creating vars bey1 and bey2
    let bey1, bey2;

    try {
        // Finding values of bey1 and bey2
        bey1 = await Beyblade.findById(req.query.bey1);
        bey2 = await Beyblade.findById(req.query.bey2);

        // Returning
        res.status(200).json(check(bey1, bey2));
    } catch (err) {
        // Sending error
        res.status(500).json({ message: err.message });
    }
})

// Exports
module.exports = router;