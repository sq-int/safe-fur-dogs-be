const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  safe: Boolean,
});

module.exports = mongoose.model("Food", foodSchema);
