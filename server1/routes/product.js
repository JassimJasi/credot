const express = require("express");
const {
  getAllProducts,
  getSingleProducts,
} = require("../controller/product_controller");

const router = express.Router();

router.get("/get_all_product", getAllProducts);
router.get("/get_product_id/:id", getSingleProducts);

module.exports = router;
