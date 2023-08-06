import React from "react";
import frag from "../../media/category list/fragrances.webp";
import fur from "../../media/category list/furniture.webp";
import gro from "../../media/category list/groceries.webp";
import hdcor from "../../media/category list/home-decoration.webp";
import laptop from "../../media/category list/laptops.webp";
import mshirt from "../../media/category list/mens-shirt.webp";
import mshoe from "../../media/category list/mens-shoes.webp";
import mwatch from "../../media/category list/mens-watches.webp";
import sk from "../../media/category list/skincare.webp";
import phone from "../../media/category list/smartphones.webp";
import sg from "../../media/category list/sunglasses.webp";
import top from "../../media/category list/tops.webp";
import wbags from "../../media/category list/womens-bags.webp";
import wdress from "../../media/category list/womens-dresses.webp";
import wjewel from "../../media/category list/womens-jewellery.webp";
import wshoe from "../../media/category list/womens-shoes.webp";
import wwatches from "../../media/category list/womens-watches.webp";
import light from "../../media/category list/lighting.webp";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto my-5">
        <div className="flex flex-wrap justify-center md:grid md:grid-rows-2 md:grid-cols-9">
          <Link to="/smartphones" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-1/9 sm:w-24">
            <div>
              <img src={phone} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Smartphones
              </h6>
            </div>
          </Link>
          <Link to="/laptops" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={laptop} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Laptops
              </h6>
            </div>
          </Link>
          <Link to="/fragrances" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={frag} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
              Fragrances
              </h6>
            </div>
          </Link>
          <Link to="/skincare" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={sk} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Skin Care
              </h6>
            </div>
          </Link>
          <Link to="/groceries" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={gro} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Groceries
              </h6>
            </div>
          </Link>
          <Link to="/home-decoration" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={hdcor} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Home Decor
              </h6>
            </div>
          </Link>
          <Link to="/furniture" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={fur} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Furniture
              </h6>
            </div>
          </Link>
          <Link to="/tops" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={top} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">Tops</h6>
            </div>
          </Link>
          <Link to="/womens-dresses" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={wdress} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Womens Dresses
              </h6>
            </div>
          </Link>
          <Link to="/womens-shoes" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={wshoe} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Womens Shoes
              </h6>
            </div>
          </Link>
          <Link to="/mens-shirts" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={mshirt} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Mens Shirts
              </h6>
            </div>
          </Link>
          <Link to="/mens-shoes" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={mshoe} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Mens Shoes
              </h6>
            </div>
          </Link>
          <Link to="/mens-watches" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={mwatch} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Mens Watch
              </h6>
            </div>
          </Link>
          <Link to="/womens-watches" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={wwatches} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Womens Watches
              </h6>
            </div>
          </Link>
          <Link to="/womens-bags" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={wbags} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Womens Bags
              </h6>
            </div>
          </Link>
          <Link to="/womens-jewellery" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={wjewel} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Womens Jewellery
              </h6>
            </div>
          </Link>
          <Link to="/sunglasses" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={sg} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Sunglasses
              </h6>
            </div>
          </Link>
          <Link to="/lighting" className="mx-auto p-1 hover:shadow-md hover:shadow-black flex flex-col justify-center items-center w-28 sm:w-24">
            <div >
              <img src={light} alt="" className="w-full h-28 sm:h-24 object-contain" />
              <h6 className="title-font font-medium text-md text-gray-900 text-center">
                Lighting
              </h6>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
