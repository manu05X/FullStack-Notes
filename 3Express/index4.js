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

*/

const express = require("express");

const app = express();
const PORT = 8002;

//getting the mock data from MOCK_DATA file
const products = require("./MOCK_DATA.json");

//Routing

//1st route
app.get("/", (req, res) => {
  res.send("Welcome to My Shop");
});

/*This will print all the prducts present in the MOCK_DATA file. This will happen throug the DB but here we are using MOCK_DATA file
as temporary DB for learning 
*/
// 2nd route
// app.get("/products", (req, res) => {
//   //   res.send(products);
//   res.json(products); //in json format
// });

// //send HTML data as response
// app.get("/products", (req, res) => {
//   const html = `<ul>${products.map(
//     (product) => `<li>${product.product_name}</li>`
//   )} </ul>`;

//   res.send(html); // Now we are directly sending HTML data to the server i.e server side rendering (SSR)
// });

app.get("/api/products/", (req, res) => {
  console.log(req.params);
  //console.log(req.params.name);

  return res.json(products);
});

//Route Parameters
// app.get("/api/products/:id", (req, res) => {
//   console.log(req.params);
//   //console.log(req.params.name);

//   const product = products.find((product) => product.id === id);

//   return res.json(product);
// });

//Route Parameters
// app.get("/api/products/:id", (req, res) => {
//   console.log(req.params);
//   //console.log(req.params.name);

//   const product = products.find((product) => product.id === id);

//   return res.json(product);
// });

// Route Parameters
// app.get("/api/products/:id", (req, res) => {
//   const { id } = req.params; // Destructuring the id from req.params
//   console.log(req.params.id);

//   const product = products.find((product) => product.id === id);

//   if (product) {
//     return res.json(product);
//   } else {
//     return res.status(404).json({ message: "Product not found" });
//   }
// });

//We were unable to compare strings id with integer id. So we ned to convert the id to integer

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

//POST method

app.post("/api/products", (req, res) => {
  console.log(req.body);
});

//Start the server
app.listen(PORT, () => {
  console.log(`Hey! Server is running on http://localhost:${PORT}`);
});
