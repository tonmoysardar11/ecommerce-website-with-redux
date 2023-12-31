import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ imgArr }) => {
  const [img, setimg] = useState(0);

  const prev = () => {
    setimg(img === 0 ? imgArr.length - 1 : img - 1);
  };
  const next = () => {
    setimg(img === imgArr.length - 1 ? 0 : img + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="relative overflow-hidden">
      <div
        className="w-full h-[50vh] md:h-[100vh] flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${img * 100}%)` }}
      >
        {imgArr.map((element, index) => (
          <img key={index} src={element} className="w-[100vw]" alt="" />
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
      <div className="absolute bottom-12 right-0 left-0 flex justify-center items-center">
        {imgArr.map((_, i) => (
          <div
            key={i}
            className={`transition-all bg-gray-100 mx-3 w-2 h-2 rounded-full ${
              img === i ? "p-2" : "bg-opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
