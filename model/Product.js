// Schema - Logical represenation/Rules
const mongoose = require("mongoose");
let ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true,  },
  image: { type: String, required: true },
  price: { type: Number, default: false },
  qty: { type: Number, required: true },
  category: { type: String, required: true, },
  desc: { type: String, required: true },
  usage: { type: String, default: false },
  created: { type: Date, default: Date.now() },
});
let Product = mongoose.model("product", ProductSchema);
module.exports = Product;
