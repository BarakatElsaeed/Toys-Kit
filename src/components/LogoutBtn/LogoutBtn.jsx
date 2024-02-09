import React from 'react'
import { Button } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { authData } from '../../store';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export default function LogoutBtn() {
    const [,setauth]=useRecoilState(authData);
    const navigate = useNavigate();
    function handelLogout(result){
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to log out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "log Out"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "logged out!",
                text: "You are logged out.",
                icon: "success"
              });
              setauth({
                isauth:false,
                userId:null
            
            })
          
            localStorage.removeItem('loggedInUser')
            navigate("/");
          


            }
          });

       
    }
  return (
   < Button  variant="outline-danger" size="sm" onClick={handelLogout} >Log out</Button>
  )
}
 


