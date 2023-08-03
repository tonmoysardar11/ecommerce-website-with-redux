import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faBars,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchedItems from "../pages/SearchedItems";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const [search, setsearch] = useState("");
  const [focus, setfocus] = useState(false);
  const [hover, sethover] = useState(false);
  const toggle = () => {
    setmenu(!menu);
  };

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
  const TotalQty = list.length > 0 ? list.reduce((a, b) => a + b.qty, 0) : 0;
  return (
    <>
      <header className="lg:fixed w-full z-20 text-gray-100 bg-indigo-700 body-font px-3 md:px-5 lg:px-10 xl:px-15">
        <div className="w-full mx-auto flex flex-wrap px-1 md:px-5 py-2 justify-between items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <span className="ml-3 text-2xl text-gray-100 font-semibold cursor-pointer">
              myCart
            </span>
          </Link>
          <div className="w-1/2 md:w-1/3 flex justify-center items-center">
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
              <div className="px-2 text-xl md:text-2xl cursor-pointer hover:bg-white hover:text-indigo-700">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
          {menu ? (
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggle}
              className=" mx-2 lg:hidden block rotate-90 text-xl duration-200"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggle}
              className=" mx-2 lg:hidden block text-xl duration-200"
            />
          )}

          <div
            className={` ${
              menu ? `flex` : `hidden`
            } flex-col lg:flex-row justify-center items-center lg:flex py-4 lg:py-0 w-full lg:w-1/2`}
          >
            <nav className="flex flex-col lg:flex-row items-center text-base justify-center">
              <Link
                to="/all"
                className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer relative"
                onClick={() => setmenu(false)}
              >
                New Arrivals
                  <div class="absolute left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-yellow-500 p-1.5 text-xs"></div>
              </Link>
              <Link
                to="/electronics"
                className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer"
                onClick={() => setmenu(false)}
              >
                Electronics
              </Link>
              <Link
                to="/jewelery"
                className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer"
                onClick={() => setmenu(false)}
              >
                Jewelery
              </Link>
              <Link
                to="/mens"
                className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer"
                onClick={() => setmenu(false)}
              >
                Mens Clothings
              </Link>
              <Link
                to="/womens"
                className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer"
                onClick={() => setmenu(false)}
              >
                Womens Clothings
              </Link>
              <Link to="/cart" onClick={() => setmenu(false)}>
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
            </nav>
          </div>
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
