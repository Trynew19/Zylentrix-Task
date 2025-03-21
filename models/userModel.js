const mongoose = require("mongoose");
const sanitizeHtml = require("sanitize-html");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be a positive number"],
  },
});

// Sanitize inputs before saving
UserSchema.pre("save", function (next) {
  this.name = sanitizeHtml(this.name);
  this.email = sanitizeHtml(this.email);
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
