import React, { useState, useEffect } from "react";
import { Puff } from "react-loader-spinner";
import Viewer from "./Viewer";
import InfiniteScroll from "react-infinite-scroll-component";

const ItemList = () => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [modalData, setmodalData] = useState({});
  const [limit, setlimit] = useState(1);
  const [totallength, settotallength] = useState(0);

  const load = async () => {
    setloader(true);
    const fetchedData = await fetch(
      `https://dummyjson.com/products?limit=${4 * limit}`
    );
    const json = await fetchedData.json();
    setloader(false);
    setdata(json.products);
    setlimit(() => {
      return limit + 1;
    });
    settotallength(json.total);
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
        <div className="container mx-auto ">
          <p className="text-center text-3xl">All Products</p>
          <InfiniteScroll
            dataLength={data.length}
            next={load}
            hasMore={!(data.length === totallength)}
            loader={
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
            }
            className={
              loader ? "flex justify-center flex-col items-center" : ""
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="flex flex-wrap justify-center">
              {data.map((element) => {
                return (
                  <div
                    key={element.id}
                    className="shadow-md lg:w-1/5 md:w-1/2 m-2 rounded p-3 w-full md:hover:scale-110 transition ease-in duration-200"
                    onClick={() => modal(element)}
                  >
                    <div className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt={element.title}
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
                      <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
                        {element.brand.charAt(0).toUpperCase() +
                          element.brand.slice(1)}
                      </h3>
                      <div>
                        <span className="flex justify-start items-center">
                          <p className="mt-1 line-through text-gray-700">
                            ${element.price}
                          </p>
                          <p className="mt-1 mx-2 text-gray-900">
                            $
                            {(
                              element.price -
                              (element.price * element.discountPercentage) / 100
                            ).toFixed(2)}
                          </p>
                        </span>
                        <p className="mt-1 text-green-700">
                          {element.discountPercentage}% discount
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
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
