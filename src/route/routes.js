const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Product routes
router.get("/ProductBrandList", productController.getProductListByBrand);
router.get("/ProductCategoryList", productController.getProductListByCategory);
router.get("/ProductSliderList", productController.getProductSliderList);
router.get(
  "/ProductListByBrand/:BrandID",
  productController.getProductListByBrand
);
router.get(
  "/ProductListByCategory/:CategoryID",
  productController.getProductListByCategory
);
router.get("/ProductDeatils/:ProductID", productController.getProductDetails);
router.get(
  "/ProductReviewList/:ProductID",
  productController.getProductReviewList
);

// User routes
router.get("/UserOTP/:email", userController.getUserOTP);
router.get("/VerifyLogin/:email/:otp", userController.verifyLogin);
router.get("/UserLogout", authMiddleware, userController.userLogout);
router.post("/CreateProfile", authMiddleware, userController.createProfile);
router.post("/UpdateProfile", authMiddleware, userController.updateProfile);
router.get("/ReadProfile", authMiddleware, userController.readProfile);

// Other routes can be defined similarly

module.exports = router;
