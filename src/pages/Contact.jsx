import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t  ">
          <Title text1 ={'CONTACT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row  gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} />
          <div className="flex flex-col items-start justify-center gap-6">
            <p className='font-semibold text-gray-600 text-xl'>Our Store</p>
            <p className='text-gray-500'>54B, Near Mata Mandir Square <br/> Bhopal-462003 (M.P.)</p>
            <p className='text-gray-500'>Mob.No. +91-1234-567-890  <br/> Email:admin@urbansphere.com</p>
            <p className='font-semibold text-gray-600 text-xl'> Careers at UrbanSphere</p>
            <p className='text-gray-500'>Learn more about our Team & Job openings.</p>
            <button  className=' bg-green-700 text-white font-bold text-sm my-8 px-8 py-3 rounded-sm border-3 hover:bg-white hover:text-green-700 hover:border-green-700 hover:transition ease-in'>Explore Jobs</button>
          </div>

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
