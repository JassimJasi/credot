const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  products: [
    {
      product: {
        type: Object,
      },
    },
  ],
  totalPrice: Number,
  totalDiscount: Number,
});

const cartModel = mongoose.model("cart", cartSchema);
module.exports = cartModel;
