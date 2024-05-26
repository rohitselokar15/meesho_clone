import React from "react";
import register_image from "../assets/register.jpg";

const Register = () => {
  //   const navigate = useNavigate();

  return (
    <div className=" bg-pink-100 h-[40rem] flex justify-center items-center">
      <div className="border bg-black w-[25rem]">
        <div>
          <img src={register_image} className="h-[260px] w-full" />
        </div>
        <div className="bg-white p-14 py-10">
          <p className="text-[17px] font-semibold my-2">
            Sign Up to view your profile
          </p>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border-b-2 my-4"
          />
          <br />
          <button className="p-2 bg-pink-500 text-white px-10 w-full mt-4">
            Continue
          </button>
          <p className="text-gray-500 text-center mt-20 font-semibold text-[13px]">
            By continuing you agree to Meesho's
            <span className="text-pink-600"> Terms & Condition</span> and{" "}
            <span className="text-pink-600">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
