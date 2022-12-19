import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toggleBrand, toggleStock } from "../../redux/actionTypes/filterAction";
import Navbar from "./Navbar";
import { ProductsCard } from "./ProductsCard";

export const Home = () => {
 const [products, setProducts] = useState([])
const filters = useSelector((state)=> state.filter.filters)
const {brands, stock} = filters
// console.log(products)
 const dispatch = useDispatch()

useEffect(()=>{
  fetch("http://localhost:5000/products")
  .then((res)=> res.json())
  .then(data=> setProducts(data))
},[])

const state = useSelector((state)=>state)
// console.log(state)


const activeClass = "text-white  bg-accent border-white";


let content;

if(products.length){
 content = products.map((product)=>(
    <ProductsCard key={product._id} product={product}/>
  ))
}
if(products.length && (stock || brands.length)){
 content = products
 .filter((product)=>{
  if(stock){
    return  product.status === true;
  }
  return product
 })
 .filter((product)=>{

  if(brands.length){
    return brands.includes(product.brand);
  }
  return product
 })
 .map((product)=>(
    <ProductsCard key={product._id} product={product}/>
  ))
}


  return (
    <>
      <Navbar />

      <Outlet />


      <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
        onClick={ () => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
        >
          In Stock
        </button>
        <button onClick={ () => dispatch(toggleBrand("Honda"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("Honda") ? activeClass : null}`}>
         Honda
        </button>
        <button onClick={ () => dispatch(toggleBrand("Galaxy"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("Galaxy") ? activeClass : null}`}>
      Galaxy
        </button>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
      {content}
      </div>
    </div>

      
    </>
  );
};
