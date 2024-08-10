/*

Creating a Schema of Products for creating document in MongoDB Atlas DB names as -> ecommerce in products collection

Schema creation for Product collection
const productSchema = new mongoose.Schema({
    product_name : String,
    product_price : String,
    isInStock : Boolean
})

OR
const productSchema = new mongoose.Schema({
    product_name : {
        type: String,
        required: true // -> means it must be provided
    }
})


const ProductModel = mongoose.model('CollectionName', SchemaName);

after sending the post request from postman for creating DB it did not create in ecommerce DB but another DB named as test
so, something is wrong with request we send for creating product.

In connection string we hav ? i.e -> "mongodb.net/?" -> before this we need to have db name i.e ecommerce "

"mongodb+srv://kmanu00005:ovRlL7UQlgqujYQp@cluster0.co7yrow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


"mongodb+srv://kmanu00005:ovRlL7UQlgqujYQp@cluster0.co7yrow.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"


Add timeStamp in productSchema to denote creation and updation time.

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

// MongoDB Connection
const mongoose = require("mongoose");

// mongoose.connect('MongoDb connection string')
// mongoose.connect(
//   "mongodb+srv://kmanu00005:<password>@cluster0.co7yrow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// ); Password is the password that is generated while creating the cluster/new Project in the MongoDB Atlas
// mongoose.connect(
//   "mongodb+srv://kmanu00005:ovRlL7UQlgqujYQp@cluster0.co7yrow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// ); // this connect method will return a promise that need to be resolves/handled

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

//Schema creation for Product collection
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

// const ProductModel = mongoose.model('CollectionName', SchemaName);

const ProductModel = mongoose.model("products", productSchema);

// Create a DB Entry in Product collection in MongoDB Atlas

//as we are talking to external resources so make callback async
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
// app.post("/api/products", (req, res) => {
//   console.log(req.body);
//   const newData = req.body;
//   //products.push(newData);
//   products.push({ id: products.length + 1, ...newData });

//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(products), (err, data) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ status: "error", message: "Error writing" });
//     }
//     return res.send({
//       status: "Successful",
//       id: products.length,
//     });
//   });
// });

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

//Delete

app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id); // Get the ID from the request parameters
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ status: "error", message: "Product not found" });
  }

  // Remove the product from the array
  products.splice(productIndex, 1);

  // Write the updated array back to the file
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(products, null, 2), (err) => {
    if (err) {
      return res
        .status(500)
        .json({ status: "error", message: "Error deleting product" });
    }
    return res.json({
      status: "success",
      message: "Product deleted successfully",
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/*

1> MongoDB Connection using mongoose
2> using mongoose.connect to connect with MongoDB Atlas with the db using MongoDb connection string
3> Schema creation for collection
4> creation of model -> const ProductModel = mongoose.model('CollectionName', SchemaName);
5> As we are talking to external resources so make callback async while creating POST request
*/
