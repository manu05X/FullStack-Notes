/*

PUT method
- it is use to update a paticular resource




*/

const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8002;

//Middleware

//if we are using urlencoded data format in POSTMAN for post method then we need to use express.urlencoded() for saving
app.use(express.urlencoded());
//if we are using raw data format in POSTMAN for post method then we need to use express.json() for saving
app.use(express.json());

const products = require("./MOCK_DATA.json");

app.get("/api/products/", (req, res) => {
  console.log(req.params);
  //console.log(req.params.name);
  return res.json(products);
});

// Route Parameters
app.get("/api/products/:id", (req, res) => {
  //const { id } = req.params; // Destructuring the id from req.params -> OR convert the id to Number or while comparing convert id to parseInt(id)
  const id = Number(req.params.id);
  console.log(req.params.id);

  const product = products.find((product) => product.id === id);

  if (product) {
    return res.json(product);
  } else {
    return res.status(404).json({ message: "Product not found" });
  }
});

//POST
//After using middleware we can see the data in console.log after sending the request from POSTMAN
app.post("/api/products", (req, res) => {
  console.log(req.body);
  const newData = req.body;
  //products.push(newData);
  products.push({ id: products.length + 1, ...newData });

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Error writing" });
    }
    return res.send({
      status: "Successful",
      id: products.length,
    });
  });
});

//PUT
/*
app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id); // getting the id of resource
  //const productIndex = products.findIndex((product) => product.id === id); //getting the productIndex from the database/resource here MOCK_DATA by comparing the id
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ status: "error", message: "Product not found" });
  }

  const body = req.body;

  //products[productIndex] = { ...body, id: id };
  // Create the updated product with the original ID coming first
  // const updatedProduct = {
  //   id: id,
  //   ...req.body, // Spread the rest of the body fields after id
  // };

  // // Update the product in the array
  // products[productIndex] = updatedProduct;

  //OR
  

  products[productIndex] = { id: id, ...body };

  //now update the product
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Error updating product" });
    }
    return res.json({ status: "success", id: id });
  });
});


app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id); // Get the ID from the request parameters
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ status: "error", message: "Product not found" });
  }

  // Create the updated product with the original ID coming first
  const updatedProduct = {
    id: id,
    ...req.body,  // Spread the rest of the body fields after id
  };

  // Update the product in the array
  products[productIndex] = updatedProduct;

  // Write the updated array back to the file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Error updating product" });
    }
    return res.json({ status: "success", id: id });
  });
});


*/

//Clean PUT methods
app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id); // getting the id of resource
  const productIndex = products.findIndex((product) => product.id === id); //getting the productIndex from the database/resource here MOCK_DATA by comparing the id

  const body = req.body;
  products[productIndex] = { id: id, ...body }; // Create the updated product with the original ID coming first

  //now update the product
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Error updating product" });
    }
    return res.json({ status: "success", id: id });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
