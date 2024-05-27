import React, { useContext, useState } from "react";
import logo from "../assets/meeshoLogo.png";
import "../components/header.css";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();

  const { cart } = useContext(ProductContext);
  const { isLoggedIn, logOut, email } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Profile
  const handleProfileEnter = () => {
    setProfile(true);
  };

  const handleProfileLeave = () => {
    setProfile(false);
  };

  // Add to cart check user login or not
  const checkCart = () => {
    if (isLoggedIn) {
      navigate("/addtocart");
    } else {
      alert("Login to access cart page");
      navigate("/register");
    }
  };

  const handleLogOut = () => {
    logOut();
    alert("You have been logged out");
    navigate("/register");
  };

  return (
    <div className="xl:container xl:mx-auto max-w-7xl sticky top-0 bg-white">
      <nav className="flex justify-between lg:justify-around items-center h-16 mx-2">
        <div className="">
          <Link to="/">
            <img src={logo} className="w-36" />
          </Link>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <i className="fa-solid fa-bars text-black fa-xl"></i>
        </div>

        <div
          className={`lg:flex absolute top-16 left-0 right-0 rounded-xl ${
            menuOpen ? "block" : "hidden"
          } lg:static lg:bg-transparent lg:p-0`}
        >
          <ul className="text-center lg:flex items-center text-gray-800 ">
            <li className="p-1 xl:p-2 border border-pink-500">
              <i className="fa-solid fa-magnifying-glass px-1 text-gray-500" />
              <input
                type="text"
                placeholder="Try Saree,Kurti or Search by Product Code"
                className="lg:w-[250px] xl:w-[320px]"
              />
            </li>

            <li className="lg:px-3 xl:px-6 lg:flex items-center border-r-2">
              <i class="fa-solid fa-mobile-screen px-2"></i>
              <p>Download App</p>
            </li>

            <li className="lg:px-3 xl:px-6 border-r-2">Become a Supplier</li>
            <li className="lg:px-3 xl:px-6 border-r-2">Newsroom</li>
            <li
              className="lg:px-3 xl:px-6"
              onMouseEnter={handleProfileEnter}
              onMouseLeave={handleProfileLeave}
            >
              {isLoggedIn ? (
                <>
                  <div>
                    <i className="fa-regular fa-user" />
                    <p>Profile</p>
                  </div>
                  {profile && (
                    <div className="absolute rounded-b-lg left-[80%] bg-white shadow-md p-5 text-start">
                      <p className="font-semibold text-[16px]">Hello {email}</p>
                      <p className="text-[14px] my-1">
                        Tp access your Messho account
                      </p>

                      <button
                        className="p-2 font-semibold text-[17px] bg-pink-600 w-full text-white rounded-md my-4"
                        onClick={handleLogOut}
                      >
                        Log Out
                      </button>

                      <hr />
                      <p className="text-[17px] mt-4 font-semibold">
                        My Orders
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div>
                    <i className="fa-regular fa-user" />
                    <p>Profile</p>
                  </div>
                  {profile && (
                    <div className="absolute rounded-b-lg left-[80%] bg-white shadow-md p-5 text-start">
                      <p className="font-semibold text-[16px]">Hello User</p>
                      <p className="text-[14px] my-1">
                        Tp access your Messho account
                      </p>
                      <Link to="/register">
                        <button className="p-2 font-semibold text-[17px] bg-pink-600 w-full text-white rounded-md my-4">
                          Sign Up
                        </button>
                      </Link>
                      <hr />
                      <p className="text-[17px] mt-4 font-semibold">
                        My Orders
                      </p>
                    </div>
                  )}
                </>
              )}
            </li>

            <li className="lg:px-3 xl:px-6 cursor-pointer" onClick={checkCart}>
              <Link to="/addtocart">
                <i className="fa-solid fa-cart-shopping fa-lg" />
                {cart.length > 0 && (
                  <span className="rounded-full px-1 bg-pink-100 font-semibold text-[13px] mx-1">
                    {cart.length}
                  </span>
                )}
                <p>Cart</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
