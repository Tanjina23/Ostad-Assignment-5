const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model("Feature", FeatureSchema);
