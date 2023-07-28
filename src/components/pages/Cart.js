import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearCart, removeItem } from '../../store/slices/cartSlice';


const Cart = () => {
  const [promo, setpromo] = useState('');
  const [discount, setdiscount] = useState(false);
  const change=(e)=>{
    setpromo(e.target.value)
  }


const dispatch=useDispatch()



  const list = useSelector((state) => { return state.cart })
  const TotalQty=list.length>0?list.reduce((a,b)=> a+b.qty,0):0;
  const TotalPrice=list.length>0?list.reduce((a,b)=> a+b.qty*b.price,0):0;
  const activepromo='TONMOY11';

  const check=()=>{
    if(promo===activepromo){
      setdiscount(true)
    }
  }
  

  

  return (
  <div class="w-full text-gray-600 body-font lg:pt-16 md:flex md:px-5 lg:px-20">
    <div class="flex shadow-md my-10 w-full flex-col md:flex-row">
      {list.length>0?<>
      <div class="w-full md:w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{TotalQty} Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {list?.map((element)=>{
          return <div key={element.id} class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src={element.image} alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{element.title}</span>
              <span class="text-gray-500 text-sm">Size: {element.size}</span>
              <button class="bg-red-500 hover:bg-red-600 p-2 w-32 text-sm text-white uppercase" onClick={()=>dispatch(removeItem(element.id))}>Remove</button>
            </div>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">{element.qty}</span>
          <span class="text-center w-1/5 font-semibold text-sm">${element.price}</span>
          <span class="text-center w-1/5 font-semibold text-sm">${element.qty*element.price}</span>
        </div>}
        )}

        <Link to="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm  my-3 text-white uppercase" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </div>

      <div id="summary" class="w-full md:w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items {TotalQty}</span>
          <span class="font-semibold text-sm">${TotalPrice}</span>
        </div>
          <span className='font-semibold text-green-500 text-xs'>{TotalPrice>200?'Congratulations! You have unlocked a discount!!':'Flat $11 discount on a Cart Value over $200 '}</span>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" value={promo} onChange={change}/>
          <p className='font-semibold text-green-500 text-xs'>{!discount?`Apply '${activepromo}' to get flat $11 discount on a Cart Value over $200 `:''}</p>
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase" onClick={check} disabled={TotalPrice<=200}>Apply</button>
        <p className={`${TotalPrice>200 && promo!==activepromo?'font-semibold text-red-500 text-xs':'font-semibold text-green-500 text-xs'}`}>{!discount?'': promo!==activepromo ?'Invalid Promo':'Coupon Applied' }</p>
        <div class="flex font-semibold justify-between py-3 text-sm uppercase">
            <span>Discount</span>
            <span>${discount?11:0}</span>
          </div>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${TotalPrice-(discount?11:0)}</span>
          </div>
          <button class="bg-indigo-700 font-semibold hover:bg-indigo-500 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>
      </>:<div className='w-full bg-white px-10 py-10 text-center'>Cart is Empty</div>
      }

    </div>
  </div>


  )
}

export default Cart
