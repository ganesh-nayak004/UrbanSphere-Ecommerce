import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <hr/>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
            <div >
                <img
                className='mb-5 w-54' 
                src={assets.us} alt=""/> 
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum dolores architecto rem aut ipsam, assumenda aspernatur, dignissimos laborum quas, at reiciendis itaque explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quibusdam, aliquid dicta, commodi laborum hic cum qui ad repellendus a beatae eaque minima ullam.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-212-456-7890</li>
                    <li>support@urbansphere.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center '>Copyright 2024@ urbansphere.com-All Rights Reserved</p>
        </div>
 
    </div>
  )
}

export default Footer
