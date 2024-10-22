import React from "react";
import { useProducts } from "../context/ProductsContext";
import { useCart } from "../context/CartContext";

const Products = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button onClick={() => addToCart(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
