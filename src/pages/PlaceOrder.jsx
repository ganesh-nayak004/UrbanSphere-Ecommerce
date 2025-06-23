import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import Carttotal from '../components/Carttotal'
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {

  const [method, setmethod] = useState('cod');
  const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3v  ">
          <Title text1={'DELIVERY'} text2 ={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
            <input
            className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
            type="text" placeholder='First name'/>
            <input
            className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
            type="text" placeholder='Last name'/>
        </div>
        <input
          className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
          type="email" placeholder='Email address'/>
        <input
          className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
          type="text" placeholder='Street'/>
        <div className="flex gap-3">
          <input
          className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
          type="text" placeholder='City'/>
           <input
          className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
          type="text" placeholder='State'/>
        </div>
        <div className="flex gap-3">
          <input
          className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
          type="number" placeholder='ZipCode'/>
           <input
          className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
          type="text" placeholder='Country'/>
        </div>
        <input
          className='border border-gray-300 rounded py-1.5 px-3.5  w-full '
          type="number" placeholder='Mob.No.'/>

      </div>

      {/* right side  */}
      <div className="mt-8">
        <div className="mt-8 min-w-[80vh]">
            <Carttotal/>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'MODE'} />
            {/* payment method selection  */}
          <div className="flex flex-col lg:flex-row gap-3">

            <div
            onClick={()=>setmethod('stripe')}
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe'?'bg-green-700 ':''}`}></p>
              <img className='h-5 mx-4' 
              src ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png"/>
            </div>

            <div
            onClick={()=>setmethod('razorpay')}
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay'?'bg-green-700 ':''}`}></p>
              <img className='h-5 mx-4' 
              src ="https://upload.wikimedia.org/wikipedia/commons/7/77/Razorpay_logo.png"/>
            </div>

            <div
            onClick={()=>setmethod('cod')}
            className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod'?'bg-green-700 ':''}`}></p>
              <p className="text-gray-800 text-sm font-medium mx-4 "> CASH ON DELIVERY</p>
              {/* <img className='h-5 mx-4' 
              src ="https://static.vecteezy.com/system/resources/previews/030/740/487/non_2x/cash-on-delivery-logo-free-png.png"/> */}
            </div>
          </div>
        </div>
        
        <div className="w-full text-end mt-8">
        <button 
            onClick={()=>navigate('/orders')}
            className=' bg-green-700 text-white font-bold text-sm my-8 px-8 py-3 rounded-sm border-3 hover:bg-white hover:text-green-700 hover:border-green-700 hover:transition ease-in'>PLACE ORDER</button>
        </div>

      </div>
      
    </div>
  )
}

export default PlaceOrder
