import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </CartProvider>
    </div>
  );
}

export default App;
