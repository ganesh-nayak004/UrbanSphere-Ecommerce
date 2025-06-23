import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import {assets} from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct ';


const Product = () => {
  const {productId} = useParams();
  const {products, currency,addtocart} = useContext(ShopContext);
  const [productdata,setproductdata] = useState(null);
  const [image,setimage] = useState('');
  const [size,setsize] = useState('');



  const fetchproductdata =()=>{

    if (!products || products.length === 0) return; 
    products.find((item)=>{
      if(item._id === productId){
        setproductdata(item);
        setimage(item.image[0])
        console.log(item);
        return null;
      }

    })



  };
  useEffect(()=>{
    fetchproductdata();
  },[productId,products])


  return productdata ?(
    <div  className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* productdata  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-normal  sm:w-[18.7%] w-full">
            {
              productdata.image.map((item, index)=>(
                <img
                 onClick={()=>setimage(item)}
                 src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%] ">
            <img src ={image} className='w-full h-auto'/>
          </div>
        </div>
        
      {/* product information  */}
        <div className="flex-1 ">
          <h1 className='font-medium text-2xl mt-2 '>{productdata.name}</h1>
            {/* star  */}
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productdata.price}</p>
          <p className="mt-5 text-gray-500 w-4/5">{productdata.description}</p>
            {/* size  */}

          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productdata.sizes.map((item,index)=>(
                 <button 
                  onClick={()=>setsize(item)}
                 className={`border py-2 px-4 bg-gray-100 ${(item === size) ? 'border-orange-500 border-2':''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          
          <button
           
            onClick={()=>addtocart(productdata._id,size)}
           className='bg-black text-white font-bold px-8 py-3 active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 ' />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash On Delivery is available on this product.</p>
            <p>Easy Return & Exchange Policy within 7 days.</p>
          </div>
        </div>
      </div>
      
      {/* description and review section  */}
      <div className="mt-20 ">
        <div className="flex gap-3">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="mt-4 flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quos quas! Natus impedit voluptatem, ab distinctio, dignissimos dolores quo alias accusantium nisi fugit praesentium atque sed commodi tenetur tempora reprehenderit? Quidem officiis unde eius veritatis porro sit fuga libero? Officia, a! Quibusdam tempore, modi optio voluptatum amet vel voluptate numquam atque exercitationem officia vero accusantium minima, accusamus nihil necessitatibus natus dolore quam. Deleniti officiis quam odit?</p>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dignissimos distinctio illo beatae eveniet. Ducimus exercitationem magnam quas voluptates vitae. Blanditiis soluta est sint, nobis corporis rerum ipsa, amet laborum aperiam odio culpa enim eos, dolores numquam minus illum. Tempora nihil optio quis deserunt.</p>
        </div>
      </div>

      {/* display related products  */}
      <RelatedProduct category={productdata.category} subcategory={productdata.subcategory} />

      
    </div>
  ): <div className='opacity-0'></div>
}

export default Product
