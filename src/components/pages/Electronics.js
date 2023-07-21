import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactSlider from 'react-slider';


const Electronics = () => {
    const [filteredPrices, setfilteredPrices] = useState();
    const change = (value) => {
        setfilteredPrices(value)
    }


    const data = useSelector(state => state.item.data);
    const items = data.filter((element) => element.category === 'electronics')

    return (
        <>
            <header class="text-gray-600 bg-gray-300 px-24 body-font">
                <div class="w-full mx-auto flex flex-wrap px-1 md:px-5 py-2 justify-between items-center">
                    <ReactSlider
                        min={0}
                        max={items.sort((a, b) => { return b.price - a.price })[0].price}
                        step={1}
                        value={filteredPrices}
                        onChange={change}
                    />
                    <span> Max Price:{items.sort((a, b) => { return b.price - a.price })[0].price} </span>

                </div>
            </header>

            <section className="text-gray-600 body-font p-5 md:px-5 lg:px-10 xl:px-15">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center -m-4">
                        {items?.map((element) => {
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
        </>
    )
}

export default Electronics
