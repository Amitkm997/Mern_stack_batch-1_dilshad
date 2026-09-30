import Layout from "./Layout"
import { products } from "../data/product"
import { useEffect, useState } from "react"
export default function Laptops() {
  const[product,setProduct]=useState([]);
  useEffect(()=>{
      setProduct(products);
  },[])
  const laptops=product.filter((cur)=>cur.category=="laptop")
  return (
    <>
    <h2 className="text-center bg-gray-400 w-full mt-2 p-2 font-bold text-xl">Popular laptops</h2>
    <div className="flex flex-wrap justify-center">
        
      {laptops.map((cur)=>(
            <Layout name={cur}/>
      ))}
    </div>
    </>
  )
}
