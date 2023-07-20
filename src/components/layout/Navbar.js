import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faBars, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [menu, setmenu] = useState(false);
    const toggle = () => {
        setmenu(!menu)
    }

    const itemCount = 0;
    return (
        <header className="md:fixed w-full z-50 text-gray-100 bg-indigo-700 body-font md:px-5 lg:px-10 xl:px-15">
            <div className="w-full mx-auto flex flex-wrap px-1 md:px-5 py-2 justify-between items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 md:mb-0" onClick={()=>setmenu(false)}>
                    <span className="ml-3 text-2xl text-gray-100 font-semibold cursor-pointer">myCart</span>
                </Link>
                <div className="w-1/2 md:w-1/3 flex justify-center items-center">
                    <div className="w-full md:w-4/5 flex justify-center items-center rounded border border-gray-300">
                        <input type="text" name="hero-field" className="w-full bg-gray-300 bg-opacity-30 focus:ring-2  focus:bg-white focus:border-gray-500 text-base outline-none text-black py-1 px-3 leading-6 transition-colors duration-200 ease-in-out placeholder:text-black" placeholder='Search' onClick={()=>setmenu(false)}/>
                        <div className='px-2 text-xl md:text-2xl cursor-pointer hover:bg-white hover:text-indigo-700'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
                {menu ? <FontAwesomeIcon icon={faBars} onClick={toggle} className=' mx-2 lg:hidden block rotate-90 text-xl duration-200' /> : <FontAwesomeIcon icon={faBars} onClick={toggle} className=' mx-2 lg:hidden block text-xl duration-200' />}

                <div className={` ${menu ? `flex` : `hidden`} flex-col lg:flex-row justify-center items-center lg:flex py-4 lg:py-0 w-full lg:w-1/2`}>

                    <nav className="flex flex-col lg:flex-row items-center text-base justify-center">
                        <a className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer" onClick={()=>setmenu(false)}>First Link</a>
                        <a className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer" onClick={()=>setmenu(false)}>Second Link</a>
                        <a className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer" onClick={()=>setmenu(false)}>Third Link</a>
                        <a className="py-2 lg:py-0 mr-5 hover:text-gray-300 cursor-pointer" onClick={()=>setmenu(false)}>Fourth Link</a>
                    </nav>
                    <Link to='/cart' onClick={()=>setmenu(false)}>
                        <button className="py-2 lg:py-0 inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0"> Cart {itemCount>0?<FontAwesomeIcon icon={faCartArrowDown} className='m-1 text-xl cursor-pointer'/>:<FontAwesomeIcon icon={faCartShopping} className='m-1 text-xl cursor-pointer' />}
                            <p className='mx-1 px-2 flex justify-center items-center text-black bg-yellow-500 rounded-full'>{itemCount} </p>
                        </button>
                    </Link>
                </div>



            </div>
        </header>
    )
}

export default Navbar
