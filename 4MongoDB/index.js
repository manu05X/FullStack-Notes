const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kmanu00005:ovRlL7UQlgqujYQp@cluster0.co7yrow.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Db connection established"))
  .catch((err) => console.error("Error connecting:", err));

// Use Routes
app.use("/api", productRoutes);

const PORT = 8002;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
