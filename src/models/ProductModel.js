const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDes: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  discountPrice: { type: Number, required: true },
  image: { type: String, required: true },
  star: { type: Number, required: true },
  stock: { type: Number, required: true },
  remark: { type: String, required: true },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  brandID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
