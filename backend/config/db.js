const config = require("config");
const db = config.get("mongoURI");
const mongoose = require("mongoose");
// Connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(db,{
      useNewUrlParser: true,
      useCreateIndex: true
    })
    console.log("Mongoose connected...");
    
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;