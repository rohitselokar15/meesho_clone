import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeCart } =
    useContext(ProductContext);

  const totalProductPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const orderTotal = totalProductPrice + 40;

  return (
    <div className="mt-8 flex gap-5 xl:container xl:mx-auto max-w-7xl justify-center">
      <div>
        <p className="font-semibold text-[18px] text-gray-800">
          Product Details
        </p>
        {cart.map((items) => (
          <div className="border my-2 rounded-lg flex p-4">
            <div className="p-2">
              <img
                src={items.image}
                className="h-[60px] w-[60px] border p-1 rounded-md shadow-md"
              />
            </div>
            <div className=" px-2">
              <p className="font-semibold text-[16px] text-gray-700">
                {items.title}
              </p>
              <p className="my-1">₹ {items.price}</p>
              <p className="text-[14px] font-semibold text-gray-500 my-1">
                All issue easy returns
              </p>
              <p className="my-1 text-gray-800">
                Size:{" "}
                <span className="text-gray-600 font-semibold text-[15px]">
                  Free size
                </span>{" "}
                <span className="ml-12">
                  Qty:
                  <button
                    onClick={() => decreaseQuantity(items.id)}
                    className="border px-2 mx-2 bg-pink-50"
                  >
                    -
                  </button>
                  {items.quantity}
                  <button
                    onClick={() => increaseQuantity(items.id)}
                    className="border px-2 mx-2 bg-pink-50"
                  >
                    +
                  </button>
                </span>
              </p>
              <button
                className="hover:border hover:border-pink-500 px-2 text-gray-600 font-semibold text-[16px]"
                onClick={() => removeCart(items.id)}
              >
                X REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-l p-4 font-semibold">
        <p className="text-[18px] text-gray-800">
          Price Details ({cart.length} Items)
        </p>
        <div className="mt-6">
          <p className="my-2 text-gray-600 text-[16px]">
            Total Product Price :{" "}
            <span className="ml-12">₹ {totalProductPrice.toFixed(2)}</span>
          </p>
          <p className=" my-2 text-gray-600 text-[16px]">
            Additional Charges : <span className="ml-12 text-red-600">+40</span>
          </p>
          <hr />
          <p className="my-4 text-[19px] text-gray-700">
            Order Total:{" "}
            <span className="ml-[80px] text-green-600">
              ₹ {orderTotal.toFixed(2)}
            </span>
          </p>
          <p className="text-gray-600 text-[11px] my-2 mt-12">
            Clicking on 'Continue' will not be deduct any money
          </p>
          <button className="bg-pink-600 text-[18px] p-2 w-full rounded-md text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
