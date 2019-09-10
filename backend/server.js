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
const history = require("./routes/history");
//connect database
db();
// Init app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(cookieParser());

// add routes
app.use("/api", authUser);
app.use("/api", checkAuthUser);
app.use("/api", history);

const port = process.env.PORT || 9000;
app.listen(port, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log(`Server on Port ${port}`)
});
