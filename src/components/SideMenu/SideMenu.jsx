/* eslint-disable eqeqeq */
import "./SideMenu.scss"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareXmark} from "@fortawesome/free-solid-svg-icons"
import{$Side_Menu_Index} from "../../store"
import { useRecoilState } from 'recoil';
export default function SideMenu(){
    const[SideMenuIndex,setSideMenuIndex] = useRecoilState($Side_Menu_Index);
    return(
        <div className="animate__animated animate__fadeInLeft SideMenu " onClick={(e)=>{
            e.stopPropagation();
        }}>
            <FontAwesomeIcon className="X" onClick={()=>{
                 SideMenuIndex == true ? setSideMenuIndex(false): setSideMenuIndex(true)
            }} icon={faSquareXmark} />
            <nav className="Navagation">
                    <NavLink className='lis' to="/">Home</NavLink>
                    <NavLink className='lis' to="/shop">Shop</NavLink>
                
                    <NavLink className='lis' to="/about">About</NavLink>
                    <NavLink className='lis' to="/services"> services</NavLink>
                    <NavLink className='lis' to="/contact">contact </NavLink>
          
                </nav>

        </div>
    )
}