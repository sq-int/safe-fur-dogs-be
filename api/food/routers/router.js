// express
const express = require("express");

// init router
const router = express.Router();

// Food model
const Food = require("../models/Food.js");
const Missing = require("../models/Missing.js");

router.get("/", (req, res) => {
  res.status(200).json({ success: 'API online' })
})

// GET all missing food items
router.get("/missing", (req, res) => {
  Missing.find()
    .then((data) => res.json(data))
    .catch((err) =>
      res.json({ error: "List of missing food items could not be found." })
    );
});

// POST to add a missing food item
router.post("/missing", (req, res) => {
  const missingFoodToAdd = req.body;

  if (missingFoodToAdd) {
    Missing.create(missingFoodToAdd)
      .then((created) => res.status(201).json(created))
      .catch((err) => res.json({ error: "Food could not be submitted." }));
  } else {
    res.json({ error: "A name for the missing food must be provided." });
  }
});

// GET a list of all food
// router.get("/", (req, res) => {
//   // grab all food from the db
//   Food.find()
//     .then((data) => res.json(data))
//     .catch((err) =>
//       res.json({ error: "The list of food could not be retrieved." })
//     );
// });

// GET a food by food name
router.get("/:food", (req, res) => {
  // lowercase search queries for uniformity
  const foodToFind = req.params.food.toLowerCase();

  // if request has a provided valid food param
  if (foodToFind) {
    // grab the matching food from the db
    Food.findOne({ name: foodToFind })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json({ error: `${foodToFind} could not be found.` }));
  }
});

// GET recommendations
router.get("/suggest/:food", (req, res) => {
  const foodToFind = req.params.food
    .toLowerCase()
    .slice(0, Math.ceil(req.params.food.length / 2));

  if (foodToFind) {
    Food.find({ name: { $regex: `${foodToFind}`, $options: "i" } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ error: "Could not find any recommendations." });
      });
  }
});

/* DISABLED */
// // POST to add a new food
// router.post("/", (req, res) => {
//   const foodToAdd = req.body;
//   // make sure we store food names lowercase for uniformity
//   foodToAdd.name = foodToAdd.name.toLowerCase();

//   // if request has a food object
//   if (foodToAdd) {
//     // send new food to the backend
//     Food.create(foodToAdd)
//       .then((data) => res.json(data))
//       .catch((err) => res.json({ error: "Food could not be created." }));
//   }
// });

// // DELETE a food by name
// router.delete("/:food", (req, res) => {
//   // grab lowercase food from params
//   const foodToRemove = req.params.food.toLowerCase();

//   // if request has provided a valid food param
//   if (foodToRemove) {
//     // find matching food object in db and delete
//     Food.findOneAndRemove({ name: foodToRemove })
//       .then((data) => res.json(data))
//       .catch((err) =>
//         res.json({ error: `${foodToRemove} could not be removed.` })
//       );
//   }
// });

// export router
module.exports = router;
