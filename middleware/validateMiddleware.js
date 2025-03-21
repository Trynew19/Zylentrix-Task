const { check, validationResult } = require("express-validator");
const ErrorResponse = require("../errors/errorHandler");

// User Validation Rules
const validateUser = [
  check("name").trim().notEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Invalid email format"),
  check("age")
    .isInt({ min: 1 })
    .withMessage("Age must be a positive number"),

  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new ErrorResponse(errors.array()[0].msg, 400));
    }
    next();
  },
];

module.exports = { validateUser };
