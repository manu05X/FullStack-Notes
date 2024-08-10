/*
Routing -> Going to different location/path/route for getting/creating/updating/deleting etc different resources using different
            http methods such as GET, POST, PUT, DELETE etc...

use for creating random data generation https://www.mockaroo.com/

we are using MOCK_DATA file that we generate from https://www.mockaroo.com/ 

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
//2nd route
// app.get("/products", (req, res) => {
//   //   res.send(products);
//   res.json(products); //in json format
// });

//send HTML data as response
app.get("/products", (req, res) => {
  const html = `<ul>${products.map(
    (product) => `<li>${product.product_name}</li>`
  )} </ul>`;

  res.send(html); // Now we are directly sending HTML data to the server i.e server side rendering (SSR)
});

//Start the server
app.listen(PORT, () => {
  console.log(`Hey! Server is running on http://localhost:${PORT}`);
});
