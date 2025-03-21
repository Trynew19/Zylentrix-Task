const mongoose = require("mongoose");
const ErrorResponse = require("../errors/errorHandler");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
     
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    throw new ErrorResponse("Database connection failed", 500);
  }
};

module.exports = connectDB;
