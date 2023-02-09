const express = require("express");
const { addCart } = require("../controller/cart_controllers");
const {
  getAllProducts,
  getSingleProducts,
} = require("../controller/product_controller");

const router = express.Router();

router.get("/get_all_product", getAllProducts);
router.get("/get_product_id/:id", getSingleProducts);
router.post("/cart", addCart);

module.exports = router;
