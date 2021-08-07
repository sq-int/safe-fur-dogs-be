// mongoose
const mongoose = require("mongoose");

// resource schema for individual articles for a particular food
const resourceSchema = new mongoose.Schema({
  title: String,
  url: String,
  description: String,
});

// overall food schema for adding a new food to db
const foodSchema = new mongoose.Schema({
  name: String,
  safe: Boolean,
  summary: String,
  recommended: Boolean,
  category: String,
  img: String,
  resources: [resourceSchema],
});

foodSchema.index({ name: 1, category: 1 });

// export our model
module.exports = mongoose.model("Food", foodSchema);
