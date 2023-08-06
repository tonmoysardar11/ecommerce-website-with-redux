import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-100 body-font ">
      <div className="bg-gray-800 container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col px-3 md:px-5 lg:px-10 xl:px-15">
        <div className="w-full md:w-1/6 flex flex-col justify-start items-center mt-10 md:mt-0">
          <Link
            to="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-300"
          >
            <span className="mx-3 text-2xl text-gray-100 font-semibold cursor-pointer">
              myCart
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-100">Anything to Everything</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center flex-wrap -mb-10 text-center my-5 md:my-0">
          <div className="w-full px-4">
            <h2 className="title-font font-bold text-gray-300 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <div className="flex justify-between">
              <nav className="list-none text-left mb-10 md:mb-2">
                <li>
                  <Link
                    to="/smartphones"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/laptops"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/groceries"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Groceries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skincare"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Skin Care
                  </Link>
                </li>
              </nav>
              <nav className="list-none text-left mb-10 md:mb-2">
                <li>
                  <Link
                    to="/home-decoration"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Home Decors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/furniture"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womens-dresses"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Womens dresses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tops"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Tops
                  </Link>
                </li>
              </nav>
              <nav className="list-none text-left mb-10 md:mb-2">
                <li>
                  <Link
                    to="/womens-shoes"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Womens Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mens-shirts"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Mens Shirts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mens-shoes"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Mens Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mens-watches"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Mens Watches
                  </Link>
                </li>
              </nav>
              <nav className="list-none text-left mb-10 md:mb-2">
                <li>
                  <Link
                    to="/womens-watches"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Womens Watches
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womens-bags"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Womens Bags
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womens-jewellery"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Jewellery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sunglasses"
                    className="text-gray-100 hover:text-gray-300"
                  >
                    Sunglasses
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/6 flex flex-col justify-center items-center flex-wrap -mb-10 text-center my-5 md:my-0">
          <div className="md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-300 tracking-widest text-sm mb-3">
              SUPPORT
            </h2>
            <nav className="list-none  mb-10 md:mb-2">
              <li>
                <Link to="" className="text-gray-100 hover:text-gray-300">
                  +91-1234567890
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-100 hover:text-gray-300">
                  contact@myCart.com
                </Link>
              </li>
            </nav>
          </div>
        </div>
        <div className="w-full md:w-1/6 flex flex-col justify-center items-center flex-wrap -mb-10 text-center my-5 md:my-0">
          <div className="md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-300 tracking-widest text-sm mb-3">
              OTHERS
            </h2>
            <nav className="list-none mb-10 md:mb-2">
              <li>
                <Link to="" className="text-gray-100 hover:text-gray-300">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="" className="text-gray-100 hover:text-gray-300">
                  Be A Seller
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 ">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-100 text-sm text-center sm:text-left">
            © 2023 myCart —@TonmoySardar
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link className="text-gray-100">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-100">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-100">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-100">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
