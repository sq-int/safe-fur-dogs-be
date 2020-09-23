// mongoose
const mongoose = require("mongoose");

// resource schema for individual articles for a particular food
const resourceSchema = new mongoose.Schema({
  title: String,
  summary: String,
  resourceUrl: String,
  description: String,
});

// overall food schema for adding a new food to db
const foodSchema = new mongoose.Schema({
  name: String,
  safe: Boolean,
  recommended: Boolean,
  category: String,
  resources: [resourceSchema],
});

foodSchema.index({ name: 1, category: 1 });

// export our model
module.exports = mongoose.model("Food", foodSchema);
