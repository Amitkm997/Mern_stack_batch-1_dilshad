import Layout from "./Layout"
import { products } from "../data/product";
import { useState,useEffect } from "react";
export default function Mobiles() {
  const[product,setProduct]=useState([]);
      useEffect(()=>{
          setProduct(products);
      },[])
      const mobiles=product.filter((cur)=>cur.category=="mobile")
  return (
    <>
   <h2 className="text-center bg-gray-400 w-full mt-2 p-2 font-bold text-xl">Popular Mobile</h2>
    <div className="flex flex-wrap justify-center">
        
      {mobiles.map((cur)=>(
            <Layout name={cur}/>
      ))}
    </div>
    </>
  )
}
