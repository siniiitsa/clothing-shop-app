require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
const db = require("./config/db");

// import routes
const authUser = require("./routes/auth");
const checkAuthUser = require("./routes/checkAuth");
const cors = require("cors");
const detailPage = require("./routes/detailPageBack/index");
const goods = require("./routes/getGoodsBack/index");

// Init app
const app = express();

//connect database
db();

app.use(cors());

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(cookieParser());

// Define routes hear
app.use("/api", authUser);
app.use("/api", checkAuthUser);
app.use("/detail", detailPage);
app.use("/product-list", goods);

const port = process.env.PORT || 9000;
app.listen(port, err => {
  if (err) {
    throw new Error(err);
  }
  console.log(`Server on Port ${port}`);
});
