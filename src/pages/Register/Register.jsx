import React from 'react'
import "./Register.scss"
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import registerschama from '../../components/schamas/registerschama';
import axios from 'axios';




export default function Register() {
  const navigate = useNavigate();

  function HandelRegisterAccount(data){
    delete data.confirmpassword;
    axios.post(" http://localhost:3004/users" , data ,{
      headers:{
        'Content-Type':'application/json'
      }
    })
    navigate("/Login");


  }
  return (
<>
<div className="header__">
        <SecoundHeader name="Register" />
      </div>
      <Formik
      initialValues={{ email: '', password: '', name:"", confirmpassword:""}}
      validationSchema={registerschama}
      onSubmit={(Values)=>{
        HandelRegisterAccount(Values)
      }}
      >
        <Form className='user-form my-5' action="">
          <h3>Create New account
</h3>
          <div className='fullname__' >
            <label htmlFor="">Fullname:</label>
          <Field name="name" placeholder="Full Name" type="text"></Field>
          <span className='text-danger'> <ErrorMessage name='name' />  </span>
          </div>

          <div className='email__' >
            <label htmlFor="">Email:</label>
          <Field name="email" placeholder="Email" type="email"></Field>
          <span className='text-danger'> <ErrorMessage name='email' />  </span>

          </div>
          <div className='password__'>
          <label htmlFor="">password:</label>
          <Field name="password" placeholder="password" type="password"></Field>
          <span className='text-danger'> <ErrorMessage name='password' />  </span>
          </div>

          <div className='confirmpassword__'>
          <label htmlFor="">Confirm password:</label>
          <Field name="confirmpassword" placeholder="Confirm password" type="password"></Field>
          <span className='text-danger'> <ErrorMessage name='confirmpassword' />  </span>

          </div>

          <div className='acco'>
          <Link to="/Login">Login Now</Link>
         Already have an account?
          </div>
          <div className='bt'>
         <Button   variant="warning" type='submit'>Register</Button>

          </div>
        </Form>


      </Formik>

    
</>
  )
}
