
import "./cart.scss";
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import CartHeader from "../../components/cartheader/CartHeader";
import CartList from "../../components/CartList/CartList";
import CartFooter from "../../components/CartFooter/CartFooter";
import Noproduct from "../../components/Noprouduct/Noproduct";
import { useRecoilState } from "recoil";
import { CartArr } from "../../store";

export default function Cart() {
  const [cart] = useRecoilState(CartArr);
  

  return (
    <>
      <div className="header__">
        <SecoundHeader name="shopping cart" />
      </div>
      {cart.length === 0 ? (
        <Noproduct name="cart" />
      ) : (
        <>
          <div className="cart-content">
            <div className="cart-div">
              <CartHeader />
              <CartList />
              <div className="foot-cart">
                <CartFooter />
              </div>
            </div>
            <div className="end__">
              <button className="con">Continue Shopping</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
