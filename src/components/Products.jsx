import React, { useState } from "react";
import home from "../assets/meesho-home.jpg";
// import app from "../assets/meesho-app.jpg";
import "../components/home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const {
    toggleCategory,
    filterProduct,
    setPriceRange,
    toggleRating,
    toggleGender,
  } = useContext(ProductContext);

  const handleCategoryChange = (category) => {
    toggleCategory(category);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange(min, max);
  };

  const handleRatingChange = (minRating) => {
    toggleRating(minRating);
  };

  const handleGenderChange = (gender) => {
    toggleGender(gender);
  };

  const [category, setCategory] = useState(false);
  const [gender, setGender] = useState(false);
  const [price, setPrice] = useState(false);
  const [rating, setRating] = useState(false);

  const handleCategory = () => {
    setCategory((prevCategory) => !prevCategory);
  };

  const handleGender = () => {
    setGender((prevGender) => !prevGender);
  };

  const handlePrice = () => {
    setPrice((prevPrice) => !prevPrice);
  };

  const handleRating = () => {
    setRating((prevRating) => !prevRating);
  };

  return (
    <div className="xl:container xl:mx-auto max-w-7xl">
      {/* <div className=" flex justify-center">
        <img src={home} className="w-[1000px]" />
      </div> */}
      <div className="md:mt-10 md:flex">
        {/* Filter product */}
        <div className="p-2 md:w-[30%] lg:w-[20%] px-5 mr-2">
          <ul className="text-[17px] font-semibold grid grid-cols-2 gap-2 md:grid-cols-1">
            <li className="hidden md:inline py-4">
              FILTERS <br />
              <span className="text-[13px] text-gray-500">1000+ products</span>
            </li>
            <hr className="hidden md:inline" />

            <li className="py-5 cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={handleCategory}
              >
                <p>Category</p>
                <span>
                  <svg
                    fill="none"
                    height="20"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    className={`${
                      category ? "rotate-180" : ""
                    } transition-transform duration-300`}
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              {category && (
                <div className="mt-3">
                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleCategoryChange("women-t-shirts")}
                    />
                    Women's T-shirts
                  </p>

                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleCategoryChange("men-t-shirts")}
                    />
                    men's T-shirts
                  </p>

                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleCategoryChange("electronics")}
                    />
                    electronics
                  </p>

                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleCategoryChange("jewelerys")}
                    />
                    jewelery
                  </p>

                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleCategoryChange("bags")}
                    />
                    Bags
                  </p>

                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleCategoryChange("hair-oil")}
                    />
                    Hair Oils
                  </p>

                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleCategoryChange("sunglass")}
                    />
                    Sunglasses
                  </p>
                </div>
              )}
            </li>
            <hr className="hidden md:inline" />

            <li className="py-5 cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={handleGender}
              >
                <p>Gender</p>
                <span>
                  <svg
                    fill="none"
                    height="20"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    className={`${
                      gender ? "rotate-180" : ""
                    } transition-transform duration-300`}
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              {gender && (
                <div className="mt-4 grid gap-2">
                  <button
                    className="category-button"
                    onClick={() => handleGenderChange("boys")}
                  >
                    Boys
                  </button>
                  <button
                    className="category-button"
                    onClick={() => handleGenderChange("girls")}
                  >
                    Girls
                  </button>
                  <button
                    className="category-button"
                    onClick={() => handleGenderChange("mens")}
                  >
                    Men
                  </button>
                  <button
                    className="category-button"
                    onClick={() => handleGenderChange("womens")}
                  >
                    Women
                  </button>
                </div>
              )}
            </li>
            <hr className="hidden md:inline" />

            <li className="py-5 cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={handlePrice}
              >
                <p>Price</p>
                <span>
                  <svg
                    fill="none"
                    height="20"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    className={`${
                      price ? "rotate-180" : ""
                    } transition-transform duration-300`}
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              {price && (
                <div className="mt-4">
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 149)}
                  >
                    Under ₹ 149
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 199)}
                  >
                    Under ₹ 199
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 249)}
                  >
                    Under ₹ 249
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 299)}
                  >
                    Under ₹ 299
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 349)}
                  >
                    Under ₹ 349
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 399)}
                  >
                    Under ₹ 399
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 449)}
                  >
                    Under ₹ 449
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 599)}
                  >
                    Under ₹ 599
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(0, 99)}
                  >
                    Under ₹ 0 - ₹ 99
                  </button>
                  <button
                    className="category-button my-1"
                    onClick={() => handlePriceChange(150, 199)}
                  >
                    Under ₹ 150 - ₹ 199
                  </button>
                </div>
              )}
            </li>
            <hr className="hidden md:inline" />

            <li className="py-5 cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={handleRating}
              >
                <p>Rating</p>
                <span>
                  <svg
                    fill="none"
                    height="20"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="20"
                    className={`${
                      rating ? "rotate-180" : ""
                    } transition-transform duration-300`}
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
              {rating && (
                <div className="mt-3">
                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleRatingChange(2)}
                    />
                    2.0 and above
                  </p>
                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleRatingChange(3)}
                    />
                    3.0 and above
                  </p>
                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleRatingChange(4)}
                    />
                    4.0 and above
                  </p>
                  <p className="category-checkbox">
                    <input
                      type="checkbox"
                      className="mx-2"
                      onClick={() => handleRatingChange(5)}
                    />
                    5 and above
                  </p>
                </div>
              )}
            </li>
            <hr className="hidden md:inline" />
          </ul>
        </div>

        {/* product part */}
        <div className="grid sm:gap-0 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 md:w-[75%] xl:w-[80%]">
          {filterProduct.map((items) => (
            <Link to={`/product/${items.id}`} key={items.id}>
              <div className="border md:rounded-xl h-auto md:h-[25rem] text-gray-500 hover:border-pink-500">
                <div className="card-img flex justify-center">
                  <img src={items.image} className="w-[120px] h-[11rem] py-6" />
                </div>
                <div className="px-2">
                  <p className="text-[17px] py-2">{items.title}</p>
                  <p className="text-[22px] text-black font-semibold py-1">
                    ₹ {items.price}{" "}
                    <span className="text-[14px] text-gray-500">onwards</span>
                  </p>
                  <button className="bg-pink-50  rounded-xl p-1 px-3 my-2">
                    Free Delivery
                  </button>
                  <div className="flex my-2">
                    <p className="bg-green-600 text-white w-[47px] text-center rounded-md">
                      {items.rating.rate} ★
                    </p>
                    <p className="mx-2">{items.rating.count} Reviews</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
