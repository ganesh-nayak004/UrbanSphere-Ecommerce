import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { IoIosArrowForward } from "react-icons/io";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products, search , showsearch} = useContext(ShopContext);
  const [showfilter , setshowfilter] =useState(false);
  const [filterproducts, setfilterproducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory , setsubcategory] = useState([]);
  const [sorttype,setsorttype] =useState('relevant')
  
  const toggleCategory =(e)=>{

    if(category.includes(e.target.value)){
      setcategory(prev => prev.filter(item=> item!==e.target.value))
    } 
    else{
      setcategory(prev =>[...prev,e.target.value])
    }
  }

  useEffect(()=>{
    console.log(category);
  },[category])

  const toggleSubCategory =(e)=>{

    if(subcategory.includes(e.target.value)){
      setsubcategory(prev => prev.filter(item=> item!==e.target.value))
    } 
    else{
      setsubcategory(prev =>[...prev,e.target.value])
    }
  }

  useEffect(()=>{
    console.log(subcategory);
  },[subcategory])


  useEffect(()=>{
    setfilterproducts(products); 
  },[])

  const applyfilter=()=>{
    let productcopy = products.slice();

    if(category.length>0){
      productcopy = productcopy.filter(item=>category.includes(item.category));
    }
    if(subcategory.length>0){
      productcopy = productcopy.filter(item=>subcategory.includes(item.subcategory));
    }
    if(showsearch && search){
      productcopy = productcopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setfilterproducts(productcopy)

  }

  useEffect(()=>{
    applyfilter();
  },[category,subcategory,search ,showsearch])

  const sortproduct =()=>{
    let fpcopy = filterproducts.slice();

    switch(sorttype){
      case 'low-high':
        setfilterproducts(fpcopy.sort((a,b)=>(a.price - b.price))); 
        break;
      case 'high-low':
        setfilterproducts(fpcopy.sort((a,b)=>(b.price - a.price))); 
        break;
      default:
        applyfilter();
        break;
    }

  }
  useEffect(()=>{
    sortproduct();
  },[sorttype])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>
      {/* FILTER OPTIONS  */}

      <div className='min-w-60 '> 
          <p onClick={()=>setshowfilter(!showfilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2 '>FILTERS
          <IoIosArrowForward  className={`text-xl sm:hidden ${showfilter ? 'rotate-90' :''}`}/>
          </p>

        {/* category filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

              <p className='flex gap-2'>
                <input onChange={toggleCategory} className='w-3' type='checkbox' value={'Men'}/>Men
              </p>
              <p className='flex gap-2'>
                <input onChange={toggleCategory} className='w-3' type='checkbox' value={'Women'}/>Women
              </p>
              <p className='flex gap-2'>
                <input onChange={toggleCategory} className='w-3' type='checkbox' value={'Kids'}/>Kids
              </p>

          </div>
        </div>

        {/* subcategory filter  */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p
              onChange={toggleSubCategory}
              className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Topwear'}/>Top Wear
              </p>
              <p
              onChange={toggleSubCategory}
              className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Bottomwear'}/>Bottom Wear
              </p>
              <p 
              onChange={toggleSubCategory}
              className='flex gap-2'>
                <input className='w-3' type='checkbox' value={'Winterwear'}/>Winter Wear
              </p>

          </div>
        </div>


      </div>

      {/* right side  */}
      <div className="flex-1 ">

            <div className=" flex justify-between text-base sm:text-2xl mb-4">
                <Title text1={'ALL'} text2={'COLLECTIONS'}/>
                {/* product sort function  */}
                <select 
                onChange={(e)=>setsorttype(e.target.value)} 
                className='border-2 border-gray-300 text-sm px-2'>
                  <option value="relavant">Sort by:
                    Relevant</option>
                  <option value="low-high">Sort by:
                  Low-High</option>
                  <option value="high-low">Sort by:
                  High-Low</option>
                </select>
            </div>

            {/* map products  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 gap-y-6 ">
              {
                filterproducts.map((item,index)=>(
                  <ProductItem key ={index} id={item.id} image={item.image} name ={item.name} price={item.price} />
                ))
              }

            </div>  

      </div>
      

     
    </div>
  )
}

export default Collection
