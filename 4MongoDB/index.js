// index.js
const express = require("express");
const connectDB = require("./database/db"); // Import the DB connection module
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the database
connectDB();

// Use Routes
app.use("/api", productRoutes);

const PORT = 8002;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
