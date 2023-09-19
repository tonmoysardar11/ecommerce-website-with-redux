import React, { useState } from "react";

const Prime = () => {
  const [option, setoption] = useState(true);
  const [plan, setplan] = useState("prime");

  const changeOption = () => {
    setoption(!option);
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container flex flex-col justify-center items-center px-5 py-24 mx-auto">
        <div className="flex flex-col justify-center items-center w-full mb-20">
          <span className="py-2 lg:py-0 inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-3xl md:mt-0">
            Become <p className="text-4xl text-yellow-500 mx-1">Prime</p> Member
          </span>
          <span className="flex flex-wrap items-center leading-relaxed text-base text-gray-500 my-2">
            Explore our <p className="text-2xl text-yellow-500 mx-1">Prime</p>{" "}
            Features to get{" "}
            <p className="text-2xl text-yellow-500 mx-1">Prime</p> Benefits
          </span>
          <div
            className="flex mx-auto border-2 border-yellow-500 rounded overflow-hidden mt-6"
            onClick={changeOption}
          >
            <button
              className={
                option
                  ? "py-1 px-4 bg-yellow-500 text-white focus:outline-none"
                  : "py-1 px-4 focus:outline-none"
              }
            >
              Monthly
            </button>
            <button
              className={
                !option
                  ? "py-1 px-4 bg-yellow-500 text-white focus:outline-none"
                  : "py-1 px-4 focus:outline-none"
              }
            >
              Annually
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              className={`h-full p-6 rounded-lg border-2  ${
                plan === "basic" ? "border-yellow-500" : "border-gray-300"
              }  flex flex-col relative overflow-hidden`}
            >
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Basic
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                Free
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "basic" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Exclusive Items
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "basic" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Premium Quality
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "basic" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Maximum Discounts
              </p>
              <button
                className={`flex items-center mt-auto text-white ${
                  plan === "basic" ? "bg-yellow-500" : "bg-gray-400"
                } border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded`}
                onClick={() => setplan("basic")}
              >
                Select
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              className={`h-full p-6 rounded-lg border-2 ${
                plan === "prime" ? "border-yellow-500" : "border-gray-400"
              } flex flex-col relative overflow-hidden`}
            >
              <span
                className={`${
                  plan === "prime" ? "bg-yellow-500" : "bg-gray-400"
                } text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}
              >
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Prime
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>${option ? 38 : 38 * 12}</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  /{option ? "mo" : "yr"}
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Exclusive Items
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Premium Quality
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                1-Day Delivery
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Maximum Discounts
              </p>
              <button
                className={`flex items-center mt-auto text-white ${
                  plan === "prime" ? "bg-yellow-500" : "bg-gray-400"
                } border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-600 rounded`}
                onClick={() => setplan("prime")}
              >
                Select
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              className={`h-full p-6 rounded-lg border-2 ${
                plan === "prime plus" ? "border-yellow-500" : "border-gray-400"
              } flex flex-col relative overflow-hidden`}
            >
              <span
                className={`${
                  plan === "prime plus" ? "bg-yellow-500" : "bg-gray-400"
                } text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}
              >
                BEST CHOICE
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                Prime Plus
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>${option ? 56 : 56 * 12}</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  /{option ? "mo" : "yr"}
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime plus" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Exclusive Items
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime plus" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Premium Quality
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime plus" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                1-Day Delivery
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime plus" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                24 X 7 Customer Support
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span
                  className={`w-4 h-4 mr-2 inline-flex items-center justify-center ${
                    plan === "prime plus" ? "bg-emerald-400" : "bg-gray-400"
                  } text-white rounded-full flex-shrink-0`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Maximum Discounts
              </p>
              <button
                className={`flex justify-center items-center mt-auto text-white ${
                  plan === "prime plus" ? "bg-yellow-500" : "bg-gray-400"
                } border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-600 rounded`}
                onClick={() => setplan("prime plus")}
              >
                Select
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Prime;
