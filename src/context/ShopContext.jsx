import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export function ShopContextProvider({children}){

    const currency = '$';
    const delivery_fee=10;
    const [search,setsearch] = useState('');
    const [showsearch , setshowsearch] = useState(false);
    const [cartitems,setcartitems] = useState({});
    const navigate = useNavigate();

    const addtocart =(itemId , size)=>{
        let cartdata = structuredClone(cartitems); // copy of object
        
        if(!size){
            toast.error('Select product size !')
        }
        else{
            toast.success('Item added to cart :)')
        }

        if(cartdata[itemId]){
            if(cartdata[itemId][size]){
                cartdata[itemId][size]+=1;
            }
            else{
                cartdata[itemId][size] =1;
            }
        }
        else{
            cartdata[itemId] ={};
            cartdata[itemId][size] =1;

        }
        setcartitems(cartdata)

    }
    useEffect(()=>{
        console.log(cartitems);
    },[cartitems])

    const getcartcount=()=>{
        let cartcount=0;
        for (const items in cartitems) {
            for(const item in cartitems[items]){
                try{
                    if(cartitems[items][item]>0){
                        cartcount+=cartitems[items][item];
                    }
                }
                catch(error){

                }
            }
        }
        return cartcount;
    }

    const updatequantity = async(itemId, size , quantity)=>{
        let cartdata = structuredClone(cartitems);
        cartdata[itemId][size] = quantity;
        setcartitems(cartdata);

    }
    const getcartamount =()=>{
        let totalamount=0;
        for(const items in cartitems){
            let iteminfo = products.find((product)=>product._id === items);
            for(const item in cartitems[items]){
                try{
                    if(cartitems[items][item] >0 ){
                        totalamount += iteminfo.price * cartitems[items][item]
                    }
                }
                catch(err){

                }
            }
        }
        return totalamount;
    }

    const value ={
       products,
       currency,
       delivery_fee,
       search,setsearch,showsearch,setshowsearch,
       cartitems,setcartitems,addtocart,getcartcount,
       updatequantity,getcartamount,navigate
    }

    
        return (
            <ShopContext.Provider value = {value}>
                {children}
            </ShopContext.Provider>
        )
}



