const Product = require("../models/ProductModel");
const Brand = require("../models/BrandModels");
const Category = require("../models/CategoryModel");
const ProductSlider = require("../models/ProductSliderModel");
const Review = require("../models/ReviewModel");

// Controller to get all products by brand ID
exports.getProductListByBrand = async (req, res) => {
  try {
    const products = await Product.find({ brandID: req.params.BrandID });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to get all products by category ID
exports.getProductListByCategory = async (req, res) => {
  try {
    const products = await Product.find({ categoryID: req.params.CategoryID });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to get all product sliders
exports.getProductSliderList = async (req, res) => {
  try {
    const sliders = await ProductSlider.find();
    res.status(200).send(sliders);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to get product details by product ID
exports.getProductDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.ProductID);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Controller to get product reviews by product ID
exports.getProductReviewList = async (req, res) => {
  try {
    const reviews = await Review.find({ productID: req.params.ProductID });
    res.status(200).send(reviews);
  } catch (error) {
    res.status(400).send(error);
  }
};
