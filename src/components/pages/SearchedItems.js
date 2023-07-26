import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const SearchedItems = ({ find }) => {



    const [data, setdata] = useState([]);



    const load = async () => {
        let fetchedData = await fetch('https://fakestoreapi.com/products');
        let json = await fetchedData.json()
        setdata(data.concat(json))


    }


    useEffect(() => {
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const viewItem = (element) => {

    }
    return (
        <div class="absolute top-14 left-2 md:left-72 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                {data.length > 0 ? data.filter((element) => element.title.toString().toLowerCase().includes(find.toString().toLowerCase())).map((element) => {
                    return <p key={element.id} class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-500 cursor-pointer">{element.title}</p>

                }) : <p class="text-gray-700 block px-4 py-2 text-sm ">No Items Found</p>}

            </div>
        </div>




    )
}

export default SearchedItems
