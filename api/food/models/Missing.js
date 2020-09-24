// mongoose
const mongoose = require("mongoose");

const missingSchema = new mongoose.Schema({
  name: String,
  safe: Boolean,
});

module.exports = mongoose.model("Missing", missingSchema);
