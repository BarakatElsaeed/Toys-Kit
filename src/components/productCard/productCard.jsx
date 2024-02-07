import "./productCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { CartArr, authData, wishListState } from "../../store";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function ProductCard({ etm }) {
  const [auth]=useRecoilState(authData);
  const [, setcart] = useRecoilState(CartArr);
  const [, setWishList] = useRecoilState(wishListState);
  const navigate = useNavigate()

  function handelAddToCart() {

    if (auth.isauth) {
      setcart((prevCart) => {
        if (prevCart.find((item) => item.id === etm.id)) {
          return prevCart;
        } else {
          return [...prevCart, { ...etm, quantity: 1 }];
        }
      });
    } else {
      Swal.fire("Log in first");
      navigate('/Login');
    }

    
  }

  const addToWishList = () => {
    if (auth.isauth) {
      setWishList((prevWishList) => {
        if (prevWishList.find((item) => item.id === etm.id)) {
          return prevWishList;
        } else {
          return [...prevWishList, { ...etm, quantity: 1 }];
        }
      });
    } else {
      Swal.fire("You must be logged in To Add to wishlist!");
      navigate('/Login');
    }
  };

  return (
    <div className="card">
      <div id="img">
      <span className="sale"> {etm.sale}% </span>
        <img src={etm.img} alt="" />
      <span className="cato">{etm.category}</span>
      </div>
      <Link className="tit" to={`/product-details/${etm.id}`}>
      <h5 >{etm.title}</h5>
         </Link>
      <h6>${etm.price}</h6>
      <div className="end">
        <button onClick={handelAddToCart}>
          Add Cart <FontAwesomeIcon icon={faPlus} />
        </button>
        <button onClick={addToWishList} className="wishlist">
          <FontAwesomeIcon className="icon" icon={faHeart} />
        </button>
      </div>
    </div>
  );
}
