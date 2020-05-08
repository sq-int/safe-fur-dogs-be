const express = require('express');

const router = express.Router();

const Requested = require('./model.js');

const restricted = require('../../middleware/restricted.js');

/* get requested food */
router.get('/', (req, res) => {
    Requested.getRequested()
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

/* request a food to be added to the database */
router.post('/', (req, res) => {

    const requestedFood = req.body;

    Requested.requestFood(requestedFood)
        .then(requested => {
            res.status(201).json(requested);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

module.exports = router;