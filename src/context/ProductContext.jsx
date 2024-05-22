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
  const [selectGender, setSelectGender] = useState([]);

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
        selectRating,
        selectGender
      )
    );
  }, [
    selectedCategory,
    selectPriceRange,
    products,
    selectRating,
    selectGender,
  ]);

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

  const toggleGender = (gender) => {
    setSelectGender((prev) => (prev === gender ? "" : gender));
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
        toggleGender,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
