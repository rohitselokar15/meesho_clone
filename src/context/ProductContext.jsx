import React, { createContext, useContext, useEffect, useState } from "react";
import productsData from "../../product.json";
import filterProductByCategory from "../utils/FilterProduct";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectPriceRange, setSelectPriceRange] = useState(null);
  const [selectRating, setSelectRating] = useState(new Set());

  useEffect(() => {
    setProducts(productsData);
    setFilterProduct(productsData);
  }, []);

  useEffect(() => {
    setFilterProduct(
      filterProductByCategory(
        products,
        selectedCategory,
        selectPriceRange,
        selectRating
      )
    );
  }, [selectedCategory, selectPriceRange, products, selectRating]);

  const toggleCategory = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const setPriceRange = (min, max) => {
    setSelectPriceRange([min, max]);
  };

  const toggleRating = (rating) => {
    setSelectRating((prev) => {
      const newRatings = new Set(prev);
      if (newRatings.has(rating)) {
        newRatings.delete(rating);
      } else {
        newRatings.add(rating);
      }
      return newRatings;
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filterProduct,
        selectedCategory,
        setSelectedCategory,
        toggleCategory,
        setPriceRange,
        toggleRating,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
