import React from 'react'
import "./CartList.scss"
import Cartitem from '../Cartitem/Cartitem';
import { useRecoilState } from "recoil";
import { CartArr } from "../../store";

export default function CartList() {
  const [cart ] = useRecoilState(CartArr);
  return (
  <div className='all-list'>
    <div className='lists_'>
      {
        cart.map(
          etm => {
            return <Cartitem etm = {etm} />
            
          }
        )
      }

    </div>



  </div>
 
  )
}
