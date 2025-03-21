const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/connectDB");
const userRoutes = require("./routes/userRoutes");
const ErrorResponse = require("./errors/errorHandler");
const errorHandler = require("./middleware/errorMiddleware")

dotenv.config();
const app = express();

// Connect to Database
connectDB().catch((err) => {
    console.error(err.message);
    process.exit(1); // Stop app if DB connection fails
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Routes
app.use("/api/users", userRoutes);
// Handle Invalid Routes
app.all("*", (req, res, next) => {
    next(new ErrorResponse(`You entered a wrong API endpoint: ${req.originalUrl}`, 404));
  });
// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
