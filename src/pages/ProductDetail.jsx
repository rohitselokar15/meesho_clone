import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";

const ProductDetail = () => {
  const navigate = useNavigate();

  const { products, addToCart } = useContext(ProductContext);
  const { isLoggedIn } = useContext(AuthContext);
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCart(product);
    } else {
      alert("Please login to add items in cart");
      navigate("/register");
    }
  };

  const handleBuyNow = () => {
    if (isLoggedIn) {
      navigate("/addToCart");
    } else {
      alert("Please login to Proceed Payment");
      navigate("/register");
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-6 md:p-10 md:flex justify-center items-start">
      <div className="md:border flex justify-center md:p-6 md:mr-2">
        <img src={product.image} className="w-[200px] md:w-[300px]" />
      </div>
      <div className="md:border md:w-[600px] p-4 md:p-6 text-gray-700 font-semibold">
        <p className="text-[23px] py-4">{product.title}</p>
        <p className="text-[16px] py-6">{product.description}</p>
        <p className="text-[30px] text-black font-semibold py-1">
          ₹ {product.price}
          {""}
          <span className="text-[27px] mx-2 cursor-pointer text-gray-700 font-normal">
            ⓘ
          </span>
        </p>
        <button className="bg-pink-50  rounded-xl p-1 px-3 my-4">
          Free Delivery
        </button>
        <div className="flex my-2">
          <p className="bg-green-600 text-white w-[50px] text-center rounded-md">
            {product.rating.rate} ★
          </p>
          <p className="mx-4">{product.rating.count} Reviews</p>
        </div>
        <div className="my-6">
          <button
            className="border p-2.5 lg:px-8 text-pink-700 border-pink-700 rounded-md"
            onClick={handleAddToCart}
          >
            <i className="fa-solid fa-cart-shopping mx-2"></i>Add to Cart
          </button>
          <button
            className="border p-2.5  px-12 mx-4 bg-pink-700 rounded-md text-white"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
