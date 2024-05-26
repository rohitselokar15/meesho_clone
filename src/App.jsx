import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <ProductProvider>
      <Header />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </ProductProvider>

    // <Login/>
  );
};

export default App;
