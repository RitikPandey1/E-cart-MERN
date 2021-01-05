const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  products: {
    type: Array,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

cartSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "email",
  }).populate({
     path: "product",
   });
  next();
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;
