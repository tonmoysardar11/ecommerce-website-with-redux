import React from 'react'


const Viewer = ({ item, state }) => {
    return (
        <section class="absolute top-14 left-2 right-2 md:left-32 md:right-32 z-10 origin-top rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <p class="text-lg title-font text-gray-500 tracking-widest text-right mr-5 mt-1 cursor-pointer" onClick={() => state(false)}>X</p>
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/3 object-center w-full h-full block" src={item.image} />
                    <div class="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0 mx-auto">
                        <h1 class="text-gray-500 text-lg title-font font-medium mb-1">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h1>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
                        <div class="flex mb-4">
                            <span class="flex items-center justify-center">
                                <span class="text-gray-900">{item.rating.rate}</span>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-1 w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span class="text-gray-600 ml-3">{item.rating.count} Reviews</span>
                            </span>
                        </div>
                        <p class="leading-relaxed">{item.description}</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div class="flex">
                                <span class="mr-3">Color</span>
                                <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div class="flex ml-6 items-center">
                                <span class="mr-3">Size</span>
                                <div class="relative">
                                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">${item.price}</span>
                            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Viewer



