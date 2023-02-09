const product = require("../helpers/products");
exports.getAllProducts = (req, res) => {
  try {
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getSingleProducts = (req, res) => {
  try {
    const productId = req.params.id;
    //console.log(productId);
    let prod = product.find((person) => person.id == productId);
    //console.log(prod);
    res.json(prod);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.addToCart = (req, res) => {
  try {
    const productId = req.params.id;
    let prod = product.find((person) => person.id == productId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
