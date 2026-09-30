import Layout from "./Layout"
import { products } from "../data/product";
import { useState,useEffect } from "react";
export default function Ac() {

  const[product,setProduct]=useState([]);
    useEffect(()=>{
        setProduct(products);
    },[])
    const acs=product.filter((cur)=>cur.category=="ac")
    console.log(acs)
  return (
    <>
    <h2 className="text-center bg-gray-400 w-full mt-2 p-2 font-bold text-xl">Popular Acs</h2>
    <div className="flex flex-wrap justify-center">
        
      {acs.map((cur)=>(
            <Layout name={cur}/>
      ))}
    </div>
    </>
  )
}
