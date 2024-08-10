
# Express.js with MongoDB Integration

## Overview
This document explains the implementation of an Express.js application that connects to a MongoDB database using Mongoose. The application includes CRUD operations for managing product data in MongoDB.

## Setup and Middleware
### Express Application Setup
```javascript
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8002;

// Middleware
app.use(express.urlencoded()); // Parses urlencoded payloads (e.g., from HTML forms)
app.use(express.json()); // Parses JSON payloads
```

## MongoDB Connection
### Connecting to MongoDB Atlas
We use `mongoose.connect` to establish a connection to the MongoDB Atlas database.
```javascript
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kmanu00005:ovRlL7UQlgqujYQp@cluster0.co7yrow.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db connection established");
  })
  .catch((err) => {
    console.log("Error connecting:" + err);
  });
```

## Schema Creation
### Product Schema
We define a schema for the `products` collection using Mongoose.
```javascript
const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_price: {
      type: String,
      required: true,
    },
    isInStock: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating a model for the products collection
const ProductModel = mongoose.model("products", productSchema);
```

## CRUD Operations
### Creating a Product (POST)
Create a new product entry in the MongoDB database.
```javascript
app.post("/api/products/", async (req, res) => {
  const body = req.body;

  const product = await ProductModel.create({
    product_name: body.product_name,
    product_price: body.product_price,
    isInStock: body.isInStock,
    category: body.category,
  });

  console.log(product);

  return res.status(201).json({ message: "Product created successfully" });
});
```

### Reading Products (GET)
#### Reading All Products
Retrieve and display all products from the database.
```javascript
app.get("/products", async (req, res) => {
  const allProducts = await ProductModel.find({});

  const html = `<ul>${allProducts.map(
    (product) => `<li>${product.product_name}</li>`
  )} </ul>`;

  res.send(html); // Server-side rendering (SSR)
});
```

#### Reading a Product by ID
Retrieve a specific product by its ID from the database.
```javascript
app.get("/api/products/:id", async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  console.log(product);

  return res.status(200).json({ productInfo: product });
});
```

### Updating a Product (PUT)
Update a specific product by its ID.
```javascript
app.put("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  return res.status(201).json({ message: "Successfully updated" });
});
```

### Deleting a Product (DELETE)
Delete a specific product by its ID.
```javascript
app.delete("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  return res.status(201).json({ message: "Successfully deleted" });
});
```

## Server Listening
```javascript
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

## Summary
1. **MongoDB Connection**: Connect to MongoDB Atlas using Mongoose.
2. **Schema Creation**: Define a schema for the `products` collection.
3. **CRUD Operations**: Implement POST, GET, PUT, and DELETE operations.
4. **Async Operations**: Ensure callbacks interacting with MongoDB are asynchronous.
