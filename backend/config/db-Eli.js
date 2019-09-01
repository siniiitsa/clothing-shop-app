require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
