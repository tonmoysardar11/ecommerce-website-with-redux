import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";
import Alert from "./Alert";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

const Viewer = ({ item, state, setmodalData }) => {
  const [alert, setalert] = useState(false);
  const [elem, setelem] = useState({ ...item, qty: 1 });
  const [img, setimg] = useState(0);
console.log(item)
  const prev = () => {
    setimg(img === 0 ? elem.images.length - 1 : img - 1);
  };
  const next = () => {
    setimg(img === elem.images.length - 1 ? 0 : img + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });
  const dispatch = useDispatch();
  const showalert = () => {
    setalert(true);
    setTimeout(() => {
      setalert(false);
    }, 3000);
  };

  const add = () => {
    dispatch(addItem(elem));
    // state(false);
    showalert();
  };
  useEffect(() => {
    setelem({ ...item, qty: 1 })
    setimg(0)
    
  }, [item]);

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-opacity-70 backdrop-filter backdrop-blur-sm z-50">
      {alert && <Alert />}
      <section className="fixed top-3 left-2 right-2 h-[40rem] lg:h-[80vh] overflow-scroll md:overflow-auto md:top-24 md:left-32 md:right-32 origin-top rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ">
        <p
          className="text-lg title-font text-gray-500 tracking-widest text-right mr-5 mt-1 cursor-pointer"
          onClick={() => {
            state(false);
            setmodalData([]);
          }}
        >
          X
        </p>
        <div className="container p-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap items-center flex-col md:flex-row">
            <div className="relative overflow-hidden lg:w-1/3 object-center w-full h-96 lg:h-[60vh]">
              <div
                className="w-full flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${img * 100}%)` }}
              >
                {elem.images.map((element, index) => (
                  <img
                    key={index}
                    src={element}
                    alt=""
                    className="h-96 lg:h-[60vh]"
                  />
                ))}
              </div>

              <div className="absolute inset-0 flex justify-between items-center mx-5">
                <FontAwesomeIcon
                  onClick={prev}
                  icon={faLessThan}
                  className="p-3 bg-gray-200 bg-opacity-20 hover:bg-opacity-40 cursor-pointer"
                />
                <FontAwesomeIcon
                  onClick={next}
                  icon={faGreaterThan}
                  className="p-3 bg-gray-200 bg-opacity-20 hover:bg-opacity-40 cursor-pointer"
                />
              </div>
              <div className="absolute bottom-4 right-0 left-0 flex justify-center items-center">
                {elem.images.map((_, i) => (
                  <div
                    key={i}
                    className={`transition-all bg-gray-200 mx-3 w-2 h-2 rounded-full ${
                      img === i ? "p-1" : "bg-opacity-50"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0 mx-auto">
              <h1 className="text-gray-500 text-lg title-font font-medium mb-1">
                {elem.category.charAt(0).toUpperCase() + elem.category.slice(1)}
              </h1>
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
                {elem.title}
              </h1>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {elem.brand}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center justify-center">
                  <span className="text-gray-900">{Number(elem.rating).toFixed(1)}</span>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mx-1 w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </div>
              <p className="leading-relaxed">{elem.description}</p>
              <div className="flex mt-6  flex-col md:flex-row items-start md:items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex my-3 justify-center items-center">
                  <span className="mr-3">Quantity</span>
                  <div className="flex flex-row justify-center items-center">
                    <button
                      className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded-l-lg text-base  md:mt-0"
                      onClick={() => {
                        setelem({ ...elem, qty: elem.qty - 1 });
                      }}
                    >
                      -
                    </button>
                    <input
                      className="mx-2 w-5"
                      min={1}
                      value={elem.qty}
                      onChange={(e) => {
                        setelem({ ...elem, qty: e.target.value });
                      }}
                    />
                    <button
                      className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded-r-lg text-base  md:mt-0"
                      onClick={() => {
                        setelem({ ...elem, qty: elem.qty + 1 });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* <div className={"flex my-3 md:ml-6 items-center"}>
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                      value={elem.size}
                      onChange={(e) => {
                        setelem({ ...elem, size: e.target.value });
                      }}
                    >
                      <option value={elem.size}>
                        {elem.size !== "Select Size"
                          ? `Selected Size: ${elem.size}`
                          : "Select Size"}
                      </option>

                      <option value="SM">SM</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${elem.price}
                </span>

                <button
                  className="flex ml-auto text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded disabled:opacity-50"
                  onClick={add}
                  disabled={elem.qty < 1}
                >
                  {elem.qty < 1 ? "Select Quantity To Continue" : "Add To Cart"}
                </button>
                <Link to="/cart" className="mx-2">
                  <button
                    className={
                      elem.qty < 1
                        ? " hidden"
                        : "flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded disabled:opacity-50"
                    }
                  >
                    Go To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Viewer;
