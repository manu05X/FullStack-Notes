import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <h2>Cart Products</h2>
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <h5>${product.price}</h5>
            <button
              onClick={() => handleRemoveFromCart(product.id)}
              className="btn"
            >
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
