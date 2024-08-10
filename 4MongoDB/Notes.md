
# Express.js and MongoDB Integration Notes

## 1. Setup and Middleware
### Express Setup
- `const express = require("express");` and `const app = express();` initialize the Express application.
- `const PORT = 8002;` defines the port on which the server will listen.

### Middleware Configuration
- `app.use(express.urlencoded());`: Parses URL-encoded bodies (as sent by HTML forms).
- `app.use(express.json());`: Parses JSON bodies (as sent by API clients like Postman).

## 2. MongoDB Connection
### MongoDB and Mongoose Setup
- `const mongoose = require("mongoose");` imports Mongoose, an ODM (Object Data Modeling) library for MongoDB and Node.js.

### Connecting to MongoDB
```javascript
mongoose.connect(
  "mongodb+srv://kmanu00005:ovRlL7UQlgqujYQp@cluster0.co7yrow.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
)
```
- **Connection String**: This string connects to a MongoDB Atlas cluster, with `ecommerce` being the database name.
- **Handling the Connection**:
  - `.then(() => { console.log("Db connection established"); })`: Executes if the connection is successful.
  - `.catch((err) => { console.log("Error connecting:" + err); })`: Executes if the connection fails, logging the error.

## 3. Schema and Model Creation
### Schema Definition
```javascript
const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_price: { type: String, required: true },
    isInStock: { type: Boolean, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);
```
- **Fields**:
  - `product_name`, `product_price`, `isInStock`, `category` are defined with their types and required status.
- **Timestamps**: Automatically adds `createdAt` and `updatedAt` fields to the schema.

### Model Creation
```javascript
const ProductModel = mongoose.model("products", productSchema);
```
- Creates a model called `ProductModel` linked to the `products` collection in MongoDB, based on `productSchema`.

## 4. CRUD Operations
### Create (POST)
```javascript
app.post("/api/products/", async (req, res) => {
  const body = req.body;
  const product = await ProductModel.create({
    product_name: body.product_name,
    product_price: body.product_price,
    isInStock: body.isInStock,
    category: body.category,
  });
  return res.status(201).json({ message: "Product created successfully" });
});
```
- **Explanation**:
  - Extracts the data from the request body.
  - Creates a new product entry in the MongoDB `products` collection.
  - Sends a 201 status code with a success message after creation.

### Read (GET)
```javascript
app.get("/api/products/", (req, res) => {
  return res.json(products);
});
```
- **Explanation**:
  - Retrieves all products from the `MOCK_DATA.json` file (this should be adjusted to query the database).

```javascript
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  if (product) {
    return res.json(product);
  } else {
    return res.status(404).json({ message: "Product not found" });
  }
});
```
- **Explanation**:
  - Retrieves a specific product by ID from `MOCK_DATA.json`.
  - Returns the product or a 404 error if not found.

### Update (PUT)
```javascript
app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((product) => product.id === id);
  const body = req.body;
  products[productIndex] = { id: id, ...body };
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err) => {
    if (err) {
      return res.status(500).json({ status: "error", message: "Error updating product" });
    }
    return res.json({ status: "success", id: id });
  });
});
```
- **Explanation**:
  - Finds the product by ID.
  - Updates the product with the new data.
  - Saves the updated data back to `MOCK_DATA.json`.

### Delete (DELETE)
```javascript
app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ status: "error", message: "Product not found" });
  }
  products.splice(productIndex, 1);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ status: "error", message: "Error deleting product" });
    }
    return res.json({
      status: "success",
      message: "Product deleted successfully",
    });
  });
});
```
- **Explanation**:
  - Finds the product by ID and removes it from the array.
  - Saves the updated array to `MOCK_DATA.json`.

## 5. Server Setup
```javascript
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```
- **Explanation**:
  - Starts the server and listens on the defined port (8002).
