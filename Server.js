const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");

const morgan = require("morgan");
const mongoose = require("mongoose");
//configure cors with express
app.use(cors());

//Application Middleware Logger
app.use(morgan("tiny"));

dotenv.config({ path: "./config/config.env" });
const PORT = 8000 || process.env.PORT;
//Test Api
app.get("/", (req, res) => {
  res.send("<h1>ECart Application Running Successfully....</h1>");
});
mongoose
  .connect(process.env.MONGODB_LOCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((response) => {
    console.log("Mongo DB Connected Successfully....");
  })
  .catch((err) => {});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server Running on Port Number... ${PORT}`);
});
