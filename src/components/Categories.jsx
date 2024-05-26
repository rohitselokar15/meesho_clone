import React, { useState } from "react";
import cat_1 from "../assets/categories-women.jpg";
import "../components/header.css"

const Categories = () => {
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
    <div className="my-2">
      <ul className="text-gray-800 overflow-x-auto flex justify-evenly border-t-2 border-b-2">
        <li
          className="product"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="hidden sm:inline">Women Ethic</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">kurti & Dre..</p>
          </div>
          {dropdownOpen && (
            <div className="bg-white w-full mt-4 left-0 border border-pink-100 shadow-md absolute flex text-gray-600">
              <ul className="categories">
                <li className="text-pink-600 font-semibold">All Women Ethic</li>
                <li>View All</li>
              </ul>

              <ul className="categories bg-[#fffafa]">
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

              <ul className="categories bg-[#fffafa]">
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
          <span className="hidden sm:inline"> Women Western</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">Women Western</p>
          </div>

          {western && (
            <div className="bg-white border mt-4 w-full left-0 absolute flex text-gray-600 shadow-md">
              <ul className="categories">
                <li className="text-pink-600 font-semibold">Topwear</li>
                <li>Tops</li>
                <li>Dresses</li>
                <li>Sweaters</li>
                <li>Jumpsuits</li>
              </ul>

              <ul className="categories bg-[#fffafa]">
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

              <ul className="categories bg-[#fffafa]">
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
          <span className="hidden sm:inline">Mens</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">Mens</p>
          </div>

          {mens && (
            <div className="bg-white w-full mt-4 left-0 border border-pink-100 shadow-md absolute flex text-gray-600">
              <ul className="categories">
                <li className="text-pink-600 font-semibold">Topwear</li>
                <li>Tops</li>
                <li>Dresses</li>
                <li>Sweaters</li>
                <li>Jumpsuits</li>
              </ul>

              <ul className="categories bg-[#fffafa]">
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

              <ul className="categories bg-[#fffafa]">
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
          <span className="hidden sm:inline"> Kids</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">Kids</p>
          </div>

          {kids && (
            <div className="bg-white w-full mt-4 left-0 border border-pink-100 shadow-md absolute flex text-gray-600">
              <ul className="categories">
                <li className="text-pink-600 font-semibold">Topwear</li>
                <li>Tops</li>
                <li>Dresses</li>
                <li>Sweaters</li>
                <li>Jumpsuits</li>
              </ul>

              <ul className="categories bg-[#fffafa]">
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

              <ul className="categories bg-[#fffafa]">
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
          <span className="hidden sm:inline"> Home & Kitchen</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">Kitchen</p>
          </div>

          {kitchen && (
            <div className="bg-white w-full mt-4 left-0 border border-pink-100 shadow-md absolute flex text-gray-600">
              <ul className="categories">
                <li className="text-pink-600 font-semibold">Topwear</li>
                <li>Tops</li>
                <li>Dresses</li>
                <li>Sweaters</li>
                <li>Jumpsuits</li>
              </ul>

              <ul className="categories bg-[#fffafa]">
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

              <ul className="categories bg-[#fffafa]">
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
          <span className="hidden sm:inline"> Beauty & Health</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">Beauty</p>
          </div>

          {beauty && (
            <div className="bg-white w-full mt-4 left-0 border border-pink-100 shadow-md absolute flex text-gray-600">
              <ul className="categories">
                <li className="text-pink-600 font-semibold">Topwear</li>
                <li>Tops</li>
                <li>Dresses</li>
                <li>Sweaters</li>
                <li>Jumpsuits</li>
              </ul>

              <ul className="categories bg-[#fffafa]">
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

              <ul className="categories bg-[#fffafa]">
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
          <span className="hidden sm:inline"> Jewellery & Accessories</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">Jewellery</p>
          </div>

          {jewellery && (
            <div className="bg-white w-full mt-4 left-0 border border-pink-100 shadow-md absolute flex text-gray-600">
              <ul className="categories">
                <li className="text-pink-600 font-semibold">Topwear</li>
                <li>Tops</li>
                <li>Dresses</li>
                <li>Sweaters</li>
                <li>Jumpsuits</li>
              </ul>

              <ul className="categories bg-[#fffafa]">
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

              <ul className="categories bg-[#fffafa]">
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
          <span className="hidden sm:inline"> Bags & Footwear</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">Footwear</p>
          </div>

          {bags && (
            <div className="bg-white w-full mt-4 left-0 border border-pink-100 shadow-md absolute flex text-gray-600">
              <ul className="categories bg-pink-50">
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

              <ul className="categories bg-[#fffafa]">
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

              <ul className="categories bg-[#fffafa]">
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
          <span className="hidden sm:inline">Electronic</span>
          <div className="w-[55px] sm:hidden border">
            <img className="w-12 h-12 rounded-full" src={cat_1} />
            <p className="text-[12px]">Electronic</p>
          </div>

          {electronic && (
            <div className="bg-white w-full mt-4 left-0 border border-pink-100 shadow-md absolute flex text-gray-600">
              <ul className="categories">
                <li className="text-pink-600 font-semibold">Topwear</li>
                <li>Tops</li>
                <li>Dresses</li>
                <li>Sweaters</li>
                <li>Jumpsuits</li>
              </ul>

              <ul className="categories bg-[#fffafa]">
                <li className="text-pink-600 font-semibold">Bottemwear</li>
                <li>Jeans</li>
                <li>Jeggings</li>
                <li>Palazzos</li>
                <li>Shorts</li>
                <li>Skirts</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Categories;