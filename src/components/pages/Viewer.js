import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';



const Viewer = ({ item, state }) => {
    const [elem, setelem] = useState({ ...item, size: "Select Size", qty: 1 });
    const dispatch=useDispatch();


   

    const add=()=>{
        dispatch(addItem(elem))
    }



    return (
        <section className="max-h-screen fixed top-12 left-2 right-2 overflow-auto md:left-32 md:right-32 z-20 origin-top rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <p className="text-lg title-font text-gray-500 tracking-widest text-right mr-5 mt-1 cursor-pointer" onClick={() => state(false)}>X</p>
            <div className="container p-5 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap items-center flex-col md:flex-row">
                    <img alt="ecommerce" className="lg:w-1/3 object-center w-full h-72 lg:h-auto" src={elem.image} />
                    <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0 mx-auto">
                        <h1 className="text-gray-500 text-lg title-font font-medium mb-1">{elem.category.charAt(0).toUpperCase() + elem.category.slice(1)}</h1>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{elem.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center justify-center">
                                <span className="text-gray-900">{elem.rating.rate}</span>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-1 w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">{elem.rating.count} Reviews</span>

                            </span>
                        </div>
                        <p className="leading-relaxed">{elem.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Quantity</span>
                                <div className='flex flex-row justify-center items-center'>
                                    <button className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded-l-lg text-base mt-4 md:mt-0" onClick={()=>{setelem({...elem,qty:elem.qty-1})}}>-
                                    </button>
                                    <input className='mx-2 w-5' min={1} value={elem.qty} onChange={(e)=>{setelem({...elem,qty:e.target.value})}}/>
                                    <button className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded-r-lg text-base mt-4 md:mt-0" onClick={()=>{setelem({...elem,qty:elem.qty+1})}}>+
                                    </button>
                                </div>


                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" value={elem.size} onChange={(e)=>{setelem({...elem,size:e.target.value})}}
                                    >

                                        <option value={elem.size}>{elem.size !== 'Select Size' ? `Selected Size: ${elem.size}` : 'Select Size'}</option>

                                        <option value='SM'>SM</option>
                                        <option value='M'>M</option>
                                        <option value='L'>L</option>
                                        <option value='XL'>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${elem.price}</span>
                            <button className={`flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded`} onClick={add} disabled={elem.qty<1 || elem.size==="Select Size"} >{elem.size==="Select Size"?'Select Size To Continue':elem.qty<1?'Select Quantity To Continue':'Add To Cart'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Viewer



