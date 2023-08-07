import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Puff } from "react-loader-spinner";
import Viewer from "./Viewer";

const Category = ({ input }) => {
  const [filter, setfilter] = useState(false);
  const [filterData, setfilterData] = useState([]);
  const [maxprice, setmaxprice] = useState(0);
  const [filterprice, setfilterprice] = useState(0);
  const [option, setoption] = useState("");
  const [loader, setloader] = useState(true);
  const [items, setitems] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [modalData, setmodalData] = useState({});

  const load = async () => {
    let url = `https://dummyjson.com/products/category/${input}`;
    setfilterData([]);
    setloader(true);
    let fetchedData = await fetch(url);
    let json = await fetchedData.json();
    setfilterData(json.products);
    setitems(json.products);
    let max = [...json.products].sort((a, b) => {
      return b.price - a.price;
    });
    let price = max[0].price;
    setmaxprice(Math.ceil(price));
    setfilterprice(Math.ceil(price));
    setloader(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const toggle = () => {
    setfilter(!filter);
  };

  const ascendingPrice = () => {
    let newList = [...items].sort((a, b) => {
      return a.price - b.price;
    });
    setfilterData(newList);
  };
  const descendingPrice = () => {
    let newList = [...items].sort((a, b) => {
      return b.price - a.price;
    });
    setfilterData(newList);
  };
  const atoz = () => {
    let newList = [...items].sort((a, b) => a.title.localeCompare(b.title));
    setfilterData(newList);
  };
  const ztoa = () => {
    let newList = [...items]
      .sort((a, b) => a.title.localeCompare(b.title))
      .reverse();
    setfilterData(newList);
  };

  const change = (e) => {
    const newPrice = Math.ceil(Number(e.target.value));
    setfilterprice(newPrice);
    const newlist = items.filter((element) => element.price <= newPrice);
    setfilterData(newlist);
  };

  const changeSort = (e) => {
    setoption(e.target.value);
  };

  const modal = (element) => {
    setmodalData(element);
    setopenModal(true);
  };

  return (
    <>
      <div
        className={
          openModal
            ? "text-gray-600 body-font md:py-10 lg:px-10 xl:px-15 overflow-hidden"
            : "text-gray-600 body-font md:py-10 lg:px-10 xl:px-15"
        }
      >
        <div className="container mx-auto scroll-smooth">
          <div className="flex flex-col lg:flex-row justify-center">
            <aside className="sticky top-0 lg:top-16 flex flex-col w-full lg:w-1/5 bg-white text-black shadow-md shadow-gray-300 md:p-3 h-auto lg:h-96">
              <div className="p-3 text-2xl font-semibold flex justify-between items-center">
                <span className="ml-4 md:ml-0">Filters</span>
                {filter ? (
                  <FontAwesomeIcon
                    icon={faBars}
                    onClick={toggle}
                    className="mx-3 lg:hidden block rotate-90 text-xl duration-200"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    onClick={toggle}
                    className="mx-3 lg:hidden block text-xl duration-200"
                  />
                )}
              </div>
              <div
                className={`${
                  filter ? `flex` : `hidden`
                } lg:flex flex-col justify-center items-start py-3`}
              >
                <div className="px-10 lg:px-2">
                  <div className="mx-1">
                    <p className=" w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm">
                      Sort By
                    </p>
                    <div
                      className="mb-[0.125rem] block min-h-[1.5rem]"
                      onClick={ascendingPrice}
                    >
                      <input
                        className=""
                        type="radio"
                        name="sort"
                        onChange={changeSort}
                        id="ascendingPrice"
                        value="ascendingPrice"
                        checked={option === "ascendingPrice"}
                      />
                      <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="ascendingPrice"
                      >
                        Ascending Price &uarr;
                      </label>
                    </div>
                    <div
                      className="mb-[0.125rem] block min-h-[1.5rem]"
                      onClick={descendingPrice}
                    >
                      <input
                        className=""
                        type="radio"
                        name="sort"
                        onChange={changeSort}
                        value="descendingPrice"
                        id="descendingPrice"
                        checked={option === "descendingPrice"}
                      />
                      <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="descendingPrice"
                      >
                        Descending Price &darr;
                      </label>
                    </div>
                    <div
                      className="mb-[0.125rem] block min-h-[1.5rem]"
                      onClick={atoz}
                    >
                      <input
                        className=""
                        type="radio"
                        name="sort"
                        onChange={changeSort}
                        value="atoz"
                        id="atoz"
                        checked={option === "atoz"}
                      />
                      <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="descendingPrice"
                      >
                        A &rarr; Z
                      </label>
                    </div>
                    <div
                      className="mb-[0.125rem] block min-h-[1.5rem]"
                      onClick={ztoa}
                    >
                      <input
                        className=""
                        type="radio"
                        name="sort"
                        onChange={changeSort}
                        value="ztoa"
                        id="ztoa"
                        checked={option === "ztoa"}
                      />
                      <label
                        className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="descendingPrice"
                      >
                        Z &rarr; A
                      </label>
                    </div>
                  </div>
                </div>
                <div className="px-10 lg:px-2">
                  <div className="mx-1">
                    <p className=" w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm">
                      Selected Range : $0-${filterprice}
                      <input
                        type="range"
                        className="w-full"
                        min={0}
                        max={maxprice}
                        value={filterprice}
                        onChange={change}
                        name="price"
                      />
                      Max Price: ${maxprice}
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <section className="text-gray-600 body-font pt-5 md:pt-0 px-5 lg:p-5 md:px-5 lg:px-10 xl:px-15 w-full lg:w-4/5">
              <div className="container mx-auto">
                <div
                  className={`flex flex-wrap justify-${
                    filterData.length > 0 ? "start" : "center"
                  } -m-4`}
                >
                  {filterData.length > 0 ? (
                    filterData.map((element) => {
                      return (
                        <div
                          key={element.id}
                          className="shadow-md mx-3 md:mx-0 lg:w-1/4 md:w-1/2 my-2 rounded p-3 w-full hover:scale-105 transition ease-in duration-200 cursor-pointer"
                          onClick={() => modal(element)}
                        >
                          <div className="block relative h-48 rounded overflow-hidden">
                            <img
                            key={element.id+element.index}
                              alt=""
                              className="object-center w-full h-full block "
                              src={element.thumbnail}
                            />
                          </div>
                          <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                              {element.category.charAt(0).toUpperCase() +
                                element.category.slice(1)}
                            </h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">
                              {element.title}
                            </h2>
                            <h2 className="text-gray-900 title-font text-md font-medium">
                              {element.brand}
                            </h2>
                            <p className="mt-1">${element.price}</p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <Puff
                      height="300"
                      width="300"
                      color="#4338CA"
                      radius="100"
                      wrapperStyle={{}}
                      wrapperclassName=""
                      visible={loader}
                      ariaLabel="rings-loading"
                    />
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {openModal && (
        <Viewer
          item={modalData}
          state={setopenModal}
          setmodalData={setmodalData}
        />
      )}
    </>
  );
};

export default Category;
