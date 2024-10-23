import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const Products = lazy(() => import("./page/Products"));
const Testimonial = lazy(() => import("./page/Testimonial"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* Wrap the Routes in Suspense and provide a fallback */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
