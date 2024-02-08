import React from "react";
import "./Login.scss";
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loginschama from "../../components/schamas/Loginschama";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authData } from "../../store";
import Swal from "sweetalert2";

export default function Login() {
  const [,setauth]=useRecoilState(authData);
  function HandelLoginAccount(data) {
    axios
      .get(
        `http://localhost:3004/users?email=${data.email}&password=${data.password} `
      )
      .then((data) => {
        if (data.data.length > 0) {
          localStorage.setItem('loggedInUser',  JSON.stringify(data.data[0]))
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You are logged in",
            showConfirmButton: false,
            timer: 1000
          });
         
          setauth({
            isauth:true,
            userId:data.data[0].id
           
          })
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "account or password is wrong!",
          
          });
        }
      });
  }
  return (
    <>
      <div className="header__">
        <SecoundHeader name="Login" />
      </div>

    

      <Formik
        initialValues={{ email: "", password: "", name: "" }}
        validationSchema={Loginschama}
        onSubmit={(Values) => {
          HandelLoginAccount(Values);
        }}
      >


        <Form className="user-form my-5" action="">
          <h3>Login</h3>

          <div className="email__">
            <label htmlFor="">Email:</label>
            <Field name="email" placeholder="Email" type="email"></Field>
            <span className="text-danger">
              {" "}
              <ErrorMessage name="email" />{" "}
            </span>
          </div>
          <div className="password__">
            <label htmlFor="">password:</label>
            <Field
              name="password"
              placeholder="password"
              type="password"
            ></Field>
            <span className="text-danger">
              {" "}
              <ErrorMessage name="password" />{" "}
            </span>
          </div>
          <div className="acco">
            <Link to="/Register">Create an account</Link>
            don't have an account?
          </div>
          <div className="bt">
            <Button variant="warning" type="submit">
              login
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
