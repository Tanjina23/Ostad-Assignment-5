const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  des: { type: String, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model("Review", ReviewSchema);
