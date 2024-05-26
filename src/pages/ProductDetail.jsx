import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { products,addToCart } = useContext(ProductContext);

  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-10 flex justify-center">
      <div className="border p-6 mr-6">
        <img src={product.image} className="w-[350px]" />
      </div>
      <div className="border w-[600px] p-6 text-gray-700 font-semibold">
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
          <button className="border p-2.5 px-8 text-pink-700 border-pink-700 rounded-md"
          onClick={()=>addToCart(product)}
          >
            <i className="fa-solid fa-cart-shopping mx-2"></i>Add to Cart
          </button>
          <button className="border p-2.5  px-12 mx-4 bg-pink-700 rounded-md text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
