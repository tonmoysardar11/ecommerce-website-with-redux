import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
  const list=useSelector((state)=>{return state.cart})
  return (
    <div className='md:pt-12'>
      {list.map((element,index)=>{
        return <p key={index}>{element} </p>
      })}
    </div>
  )
}

export default Cart
