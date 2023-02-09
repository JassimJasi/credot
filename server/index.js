const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const productRoute = require("./routes/product");
//const DB = require("./confiq/connection");
const app = express();

app.use(cors());
app.use(express.json());

// DB.once("open", function () {
//   console.log("Connected to the MongoDB database");
// });

app.use("/", productRoute);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
