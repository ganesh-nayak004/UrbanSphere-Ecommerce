import React, { useContext, useState } from 'react'
import { Form } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Login = () => {
  const [currentstate, setcurrentstate] = useState('Signup');
  const {navigate} = useContext(ShopContext)

  const onsubmithandler=(e)=>{
    e.preventDefault();
  }

  return (
    <form onSubmit={onsubmithandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 mb-10'>
      <div className="inline-flex items-center gap-2  mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentstate}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'></hr>
      </div>
      {currentstate === 'Login'?'':<input type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' required />}
      <input type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer underline  text-red-800 '>Forgot Your Password ?</p>
        {
          currentstate==='Login'
          ? <p onClick={()=>setcurrentstate('Signup')} className='cursor-pointer text-red-800 underline'>Create Account</p>
          : <p onClick={()=>setcurrentstate('Login')} className='cursor-pointer  text-red-800 underline'>Login Here</p>
        }
      </div>

      <button onClick={()=>navigate('/')} className=' bg-green-700 text-white font-bold text-md my-8 px-8 py-3 rounded-sm border-3 hover:bg-white hover:text-green-700 hover:border-green-700 hover:transition ease-in'>{currentstate === 'Login' ? 'Sign In' : 'Sign Up'}</button>


    </form>
  )
}

export default Login
