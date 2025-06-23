import React from 'react'
import { Form } from 'react-router-dom'

const NewsLetterBox = () => {

    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% OFF</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, sunt.</p>

        <form
        onSubmit={onSubmitHandler} 
        className='flex w-full sm:w-1/2 items-center gap-3 mx-auto my-6 border pl-3 mb-15'>
            <input 
            className='w-full sm:flex-1 outline-none ' 
            type='email' 
            placeholder='Enter your Email' required>
            </input>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 rounded'>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox
