import React, { createContext, useContext, useEffect, useState } from "react";
import productsData from "../../product.json";
import filterProductByCategory from "../utils/FilterProduct";
import { AuthContext } from "./AuthContext";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectPriceRange, setSelectPriceRange] = useState(null);
  const [selectRating, setSelectRating] = useState(new Set());
  const [selectGender, setSelectGender] = useState([]);
  const [cart, setCart] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);

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

  const addToCart = (product) => {
    if (isLoggedIn) {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    } else {
      alert("Please Login to add items to cart");
    }
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeCart = (productId) => {
    alert("Want to Remove product !");
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
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
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
