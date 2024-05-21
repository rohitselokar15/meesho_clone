import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <ProductProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </ProductProvider>
  );
};

export default App;
