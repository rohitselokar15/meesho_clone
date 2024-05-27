import React, { useState } from "react";
import emailjs from "emailjs-com";
import register_image from "../assets/register.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleSendCode = () => {

    if(!email){
      alert("Please enter your mail");
      return;
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    setCodeSent(true);

    const templateParams = {
      to_email: email, // Using the email entered by the user
      code: code,
    };

    emailjs
      .send(
        "service_0vzbxlw",
        "template_lfkfe3q",
        templateParams,
        "AY0dIfqKgfHs-Mt2H"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed to send email", err);
      });
  };

  const handleVerifyCode = () => {
    if (verificationCode === generatedCode) {
      alert("Email Verified");
      navigate("/");
      
    } else {
      alert("Invalid verification code");
    }
  };

  return (
    <div className=" bg-pink-100 h-[40rem] flex justify-center items-center">
      <div className="border bg-black w-[25rem]">
        <div>
          <img
            src={register_image}
            className="h-[260px] w-full"
            alt="Registration"
          />
        </div>
        <div className="bg-white p-14 py-10">
          <p className="text-[17px] font-semibold my-2">
            Sign Up to view your profile
          </p>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 my-4"
          />
          <br />
          <button
            onClick={handleSendCode}
            className="p-2 bg-pink-500 text-white px-10 w-full mt-4"
          >
            Continue
          </button>
          {codeSent && (
            <>
              <input
                type="text"
                placeholder="Enter verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full border-b-2 my-4"
               
              />
              <button
                onClick={handleVerifyCode}
                className="p-2 bg-pink-500 text-white px-10 w-full mt-4"
              >
                Verify
              </button>
            </>
          )}
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
