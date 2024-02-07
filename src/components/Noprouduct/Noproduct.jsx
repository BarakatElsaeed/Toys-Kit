import React from 'react'
import "./Noproduct.scss"
import { Link } from 'react-router-dom'



export default function Noproduct(props) {
  return (
    <>
    <div className='No'>
        <h2>Your {props.name} is empty</h2>
        <Link to="/shop">
        <button className="con">Continue Shopping</button>
        </Link>
    </div>
     
    </>
  )
}
