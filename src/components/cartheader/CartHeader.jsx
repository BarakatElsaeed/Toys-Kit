import React from 'react'
import './CartHeader.scss'
import { useRecoilState } from "recoil";
import { CartArr } from "../../store";

export default function CartHeader() {
  const [, setcart] = useRecoilState(CartArr);

  function removeAll(){
    setcart([])
  }
  return (
    <div className="Top">
   <h5>Shopping Cart</h5>
   <span onClick={removeAll}>Remove All</span>
  </div>
  )
}
