const product = require("../helpers/products");
const cartModel = require("../models/Cart");

exports.addCart = async (req, res) => {
  try {
    const { prod } = req.body;
    console.log(typeof prod, "hhhhhhhhhhhh");

    if (!prod) return res.status(400).json({ message: "all fields require" });
    const found = await cartModel.find();
    //console.log(found);
    let products = product.find((person) => person.id == prod);
    console.log("ppppppp", products);
    if (!found) {
      const newCart = new cartModel({
        "products.product": products,
        totalPrice: 0,
        totalDiscount: 0,
      });
      await newCart.save();
      return res
        .status(201)
        .json({ message: "product added to cart successfully" });
    }
    await cartModel.updateOne({ "products.product": product });
    res.status(201).json({ message: "cart updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
