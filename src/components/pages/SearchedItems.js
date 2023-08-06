import React, { useState, useEffect } from "react";
import Viewer from "./Viewer";

const SearchedItems = ({ find, focus, sethover, setfocus }) => {
  const [data, setdata] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [modalData, setmodalData] = useState({});

  const load = async () => {
    let fetchedData = await fetch("https://dummyjson.com/products");
    let json = await fetchedData.json();
    setdata(data.concat(json.products));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modal = (element) => {
    setmodalData(element);
    setopenModal(true);
    setfocus(false);
  };

  return (
    <>
      {focus && (
        <div
          className="absolute top-14 left-5 md:left-96 z-30 mt-2 w-90 md:w-[30vw] origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          onMouseOver={() => sethover(true)}
          onMouseOut={() => sethover(false)}
        >
          <div className="py-1" role="none">
            {data.filter((element) =>
              element.title
                .toString()
                .toLowerCase()
                .includes(find.toString().toLowerCase())
            ).length > 0 ? (
              data
                .filter((element) =>
                  element.title
                    .toString()
                    .toLowerCase()
                    .includes(find.toString().toLowerCase())
                )
                .map((element) => {
                  return (
                    <div
                      key={element.id}
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300 cursor-pointer flex justify-between items-center"
                      onClick={() => modal(element)}
                    >
                      <p>{element.title}</p>
                      <img src={element.thumbnail} className="w-10" alt="" />
                    </div>
                  );
                })
            ) : (
              <p className="text-gray-700 block px-4 py-2 text-sm ">
                No Items Found
              </p>
            )}
          </div>
        </div>
      )}
      {openModal && <Viewer item={modalData} state={setopenModal} />}
    </>
  );
};

export default SearchedItems;
