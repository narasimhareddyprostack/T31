const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");

/*
localhost:8000/user/register
localhost:8000/user/login
localhost:8000/user/all
*/

/*
Name API : localhost:8000/user/register
Fields   : NAME, EMAIL, PASSWORD 
METHOD: post
*/
router.post("/register", async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // user existing or not
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(401).json({ error: "User Already Existed" });
    }
    //encode the password
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    //console.log(password);
    user = new User({ name, email, password });
    user = await user.save();
    res.status(200).json({ result: "success", user: user });
  } catch (err) {
    if (err) throw err;
    res.status(500).json({ error: "Server Error" });
  }
});
/*
Name API : localhost:8000/user/login
Fields   : EMAIL, PASSWORD 
METHOD: post
*/
router.post("/login", (req, res) => {});
/*
Name API : localhost:8000/user/all
METHOD: GET
*/
router.get("/all", () => {});
module.exports = router;
