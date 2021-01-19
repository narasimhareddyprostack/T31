const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

//Product Root Router
// API : localhost:8000/product
/*
localhost:8000/product/upload  

Get Routes
localhost:8000/product/mobiles
localhost:8000/product/watches
localhost:8000/product/laptops

*/
router.get("/", (req, res) => {
  res.send("Product API...");
});

/*
API : http://localhost:8000/product/upload
Method: Post
Fields: name, brand, image, price, qty, category, desc, usage
Type : private
*/
router.post("/upload", async (req, res) => {
  try {
    // recieve product data from React Form
    let { name, brand, image, price, qty, category, desc, usage } = req.body;
    let newProduct = {
      name: req.body.name,
      brand: req.body.brand,
      image: req.body.image,
      price: req.body.price,
      qty: req.body.qty,
      category: req.body.category,
      desc: req.body.desc,
      usage: req.body.usage,
    };
    //
    let product = new Product({
      name,
      brand,
      image,
      price,
      qty,
      category,
      desc,
      usage,
    });
    console.log(product);
    console.log("one");
    product = await product.save();
    console.log("two");
    res.status(200).json({
      result: "Success",
      product: product,
    });
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

/*
API : localhost:8000/product/Mobiles
Method: Get
Type : private
*/
router.get("/Mobiles", async (req, res) => {
  try {
    let product = await Product.find({ category: "Mobiles" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});
/*
API : localhost:8000/product/Laptops
Method: Get
Type : private
*/
router.get("/Laptops", async (req, res) => {
  try {
    let product = await Product.find({ category: "Laptops" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

/*
API : localhost:8000/product/watches
Method: Get
Type : private
*/
router.get("/watches", async (req, res) => {
  try {
    let product = await Product.find({ category: "Watches" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});
/*
API : localhost:8000/product/:id
Method: Get
Type : private
*/
router.get("/:id", async (req, res) => {
  try {
    let productId = req.params.id;
    console.log(productId);
    let product = await Product.findOne({ _id: productId });
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: " Server Error" }] });
  }
});

module.exports = router;
