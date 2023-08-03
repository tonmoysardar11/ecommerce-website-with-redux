import React, { useState, useEffect } from "react";
import { Puff } from "react-loader-spinner";
import Viewer from "./Viewer";

const ItemList = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const [openModal, setopenModal] = useState(false);
  const [modalData, setmodalData] = useState({});

  const load = async () => {
    let fetchedData = await fetch("https://fakestoreapi.com/products");
    let json = await fetchedData.json();
    setloader(false);
    setdata(data.concat(json));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modal = (element) => {
    setmodalData(element);
    setopenModal(true);
  };

  return (
    <>
      <section
        className={
          openModal
            ? "blur-xl text-gray-600 body-font py-5 px-7 lg:px-10 xl:px-15 lg:pt-16"
            : "text-gray-600 body-font py-5  px-7 lg:px-10 xl:px-15 lg:pt-16"
        }
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
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
            {data.map((element) => {
              return (
                <div
                  key={element.id}
                  className="shadow-md lg:w-1/5 md:w-1/2 m-2 rounded p-3 w-full md:hover:scale-110 transition ease-in duration-200"
                >
                  <div className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-center w-full h-full block "
                      src={element.image}
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
                    <p className="mt-1">${element.price}</p>
                  </div>
                  <button
                    className="text-indigo-500 flex items-center md:mb-2 lg:mb-0 text-xl cursor-pointer"
                    onClick={() => modal(element)}
                  >
                    View
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
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

export default ItemList;
