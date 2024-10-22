import React from "react";
import Products from "../components/Products";

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <h2 className="heading">Welcome to the store</h2>
      <section>
        <h3>Products</h3>
        <Products products={products} addToCart={addToCart} />
      </section>
    </div>
  );
};

export default Home;
