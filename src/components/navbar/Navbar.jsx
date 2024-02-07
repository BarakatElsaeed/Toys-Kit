/* eslint-disable eqeqeq */
import { Link, NavLink } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import mainlogo from "./logo_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  
  faBarsStaggered,
  faHeart,
  

} from "@fortawesome/free-solid-svg-icons";
import "../navbar/Navbar.scss";
import { $Current_Width, authData, wishListState } from "../../store/";
import { $Side_Menu_Index } from "../../store";
import { useRecoilState } from "recoil";
import { CartArr } from "../../store";
import { useEffect, useState } from "react";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import { FcAdvance  } from "react-icons/fc";
import { LiaOpencart } from "react-icons/lia";

export default function Navbar() {
  const [auth]=useRecoilState(authData);
  const [SideMenuIndex, setSideMenuIndex] = useRecoilState($Side_Menu_Index);
  const [Current_Width] = useRecoilState($Current_Width);
  const [cart] = useRecoilState(CartArr);
  const [wishlist] = useRecoilState(wishListState);
  const [qutCart, setQutCart] = useState();
  const [, setQutwishlist] = useState();

  useEffect(() => {
    let x = 0;
    cart.forEach((etm) => {
      x = x + +etm.quantity;
    });

    setQutCart(x);
  }, [cart]);

  useEffect(() => {
    let y = 0;
    wishlist.forEach((etm) => {
      y = y + +etm.quantity;
    });

    setQutwishlist(y);
  }, [wishlist]);

  return (
    <>
      <header className="mainheader ">
       

       



       

          { auth.isauth ?<>
           
            {Current_Width <= 767 && SideMenuIndex == true ? <SideMenu /> : null}

<Link to="/">
<img src={mainlogo} alt="logo" />

</Link>


{Current_Width <= 767 ? (
  <FontAwesomeIcon
    className="i"
    onClick={(e) => {
      e.stopPropagation();
      SideMenuIndex == true
        ? setSideMenuIndex(false)
        : setSideMenuIndex(true);
    }}
    icon={faBarsStaggered}
  />
) : (
  <nav>
    <NavLink className="li" to="/">
      Home
    </NavLink>
    <NavLink className="li" to="/shop">
      Shop
    </NavLink>
    <NavLink className="li" to="/about">
      About
    </NavLink>
    <NavLink className="li" to="/services">
      {" "}
      services
    </NavLink>
    <NavLink className="li" to="/FAQ">
      FAQ
    </NavLink>
    <NavLink className="li" to="/contact">
      contact{" "}
    </NavLink>
  </nav>
)}
 <div className="Icon">
         
        

         <NavLink to="/wishlsit">
           <div className="fav__">
             {/* <span className="qut__" >{qutwishlist}</span> */}
             <FontAwesomeIcon className="fav-i" icon={faHeart} />
           </div>
         </NavLink>

         <NavLink to="/Cart">
           <div className="cart__">
             <span className="qut__">{qutCart}</span>
            
             <LiaOpencart className="cart-i" />
         
             {/* <FontAwesomeIcon className="cart-i" icon={faBasketShopping} /> */}
           </div>
         </NavLink>
         </div>

         <LogoutBtn/> 
          

          
          </>
           :(


            <>
            <Link to="/">
<img src={mainlogo} alt="logo" />
{Current_Width <= 767 && SideMenuIndex == true ? <SideMenu /> : null}

</Link>

{Current_Width <= 767 ? (
  <FontAwesomeIcon
    className="i"
    onClick={(e) => {
      e.stopPropagation();
      SideMenuIndex == true
        ? setSideMenuIndex(false)
        : setSideMenuIndex(true);
    }}
    icon={faBarsStaggered}
  />
) : (
  <nav>
    <NavLink className="li" to="/">
      Home
    </NavLink>
    <NavLink className="li" to="/shop">
      Shop
    </NavLink>
    <NavLink className="li" to="/about">
      About
    </NavLink>
    <NavLink className="li" to="/services">
      {" "}
      services
    </NavLink>
    <NavLink className="li" to="/FAQ">
      FAQ
    </NavLink>
    <NavLink className="li" to="/contact">
      contact{" "}
    </NavLink>
  </nav>
)}
            
            <NavLink className="log" to="/Login" >
            <FcAdvance className="arrow" />
            <span>Log in</span>
            
  
            </NavLink>

         
          
            </>
          ) }
          
        

        
       
      </header>
    </>
  );
}
