import React from 'react'
import "./Wishlist.scss"
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import img1 from "./wishlist.png"
import { useRecoilState } from "recoil";
import { wishListState } from "../../store";
import Noproduct from '../../components/Noprouduct/Noproduct';

const Wishlist = () => {
  const [wishlist, setWishlist] = useRecoilState(wishListState);

  const removeFromWishlist = (itemToRemove) => {
    setWishlist((prevWishlist) => {
      return prevWishlist.filter((item) => item.id !== itemToRemove.id);
    });
  };

  function removeAll(){
    setWishlist([])
  }


  return (
    <>
    
    <div className="header__">
    <SecoundHeader name="Wishlist" />
  </div>
{
  wishlist.length === 0 ?(
    <Noproduct name="wishlist" />
  ) :(
    <>
    <div className='main_'>

<div className="Top-wish">
<img src= {img1} alt="" />
<span onClick={removeAll}>removeAll</span>
{/* <h5>Wishlist</h5> */}
</div>

<div className='List'>

{wishlist.map((item) => (

                       
       <li key={item.id}>

         <img src={item.img} alt="" />
         <h4>

          {item.title}
         </h4>
         <h5>

           ${item.price} 
         </h5>
           <span onClick={() => removeFromWishlist(item)}>remove</span>
       </li>
     ))}

     

</div>
</div>

    
     </>

    
  )
}

  
    </>
  )
}

export default  Wishlist;