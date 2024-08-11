// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kmanu00005:ovRlL7UQlgqujYQp@cluster0.co7yrow.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Db connection established");
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
