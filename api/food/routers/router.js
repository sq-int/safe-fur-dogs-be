// express
const express = require("express");

// init router
const router = express.Router();

// Food model
const Food = require("../models/Food.js");

// GET a list of all food
router.get("/", (req, res) => {
  Food.find()
    .then((data) => res.json(data))
    .catch((err) =>
      res.json({ error: "The list of food could not be retrieved." })
    );
});

// POST to add a new food
router.post("/", (req, res) => {
  const foodToAdd = req.body;

  if (foodToAdd) {
    Food.create(foodToAdd)
      .then((data) => res.json(data))
      .catch((err) => res.json({ error: "Food could not be created." }));
  }
});

// export router
module.exports = router;
