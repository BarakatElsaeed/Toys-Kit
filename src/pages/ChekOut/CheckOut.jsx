import React from "react";
import "./CheckOut.scss";
import { useEffect, useState } from "react";
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartList from "../../components/CartList/CartList";

import { useRecoilState } from "recoil";
import { CartArr } from "../../store";
import Swal from "sweetalert2";
import CheckOutschama from "../../components/schamas/Checkoutschama";

export default function CheckOut() {
  const [cart, setcart] = useRecoilState(CartArr);
  const [totalCart, setTotalCart] = useState();
  const shippingCost = 20;
  const totalWithShipping = totalCart + shippingCost;
  useEffect(() => {
    let t = 0;
    cart.forEach((etm) => {
      t = t + +etm.price * +etm.quantity;
    });

    setTotalCart(t);
  }, [cart]);
  const navigate = useNavigate();
  function Handelcheckout() {
    Swal.fire({
      title: "Confirm order?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setcart([]);

        navigate("/");
        Swal.fire("order has been confirmed", "", "success");
      } else if (result.isDenied) {
        Swal.fire("The order has not been confirmed", "", "info");
      }
    });
  }

  return (
    <>
      <div className="header__">
        <SecoundHeader name="CheckOut" />
      </div>

      <Formik
        initialValues={{
          email: "",
          phone: "",
          name: "",
          adress: "",
        }}
        validationSchema={CheckOutschama}
        onSubmit={(Values) => {
          Handelcheckout(Values);
        }}
      >
        <Form className="checkOut-form my-5" action="">
          <div className="checkOut-inputs">
            <h3>Contact information</h3>
            <div className="fullname__">
              <label htmlFor="">Fullname:</label>
              <Field name="name" placeholder="Full Name" type="text"></Field>
              <span className="text-danger">
                {" "}
                <ErrorMessage name="name" />{" "}
              </span>
            </div>

            <div className="email__">
              <label htmlFor="">Email:</label>
              <Field name="email" placeholder="Email" type="email"></Field>
              <span className="text-danger">
                {" "}
                <ErrorMessage name="email" />{" "}
              </span>
            </div>
            <div className="password__">
              <label htmlFor="">phone:</label>
              <Field name="phone" placeholder="phone" type="number"></Field>
              <span className="text-danger">
                {" "}
                <ErrorMessage name="phone" />{" "}
              </span>
            </div>
            <div className="fullname__">
              <label htmlFor="">Adress:</label>
              <Field
                name="adress"
                placeholder="your adrees"
                type="text"
              ></Field>
              <span className="text-danger">
                {" "}
                <ErrorMessage name="adress" />{" "}
              </span>
            </div>
          </div>

          <hr />
          <div className="last-cart">
            <CartList />
            <div className="checkout-total">
              <h5>
                price

              <span>${totalCart}</span>

              </h5>
              <h5>
                shipping <span>$20</span>{" "}
              </h5>
              <h5>
                Total price

              <span>${totalWithShipping}</span>
              </h5>

              
            </div>
            <div className="bt">
              <Button variant="primary" type="submit">
                Confirm Order
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
