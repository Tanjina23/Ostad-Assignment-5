const mongoose = require("mongoose");

const ProductSliderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  des: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

module.exports = mongoose.model("ProductSlider", ProductSliderSchema);
