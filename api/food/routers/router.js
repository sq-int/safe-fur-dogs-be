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

// GET a food by food name
router.get("/:food", (req, res) => {
  const foodToFind = req.params.food;

  if (foodToFind) {
    Food.findOne({ name: foodToFind })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json({ error: `${foodToFind} could not be found.` }));
  }
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

// DELETE a food by name
router.delete("/:food", (req, res) => {
  const foodToRemove = req.params.food;

  if (foodToRemove) {
    Food.findOneAndRemove({ name: foodToRemove })
      .then((data) => res.json(data))
      .catch((err) =>
        res.json({ error: `${foodToRemove} could not be removed.` })
      );
  }
});

// export router
module.exports = router;
