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

now when we use post method in postman and passed data using "express.urlencoded" format we were getting string in place of boolean in saved data
i.e in isInStock we can see the below format.

  {
    "id": 45,
    "product_name": "Oranges",
    "product_price": "$20",
    "isInStock": "true"
  }

  we need to have isInStock as boolean i.e isInStock : true, in saved data
  we can use raw data format in POSTMAN and then pass the data. 
  
  Then use the Middleware express.json see index6.js
  naw data will be saved as below

  {
    "id": 45,
    "product_name": "Oranges",
    "product_price": "$20",
    "isInStock": true
  }

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
    return res.send({
      status: "Successful",
      id: products.length,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
