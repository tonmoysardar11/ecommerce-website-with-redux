import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Electronics = () => {

    const data = useSelector(state => state.item.data);
    
    const items = data.filter((element) => element.category === "women's clothing");
    const [filter, setfilter] = useState(false);
    const [filterData, setfilterData] = useState([]);
    const [maxprice, setmaxprice] = useState(0);
    const [filterprice, setfilterprice] = useState(0);
    const [option, setoption] = useState('');





    const toggle = () => {
        setfilter(!filter)
    }


    const ascendingPrice = () => {
        let newList = [...items].sort((a, b) => { return a.price - b.price })
        setfilterData(newList);
    }
    const descendingPrice = () => {
        let newList = [...items].sort((a, b) => { return b.price - a.price })
        setfilterData(newList);
    }






    items.forEach(element => {
        if (element.price > maxprice) {
            let price = element.price
            setmaxprice(Math.ceil(price));
            setfilterprice(Math.ceil(price))
        }

    });
    useEffect(() => {
        setfilterData(items);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const change = (e) => {
        const newPrice = Math.ceil(Number(e.target.value));
        setfilterprice(newPrice);
        const newlist = items.filter((element) => element.price <= newPrice);
        setfilterData(newlist);

    }

    const changeSort = (e) => {
        setoption(e.target.value)
        
    }

    return (
        <div className='text-gray-600 body-font md:pt-24 md:flex md:px-5 lg:px-20 '>




            <aside className="sticky top-0 z-40 md:top-16 flex flex-col w-full md:w-1/5 bg-white text-black shadow-lg shadow-black px-3 h-96">

                <div className=" ml-3 text-2xl font-semibold cursor-pointer flex justify-between items-center">Filters
                    {filter ? <FontAwesomeIcon icon={faBars} onClick={toggle} className='mx-3 lg:hidden block rotate-90 text-xl duration-200' /> : <FontAwesomeIcon icon={faBars} onClick={toggle} className='mx-3 lg:hidden block text-xl duration-200' />}
                </div>

                <div className={`${filter ? `flex` : `hidden`} md:flex flex-col justify-center items-center mt-6 py-8`}>

                    <div className="w-full">

                        <div className="mx-1">
                            <p className=" w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm" >Sort By</p>
                            <div className="mb-[0.125rem] block min-h-[1.5rem]" onClick={ascendingPrice}>
                                <input
                                    className=""
                                    type="radio"
                                    name="sort"
                                    onChange={changeSort}

                                    id="ascendingPrice"
                                    value="ascendingPrice" 
                                    checked={option==='ascendingPrice'}/>
                                <label
                                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="ascendingPrice" >
                                    Ascending Price &uarr;
                                </label>
                            </div>
                            <div className="mb-[0.125rem] block min-h-[1.5rem]" onClick={descendingPrice}>
                                <input
                                    className=""
                                    type="radio"
                                    name="sort"
                                    onChange={changeSort}
                                    value="descendingPrice"

                                    id="descendingPrice"
                                    checked={option==='descendingPrice'}
                                />
                                <label
                                    className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="descendingPrice" >
                                    Descending Price &darr;
                                </label>
                            </div>

                        </div>

                    </div>
                    <div className="w-full">

                        <div className="mx-1">
                            <p className=" w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm" >
                                Selected Range : 0-{filterprice}
                                <input type="range" className='w-full' min={0} max={maxprice} value={filterprice} onChange={change} name='price' />
                                Max Price: {maxprice}
                            </p>

                        </div>

                    </div>
                </div>
            </aside>

            <section className="text-gray-600 body-font p-5 md:px-5 lg:px-10 xl:px-15 w-full md:w-4/5">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-start -m-4">
                        {filterData.length > 0 ? filterData.map((element) => {
                            return <div key={element.id} className="shadow-md lg:w-1/4 md:w-1/2 my-2 rounded p-3 w-full hover:scale-110 transition ease-in duration-200 cursor-pointer">
                                <Link className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-center w-full h-full block " src={element.image} />
                                </Link>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{element.category.charAt(0).toUpperCase() + element.category.slice(1)}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{element.title}</h2>
                                    <p className="mt-1">${element.price}</p>
                                </div>
                            </div>
                        }) : "No Items Found"}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Electronics