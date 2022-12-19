import React from 'react'
import Navbar from './Navbar'
import {useSelector} from 'react-redux'
import { AddCartProduct } from './AddCartProduct'

export const Cart = () => {

const cart = useSelector((state)=> state.cart)

  return (
    <div className='container mx-auto'>
    <Navbar/>
  
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
      {
  cart.sort((a,b)=> a._id - b._id).map((product)=>(
    <AddCartProduct key={product._id} product={product}/>
  ))
}
      </div>
    </div>
  )
}
