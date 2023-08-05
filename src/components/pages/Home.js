import React from "react";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import elc from "../../media/electronics.webp";
import jw from "../../media/jewelery.webp";
import mens from "../../media/mens.webp";
import wo from "../../media/womens.webp";

const Home = () => {
  
  const imgArr = [mens, wo, elc, jw];
  return (
    <div className="lg:pt-12">
      <Carousel imgArr={imgArr}/>
      <ItemList />
    </div>
  );
};

export default Home;
