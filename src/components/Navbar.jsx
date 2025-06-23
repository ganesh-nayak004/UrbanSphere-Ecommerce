import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setvisible] = useState(false);
    const {showsearch,setshowsearch,getcartcount,navigate} = useContext(ShopContext);
 

  return (
    <div className='flex items-center justify-between py-5  font-bold'>
        {/* //logo  */}
       <Link to ="/"><img className="w-54" src={assets.us} alt='mm'/></Link> 

         {/* ul list of navbar  */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-900'>

            <NavLink to="/"
            className="flex flex-col items-center gap-1">
                <p className='uppercase'>Home</p>
                <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden'></hr>
            </NavLink>

            <NavLink to="/collection"
            className="flex flex-col items-center gap-1">
                <p className='uppercase'>Collection</p>
                <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden'></hr>
            </NavLink>

            <NavLink to="/about"
            className="flex flex-col items-center gap-1">
                <p className='uppercase'>About</p>
                <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden'></hr>
            </NavLink>

            <NavLink to="/contact"
            className="flex flex-col items-center gap-1">
                <p className='uppercase'>Contact</p>
                <hr className='w-2/4 border-none bg-gray-700 h-[1.5px] hidden'></hr>
            </NavLink>

        </ul>

         {/* icons  */}
        <div className='flex items-center gap-6' >
             {/* search bar  */}
             <NavLink to="/collection"><p onClick={()=>setshowsearch(!showsearch)}
             className='text-3xl cursor-pointer'><AiOutlineSearch /></p></NavLink>
            {/* profile and dropdown */}
            <div className="group relative">
               <p className='text-3xl cursor-pointer'><CgProfile onClick={()=>navigate('/login')} /></p>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='hover:text-black cursor-pointer'>My Profile</p>
                        <p className='hover:text-black cursor-pointer'>Orders</p>
                        <p className='hover:text-black cursor-pointer'>LogOut</p>
                    </div>
                </div>
            </div>

            {/* add to cart  */}
            <Link to="/cart" className='relative'>
                <p className='text-3xl cursor-pointer ' ><BsCart /></p>
                <p className='absolute right-[0] bottom-[-5px] w-5 text-center leading-4 bg-green-500 text-white aspect-square rounded-full text-[11px] animate-bounce font-lg'>{getcartcount()}</p>
            </Link>


            {/* sidebar menu for small screen  */}
            <div onClick={()=>setvisible(true)} >
                <p className="text-3xl cursor-pointer sm:hidden"><CiMenuKebab /></p>
            </div>
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white   transition-all ${visible?`w-full`:`w-0`}`}>
                    <div className='flex flex-col text-gray-700 '>
                        <div onClick={()=>setvisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                                <img className='h-4 rotate-180' src={assets.dropdown_icon}/>
                                <p>Back</p>
                        </div>
                        <NavLink 
                         onClick={()=>setvisible(false)}
                         className='py-2 pl-6 border' to="/">HOME</NavLink>
                        <NavLink 
                         onClick={()=>setvisible(false)}
                         className='py-2 pl-6 border' to="/collection">COLLECTION</NavLink>
                        <NavLink 
                         onClick={()=>setvisible(false)}
                         className='py-2 pl-6 border' to="/about">ABOUT</NavLink>
                        <NavLink 
                         onClick={()=>setvisible(false)}
                         className='py-2 pl-6 border' to="/contact">CONTACT</NavLink>

                    </div>
            </div>


        </div>



    </div>
  )
}

export default Navbar
