import React from "react";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import mens from '../../media/mens.webp'
import womens from '../../media/womens.webp'
import elec from '../../media/elec.webp'
import ess from '../../media/ess.webp'
import fur from '../../media/fur.webp'


const Home = () => {
  
  const imgArr = [mens, womens, elec, ess,fur];
  return (
    <div className="lg:pt-12">
      <Carousel imgArr={imgArr}/>
      <ItemList />
    </div>
  );
};

export default Home;
