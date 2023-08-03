import React from "react";
import ItemList from "./ItemList";
import Carousel from "./Carousel";

const Home = () => {
  
  
  return (
    <div className="lg:pt-12">
      <Carousel/>
      <ItemList />
    </div>
  );
};

export default Home;
