import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';


const SearchedItems = ({find}) => {

    

    const [data, setdata] = useState([]);
    
    

    const load=async()=> {    
        let fetchedData= await fetch('https://fakestoreapi.com/products');
        let json=await fetchedData.json()
        setdata(data.concat(json))
    

    }

    
    useEffect(() => {
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const viewItem = (element) => {

    }
  return (
    <section className="absolute top-24 bg-gray-100 z-50 text-gray-600 body-font px-5 md:px-5 lg:px-10 xl:px-15">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center -m-4">
                
                    { data.length>0?data.filter((element)=>element.title.toString().toLowerCase().includes(find.toString().toLowerCase())).map((element) => {
                            return <div key={element.id} className="shadow-md lg:w-1/5 md:w-1/2 m-2 rounded p-3 w-full hover:scale-110 transition ease-in duration-200 cursor-pointer">
                                <Link className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-center w-full h-full block " src={element.image} />
                                </Link>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{element.category.charAt(0).toUpperCase() + element.category.slice(1)}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{element.title}</h2>
                                    <p className="mt-1">${element.price}</p>
                                </div>
                                <Link className="text-indigo-500 flex items-center md:mb-2 lg:mb-0 text-xl cursor-pointer" onClick={() => viewItem(element)} >View
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                            </div>
                        }):"No Items Found"}
                </div>
            </div>
        </section>
  )
}

export default SearchedItems
