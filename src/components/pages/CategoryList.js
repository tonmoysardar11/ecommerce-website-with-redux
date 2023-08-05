import React,{useState,useEffect} from "react";

const CategoryList = () => {
  const [list, setlist] = useState([]);
  const load=async ()=>{
    const fetched= await fetch('https://dummyjson.com/products/categories')
    const data=await fetched.json();
    setlist(data)
  }


  useEffect(() => {
    load()
  }, []);






  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">
          {list.map((element,index)=>{
            return <div key={index} class="p-4 sm:w-1/4 w-1/2 shadow-lg shadow-black">
              <img src={`https://source.unsplash.com/random/100x100/?${element}`} alt="" />
            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">{element}
            </h2>
          </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
