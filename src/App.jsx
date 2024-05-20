import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </>
  );
};

export default App;
