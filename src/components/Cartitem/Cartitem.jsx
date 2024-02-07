import React from "react";
import "./Cartitem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { CartArr } from "../../store";

export default function Cartitem({ etm }) {
  // eslint-disable-next-line no-unused-vars
  const [cart, setcart] = useRecoilState(CartArr);
  function removefromcart() {
    setcart((Prev) => {
      return Prev.filter((ele) => ele.id !== etm.id);
    });
  }

  function increment() {
    setcart((prev) => {
      const obj = prev.find((ele) => ele.id === etm.id);
      const idx = prev.indexOf(obj);
      const newarr = [...prev];
      const newObj = { ...obj };
      newObj.quantity++;
      newarr[idx] = newObj;

      return newarr;
    });
  }
  function decrement() {
    setcart((prev) => {
      const obj = prev.find((ele) => ele.id === etm.id);
      if (obj.quantity === 1) return prev;
      const idx = prev.indexOf(obj);
      const newarr = [...prev];
      const newObj = { ...obj };
      newObj.quantity--;
      newarr[idx] = newObj;

      return newarr;
    });
  }

  return (
    <>
      <div className="cart-order">
        <div className="pro">
          <img src={etm.img} alt="" />
          <h4> {etm.title}</h4>
        </div>

        <div className="qut">
          <FontAwesomeIcon
            onClick={decrement}
            className="mins"
            icon={faCircleMinus}
          />
          <span> {etm.quantity} </span>
          <FontAwesomeIcon
            onClick={increment}
            className="ii"
            icon={faCirclePlus}
          />
        </div>

        <div className="total">
          <h4> ${+etm.quantity * +etm.price}</h4>
          <span onClick={removefromcart} className="tru">
            Remove
          </span>
        </div>
      </div>
    </>
  );
}
