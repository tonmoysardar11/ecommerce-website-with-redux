import React from "react";

const Alert = () => {
  return (
    <div
      className=" fixed top-0 md:top-16 md:right-5 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 z-50 w-full md:w-1/4"
      role="alert"
    >
      <p className="font-bold">Success!!!</p>
      <p>Item Added To Cart.</p>
    </div>
  );
};

export default Alert;
