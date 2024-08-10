/*

POST method

As try to post a request for creating a new data in our MOCK_DATA file, it faied. Becaue the express server was not able to handle
or understand the data format in which i am trying to create a new data. So we need a translator in between to translate the data into
a form that express will be able to handle and understand it and save it in data base. 

Middleware 
1> Inbuild Middleware
2> Router Level Middleware
3> Custom Middle
4> ThirdParty Middleware

Middleware is between requests and responses here we use a middleware ==> app.use(express.urlencoded());

*/

const express = require("express");

const app = express();
const PORT = 8002;

//Middleware
app.use(express.urlencoded());

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
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
