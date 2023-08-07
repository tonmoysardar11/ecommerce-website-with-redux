import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchedItems from "../pages/SearchedItems";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [search, setsearch] = useState("");
  const [focus, setfocus] = useState(false);
  const [hover, sethover] = useState(false);

  const change = (e) => {
    setsearch(e.target.value);
  };

  const activeFocus = () => {
    setfocus(true);
  };

  const activeBlur = () => {
    if (!hover) {
      setTimeout(() => {
        setfocus(false);
      }, 100);
    }
  };

  const list = useSelector((state) => {
    return state.cart;
  });
  const TotalQty = 
  list.length > 0 ? list.reduce((a, b) => a + b.qty, 0) : 0;
  return (
    <>
      <header className="lg:fixed w-full z-20 text-gray-100 bg-gray-900 body-font px-3 md:px-5 lg:px-10 xl:px-15">
        <div className="w-full mx-auto flex flex-wrap px-1 md:px-5 py-2 justify-between items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center md:mb-0"
          >
            <span className="ml-3 text-2xl text-gray-100 font-semibold cursor-pointer">
              myCart
            </span>
          </Link>
          <div className="w-2/3 md:w-1/2 flex justify-center items-center">
            <div className="w-full md:w-4/5 flex justify-center items-center rounded border border-gray-300">
              <input
                type="text"
                name="hero-field"
                className="w-full bg-gray-300 bg-opacity-30 focus:ring-2  focus:bg-white focus:border-gray-500 text-base outline-none text-black py-1 px-3 leading-6 transition-colors duration-200 ease-in-out placeholder:text-black"
                placeholder="Search"
                onChange={change}
                onFocus={activeFocus}
                onBlur={activeBlur}
              />
              <div className="px-2 text-xl md:text-2xl cursor-pointer hover:bg-white hover:text-gray-900">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
          <nav className="w-full lg:w-max">
            <Link to="/cart">
              <button className="py-2 lg:py-0 inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0">
                {" "}
                Cart{" "}
                {TotalQty > 0 ? (
                  <FontAwesomeIcon
                    icon={faCartArrowDown}
                    className="m-1 text-xl cursor-pointer"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="m-1 text-xl cursor-pointer"
                  />
                )}
                <p className="mx-1 px-2 flex justify-center items-center text-black bg-yellow-500 rounded-full">
                  {TotalQty}{" "}
                </p>
              </button>
            </Link>
            <Link to="">
              <button className="py-2 lg:py-0 inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0">
                Become <span className="text-lg text-yellow-500 mx-1">Prime</span> Member
              </button>
            </Link>
          </nav>
        </div>
      </header>
      {search && (
        <SearchedItems
          find={search}
          focus={focus}
          setfocus={setfocus}
          sethover={sethover}
        />
      )}
    </>
  );
};

export default Navbar;
