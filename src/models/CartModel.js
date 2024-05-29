const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  size: { type: String, required: true },
});

module.exports = mongoose.model("Cart", CartSchema);
