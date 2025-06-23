import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
    const {search,setsearch,showsearch,setshowsearch} = useContext(ShopContext);
    const [visible,setvisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        // console.log(location.pathname);
        if(location.pathname.includes('collection') ){
            setvisible(true);
        }
        else{
            setvisible(false);
        }
    },[location]);


  return showsearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'> 
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input
                onChange={(e)=>setsearch(e.target.value)}
                value = {search}
                className='flex-1 outline-none bg-inherit text-sm'
                type='text' placeholder='Search...' />
            <p className='text-3xl cursor-pointer'><AiOutlineSearch /></p>
        </div>

        <RxCross2 onClick={()=>setshowsearch(false)} className="inline text-3xl cursor-pointer" />
    </div>
  ):null
}

export default Searchbar
