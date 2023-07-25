import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Viewer = () => {
    const data=useSelector(state=>state.viewData)
    // const data = [{ id: 11, title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", price: 109, description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.", category: "electronics", image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" }]
    console.log(data);
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                    {data?.map((element)=>{
                        return <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    
                    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{element.title}</h2>
                        <div class="flex mb-4">
                            <p class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg">Description</p>
                        </div>
                        <p class="leading-relaxed mb-4">{element.description}</p>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">${element.price}</span>
                            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                    </div>
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={element.image} />
                </div>
                })}
            </div>
        </section>
    )
}

export default Viewer
