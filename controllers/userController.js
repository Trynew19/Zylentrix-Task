const User = require("../models/userModel");
const ErrorResponse = require("../errors/errorHandler");

// Create a new user
exports.createUser = async (req, res, next) => {
    try {
      const { name, email, age } = req.body;
  
      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return next(new ErrorResponse("Email already exists. Use a different email.", 400));
      }
  
      const user = await User.create({ name, email, age });
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      next(new ErrorResponse("Error creating user", 500));
    }
  };

// Get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 500));
  }
};

// Get single user by ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new ErrorResponse("User not available", 404));
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(new ErrorResponse("Invalid user ID ", 400));
  }
};

// Update user by ID
exports.updateUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return next(new ErrorResponse("User not available", 404));
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(new ErrorResponse("Invalid user ID ", 400));
  }
};

// Delete user by ID
exports.deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return next(new ErrorResponse("User not available", 404));
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(new ErrorResponse("Invalid user ID ", 400));
  }
};
