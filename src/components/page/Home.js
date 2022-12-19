import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ProductsCard } from "./ProductsCard";

export const Home = () => {
 const [products, setProducts] = useState([])

useEffect(()=>{
  fetch("http://localhost:5000/products")
  .then((res)=> res.json())
  .then(data=> setProducts(data))
},[])

const state = useSelector((state)=>state)

const activeClass = "text-white  bg-indigo-500 border-white";
// console.log(state)
  return (
    <>
      <Navbar />

      <Outlet />


      <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          In Stock
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          AMD
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
      Galaxy
        </button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
      {
  products.map((product)=>(
    <ProductsCard key={product._id} product={product}/>
  ))
}
      </div>
    </div>

      
    </>
  );
};
