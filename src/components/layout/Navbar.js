import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [menu, setmenu] = useState(false);
    const toggle = () => {
        setmenu(!menu)
    }

    const itemCount = 10;
    return (
        <header class="text-gray-100 bg-purple-900 body-font md:px-5 lg:px-10 xl:px-15">
            <div class="w-full mx-auto flex flex-wrap px-1 md:px-5 py-2 justify-between items-center">
                <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
                    <span class="ml-3 text-2xl text-gray-100 font-semibold cursor-pointer">myCart</span>
                </a>
                <div class="w-1/2 md:w-1/3 flex justify-center items-center">
                    <div class="w-full flex justify-center items-center mx-2">
                        <input type="text" name="hero-field" class=" w-4/5 bg-gray-300 bg-opacity-30 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:border-yellow-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-black" placeholder='Search' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-1 text-xl md:text-2xl cursor-pointer' />
                    </div>
                </div>
                {menu ? <FontAwesomeIcon icon={faBars} onClick={toggle} className=' mx-2 md:hidden block rotate-90 text-xl duration-200' /> : <FontAwesomeIcon icon={faBars} onClick={toggle} className=' mx-2 md:hidden block text-xl duration-200' />}

                <div className={` ${menu ? `flex` : `hidden`} flex-col lg:flex-row justify-center items-center md:flex py-4 lg:py-0 w-full lg:w-1/2`}>

                    <nav class="flex flex-col lg:flex-row items-center text-base justify-center">
                        <a class="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer">First Link</a>
                        <a class="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer">Second Link</a>
                        <a class="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer">Third Link</a>
                        <a class="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer">Fourth Link</a>
                    </nav>
                    <button class="py-2 lg:py-0 inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0"> Cart <FontAwesomeIcon icon={faCartShopping} className='m-1 text-xl cursor-pointer' />
                        <p className='mx-1 px-2 flex justify-center items-center text-black bg-yellow-500 rounded-full'>{itemCount} </p>
                    </button>
                </div>



            </div>
        </header>
    )
}

export default Navbar
