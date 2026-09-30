import Layout from "./Layout"
import { products } from "../data/product";
import { useState,useEffect } from "react";
export default function Mouse() {
  const[product,setProduct]=useState([]);
      useEffect(()=>{
          setProduct(products);
      },[])
      const mouses=product.filter((cur)=>cur.category=="mouse")
      
  return (
    <>
   <h2 className="text-center bg-gray-400 w-full mt-2 p-2 font-bold text-xl">Popular Mouse</h2>
    <div className="flex flex-wrap justify-center">
        
      {mouses.map((cur)=>(
            <Layout name={cur}/>
      ))}
    </div>
    </>
  )
}
