import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearCart, removeItem } from '../../store/slices/cartSlice';


const Cart = () => {
  const [promo, setpromo] = useState('');
  const [discount, setdiscount] = useState(false);
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [mobile, setmobile] = useState('');
  const [placed, setplaced] = useState(false);
  const change = (e) => {
    setpromo(e.target.value)
  }


  const dispatch = useDispatch()



  const list = useSelector((state) => { return state.cart })
  const TotalQty = list.length > 0 ? list.reduce((a, b) => a + b.qty, 0) : 0;
  const TotalPrice = list.length > 0 ? list.reduce((a, b) => a + b.qty * b.price, 0) : 0;
  const activepromo = 'TONMOY11';

  const check = () => {
    if (promo === activepromo) {
      setdiscount(true)
    }
  }




  return (
    <>
      {!placed ? <>
        {list.length > 0 ? <div className="w-full text-gray-600 body-font lg:pt-16 md:flex md:px-5 lg:px-20">
          <div className="flex shadow-md my-10 w-full flex-col md:flex-row">
            <div className="w-full md:w-2/4 bg-white px-3 md:px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{TotalQty} Items</h2>
              </div>
              <div className="flex mt-10 mb-5 w-full">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/5 md:w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center hidden md:block">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
              </div>
              {list?.map((element) => {
                return <div key={element.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex items-center w-3/5 md:w-2/5 ">
                    <div className="w-2/5 md:w-20">
                      <img className="h-10 md:h-24" src={element.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{element.title}</span>
                      <span className="text-gray-500 text-sm">Size: {element.size}</span>
                      <button className="bg-red-500 hover:bg-red-600 p-2 w-32 text-sm text-white uppercase" onClick={() => dispatch(removeItem(element.id))}>Remove</button>
                    </div>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">{element.qty}</span>
                  <span className="text-center w-1/5 font-semibold text-sm hidden md:block">${element.price}</span>
                  <span className="text-center w-1/5 font-semibold text-sm">${element.qty * element.price}</span>
                </div>
              }
              )}

              <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">

                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Continue Shopping
              </Link>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm  my-3 text-white uppercase" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>

            <div id="summary" className="w-full md:w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items {TotalQty}</span>
                <span className="font-semibold text-sm">${TotalPrice}</span>
              </div>
              <span className='font-semibold text-green-500 text-xs'>{TotalPrice > 200 ? 'Congratulations! You have unlocked a discount!!' : 'Flat $11 discount on a Cart Value over $200 '}</span>
              <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" value={promo} onChange={change} />
                <p className='font-semibold text-green-500 text-xs'>{!discount ? `Apply '${activepromo}' to get flat $11 discount on a Cart Value over $200 ` : ''}</p>
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={check} disabled={TotalPrice <= 200}>Apply</button>
              <p className={`${TotalPrice > 200 && promo !== activepromo ? 'font-semibold text-red-500 text-xs' : 'font-semibold text-green-500 text-xs'}`}>{!discount ? '' : promo !== activepromo ? 'Invalid Promo' : 'Coupon Applied'}</p>
              <div className="flex font-semibold justify-between py-3 text-sm uppercase">
                <span>Discount</span>
                <span>${discount ? 11 : 0}</span>
              </div>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${TotalPrice - (discount ? 11 : 0)}</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-8 py-10">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Enter Delivery Details</h2>
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} minLength={3} onChange={(e) => setname(e.target.value)} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                <input type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={address} minLength={6} onChange={(e) => setaddress(e.target.value)} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="contact" className="leading-7 text-sm text-gray-600">Mobile No</label>
                <input type="tel" id="contact" name="contect" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" maxLength={10} value={mobile} onChange={(e) => setmobile(e.target.value)} />
              </div>
              <button className="bg-indigo-700 font-semibold hover:bg-indigo-500 py-3 text-sm text-white uppercase w-full disabled:opacity-50" onClick={()=>setplaced(true)} disabled={name<3 || address<6 || mobile<10}>{name<3 || address<6 || mobile<10?'Enter Details To Place Order':'Place Order' }</button>
            </div>
          </div>
        </div >
          : <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <svg
                className="mx-auto w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21V10l5-7 5 7v11M3 21h18"
                />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">Your Cart is Empty</h2>
              <p className="text-gray-600 mt-2">Start shopping and add items to your cart!</p>
              <Link to='/'> <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded mt-4">
                Shop Now
              </button>
              </Link>
            </div>
          </div>
        }
      </> : <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
      <div class="mt-3 text-center">
		<div
			class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
		>
			<svg
				class="h-6 w-6 text-green-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path>
			</svg>
		</div>
		<h3 class="text-lg leading-6 font-medium text-gray-900">Order Placed!</h3>
		<div class="mt-2 px-7 py-3">
			<p class="text-sm text-gray-500">
				Thanks for choosing myCart
			</p>
		</div>
		<div class="items-center px-4 py-3">
      <Link to='/'>
			<button
				id="ok-btn"
				class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
			>
				Return to Home
			</button>
      </Link>
		</div>
	</div>
      </div>}
    </>


  )
}

export default Cart
