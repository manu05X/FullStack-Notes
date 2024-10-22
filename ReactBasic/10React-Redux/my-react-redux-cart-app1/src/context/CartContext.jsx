import React, { createContext, useContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);

// Provider component to wrap around the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
