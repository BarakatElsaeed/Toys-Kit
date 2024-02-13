import "./Productview.scss"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { CartArr, authData, wishListState } from "../../store";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";


export default function ProductView() {
  const [auth]=useRecoilState(authData);
  const [product, setProduct] = useState(null);
  const [, setcart] = useRecoilState(CartArr);
  const [, setWishList] = useRecoilState(wishListState);
  const navigate = useNavigate()
  const { id } = useParams();



  function handelAddToCart() {
    

    if (auth.isauth) {
      setcart((prevCart) => {
        if (prevCart.find((item) => item.id === product.id)) {
          return prevCart;
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    } else {
      Swal.fire("log in first");
      navigate('/Login');
    }

    
  }

  const addToWishList = () => {
    if (auth.isauth) {
      setWishList((prevWishList) => {
        if (prevWishList.find((item) => item.id === product.id)) {
          return prevWishList;
        } else {
          return [...prevWishList, { ...product, quantity: 1 }];
        }
      });
    } else {
      Swal.fire("log in first");
      navigate('/Login');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3004/prouducts') 
      .then(response => response.json())
      .then(data => {
        const foundProduct = data.find(item => item.id == parseInt(id));
        console.log(foundProduct);
        setProduct(foundProduct);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [id]);
  console.log(product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="page-content">
    <div className="header__">
        <SecoundHeader name="product-details" />
      </div>
    
    
    <div className='Thebig'>
      <div className="subBig">
      <div className='Theimg'>

<img src={product.img} alt="" />
<div className="thebtns">
<button className="bto" onClick={handelAddToCart}>
  
<FontAwesomeIcon icon={faCartPlus} />
        </button>
        <button className="bto" onClick={addToWishList} >
        
          <FontAwesomeIcon className="icon" icon={faHeart} />
        </button>

</div>

</div>
<div className='details'>


  <h2>{product.title}</h2>
  <h5 className="de">price:  <span> $ {product.price}</span></h5>
  <h5 className="de"> color: <span>{product.color}</span></h5>
  <h5 className="de"> size: <span>{product.size}</span></h5>
  <h5 className="de"> materials: <span>{product.material}</span></h5>
  <h5 className="de"> Availability: <span>{product.availability}</span></h5>

  <h6>{product.category}</h6>

</div>

</div>
      </div>
      </div>
  
    </>
  );
}
