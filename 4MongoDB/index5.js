/*

Now we want to read the created product from the database
Now we want to read the created product using ID of product from the database
Now we want to read the update product from the database

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

//send HTML data as response
//Here we will read from our database i.e from MongoDB atlas
app.get("/products", async (req, res) => {
  const allProducts = await ProductModel.find({});

  const html = `<ul>${allProducts.map(
    (product) => `<li>${product.product_name}</li>`
  )} </ul>`;

  res.send(html); // Now we are directly sending HTML data to the server i.e server side rendering (SSR)
});

// Route Parameters using id
app.get("/api/products/:id", async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  console.log(product);

  return res.status(200).json({ productInfo: product });
});

// POST
// After using middleware we can see the data in console.log after sending the request from POSTMAN
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

//Clean PUT methods
app.put("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  return res.status(201).json({ message: "Successfully updated" });
});

//Delete

app.delete("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  return res.status(201).json({ message: "Successfully deleted" });
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
