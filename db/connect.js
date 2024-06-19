const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("db connected successfully");
  return mongoose.connect(url);
};

module.exports = connectDB;
