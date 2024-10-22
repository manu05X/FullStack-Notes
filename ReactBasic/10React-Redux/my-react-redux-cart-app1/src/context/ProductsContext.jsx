import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const ProductsContext = createContext();

// Custom hook to access the products context
export const useProducts = () => useContext(ProductsContext);

// Provider component to wrap around the app
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
