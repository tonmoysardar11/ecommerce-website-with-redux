import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';




const ItemList = () => {
    const [data, setdata] = useState([]);
    const [loader, setloader] = useState(true);

    const load=async()=> {
        
        let fetchedData= await fetch('https://fakestoreapi.com/products');
        let json=await fetchedData.json()
        setloader(false)
        setdata(data.concat(json))
    

    }

    
    useEffect(() => {
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    
    return (
        <section className="text-gray-600 body-font py-5 px-5 md:px-5 lg:px-10 xl:px-15">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center -m-4">
                <Puff
                        height="300"
                        width="300"
                        color="#4338CA"
                        radius="100"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={loader}
                        ariaLabel="rings-loading" />
                    { data.map((element) => {
                            return <div key={element.id} className="shadow-md lg:w-1/5 md:w-1/2 m-2 rounded p-3 w-full hover:scale-110 transition ease-in duration-200 cursor-pointer">
                                <Link className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-center w-full h-full block " src={element.image} />
                                </Link>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{element.category.charAt(0).toUpperCase() + element.category.slice(1)}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{element.title}</h2>
                                    <p className="mt-1">${element.price}</p>
                                </div>
                            </div>
                        })}
                </div>
            </div>
        </section>
    )
}

export default ItemList
