import React, { useEffect, useState } from 'react'
import "./CartFooter.scss"
import { useRecoilState } from 'recoil';
import { CartArr } from "../../store";
import { Link } from "react-router-dom";
export default function CartFooter({ etm }) {
  const [cart] = useRecoilState(CartArr);
  const [totalCart,setTotalCart]= useState()
  const [qutCart,setQutCart]= useState()
  useEffect(()=>{
    let t = 0 ;
    cart.forEach((etm)=>{
      t =t+(+etm.price * +etm.quantity )
    })
  
    setTotalCart(t);
  },[cart])

  useEffect(()=>{
    let x = 0 ;
    cart.forEach((etm)=>{
      x =x+( +etm.quantity )
    })
  
    setQutCart(x);
  },[cart])
  return (
    <>
    <div className='foot-total'>
        <div className='tot'>
            <span>Total</span>
            <span>{qutCart} items</span>
        </div>
        <div className='price'>
            <span>${totalCart}</span>
        </div>

    </div>
    <Link to="/checkout">

  <button  className='check'>Checkout</button>
    </Link>
    </>
  )
}
