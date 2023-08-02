import React, { useState } from 'react'
import ItemList from './ItemList'
import elc from '../../media/electronics.webp'
import jw from '../../media/jewelery.webp'
import mens from '../../media/mens.webp'
import wo from '../../media/womens.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'



const Home = () => {

  const imgArr = [mens, wo, elc, jw]
  const [img, setimg] = useState(0);

  const prev = () => {
    setimg(img === 0 ? imgArr.length - 1 : img - 1)
  }
  const next = () => {
    setimg(img === imgArr.length - 1 ? 0 : img + 1)
  }

  return (
    <div className='md:pt-12'>

      <div className='relative overflow-hidden'>
        <div className='w-full h-[50vh] md:h-[70vh] flex transition-transform ease-in duration-600' style={{transform:`translateX(-${img*100}%)`}}>
        {imgArr.map((element, index) => {
          return <div key={index}>
            <img src={element} alt="" />
          </div>
        })}
        </div>
        <div className='absolute inset-0 flex justify-between items-center mx-5'>
          <FontAwesomeIcon onClick={prev} icon={faLessThan} className='p-3 bg-gray-200 bg-opacity-20 hover:bg-opacity-40 cursor-pointer' />
          <FontAwesomeIcon onClick={next} icon={faGreaterThan} className='p-3 bg-gray-200 bg-opacity-20 hover:bg-opacity-40 cursor-pointer' />
        </div>

      </div>

      <ItemList />

    </div>
  )
}

export default Home
