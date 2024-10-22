import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Cart Products</h2>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button onClick={() => removeFromCart(product.id)} className="btn">
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
