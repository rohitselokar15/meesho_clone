import React, { useState } from "react";
import logo from "../assets/meeshoLogo.png";
import "../components/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleMouseEnter = () => {
    setdropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setdropdownOpen(false);
  };

  const [western, setWestern] = useState(false);
  const handleWesternEnter = () => {
    setWestern(true);
  };

  const handleWesternLeave = () => {
    setWestern(false);
  };

  const [mens, setMens] = useState(false);
  const [kids, setKids] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [beauty, setBeauty] = useState(false);
  const [jewellery, setJewellery] = useState(false);
  const [bags, setBags] = useState(false);
  const [electronic, setElectronic] = useState(false);

  const handleMensEnter = () => {
    setMens(true);
  };

  const handleMensLeave = () => {
    setMens(false);
  };

  const handleKidsEnter = () => {
    setKids(true);
  };

  const handleKidsLeave = () => {
    setKids(false);
  };

  const handleKitchenEnter = () => {
    setKitchen(true);
  };

  const handleKitchenLeave = () => {
    setKitchen(false);
  };

  const handleBeautyEnter = () => {
    setBeauty(true);
  };

  const handleBeautyLeave = () => {
    setBeauty(false);
  };

  const handleBagsEnter = () => {
    setBags(true);
  };

  const handleBagsLeave = () => {
    setBags(false);
  };

  const handleJewelleryEnter = () => {
    setJewellery(true);
  };

  const handleJewelleryLeave = () => {
    setJewellery(false);
  };

  const handleElectronicEnter = () => {
    setElectronic(true);
  };

  const handleElectronicLeave = () => {
    setElectronic(false);
  };

  return (
    <div className="xl:container xl:mx-auto max-w-7xl">
      <nav className="flex justify-between lg:justify-around items-center h-16 mx-2 sticky top-0 z-50">
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
          <ul className="text-center lg:flex items-center text-gray-800">
            <li className="p-1 xl:p-2 border border-purple-700">
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
            <li className="lg:px-3 xl:px-6">
              <i class="fa-regular fa-user"></i>
              <p>Profile</p>
            </li>

            <li className="lg:px-3 xl:px-6 cursor-pointer">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Cart</p>
            </li>
          </ul>
        </div>
      </nav>
      <div className="my-2">
        <ul className="text-gray-800 flex justify-evenly border-t-2 border-b-2">
          <li
            className="product"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Women Ethic
            {dropdownOpen && (
              <div className="shadow mt-3 absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">
                    All Women Ethic
                  </li>
                  <li>View All</li>
                </ul>

                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Sarees</li>
                  <li>All Sarees</li>
                  <li>Silk Sarees</li>
                  <li>Cotten Silk Sarees</li>
                  <li>Cotton Sarees</li>
                  <li>Geogrette Sarees</li>
                  <li>Chiffon Sarees</li>
                  <li>Satin Sarees</li>
                  <li>Embroidered Sarees</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Kurti</li>
                  <li>All kurtis</li>
                  <li>Anarkali Kurtis</li>
                  <li>Rayon Kurtis</li>
                  <li>Cotton Kurtis</li>
                  <li>Embroidered kurtis</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">
                    Suits & Dress Material
                  </li>
                  <li>All Suits & Dress Material</li>
                  <li>Cotton Suits</li>
                  <li>Embroidered Suits</li>
                  <li>Chanderi Suits</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Other Ethnic</li>
                  <li>Blouses</li>
                  <li>Dupattas</li>
                  <li>Lehanga</li>
                  <li>Gown</li>
                  <li>Ethnic Bottemwear</li>
                </ul>
              </div>
            )}
          </li>

          <li
            className="product"
            onMouseEnter={handleWesternEnter}
            onMouseLeave={handleWesternLeave}
          >
            Women Western
            {western && (
              <div className="absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Topwear</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Bottemwear</li>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Innerwear</li>

                  <li>Bra</li>
                  <li>Briefs</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Sleepwear</li>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="product"
            onMouseEnter={handleMensEnter}
            onMouseLeave={handleMensLeave}
          >
            Men
            {mens && (
              <div className="absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Topwear</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Bottemwear</li>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Innerwear</li>

                  <li>Bra</li>
                  <li>Briefs</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Sleepwear</li>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="product"
            onMouseEnter={handleKidsEnter}
            onMouseLeave={handleKidsLeave}
          >
            Kids
            {kids && (
              <div className="absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Topwear</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Bottemwear</li>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Innerwear</li>

                  <li>Bra</li>
                  <li>Briefs</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Sleepwear</li>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="product"
            onMouseEnter={handleKitchenEnter}
            onMouseLeave={handleKitchenLeave}
          >
            Home & Kitchen
            {kitchen && (
              <div className="absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Topwear</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Bottemwear</li>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Innerwear</li>

                  <li>Bra</li>
                  <li>Briefs</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Sleepwear</li>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="product"
            onMouseEnter={handleBeautyEnter}
            onMouseLeave={handleBeautyLeave}
          >
            Beauty & Health
            {beauty && (
              <div className="absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Topwear</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Bottemwear</li>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Innerwear</li>

                  <li>Bra</li>
                  <li>Briefs</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Sleepwear</li>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="product"
            onMouseEnter={handleJewelleryEnter}
            onMouseLeave={handleJewelleryLeave}
          >
            Jewellery & Accessories
            {jewellery && (
              <div className="absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Topwear</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Bottemwear</li>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Innerwear</li>

                  <li>Bra</li>
                  <li>Briefs</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Sleepwear</li>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="product"
            onMouseEnter={handleBagsEnter}
            onMouseLeave={handleBagsLeave}
          >
            Bags & Footwear
            {bags && (
              <div className="left-0 absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Topwear</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Bottemwear</li>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Innerwear</li>

                  <li>Bra</li>
                  <li>Briefs</li>
                </ul>

                <ul className="categories ">
                  <li className="text-pink-600 font-semibold">Sleepwear</li>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="product"
            onMouseEnter={handleElectronicEnter}
            onMouseLeave={handleElectronicLeave}
          >
            Electronic
            {electronic && (
              <div className="absolute flex text-gray-600">
                <ul className="categories">
                  <li className="text-pink-600 font-semibold">Topwear</li>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
