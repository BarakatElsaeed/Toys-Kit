import React from "react";
import "./Shop.scss";
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import ProductCard from "../../components/productCard/productCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Shop() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(" http://localhost:3004/prouducts")
      .then((resp) => setProduct(resp.data));
  }, []);

  return (
    <><div className="page-content">
      <div className="header__">
        <SecoundHeader name="Shop" />
      </div>
      <div className="Shop-content">
        <div className="Main-heead">
          <h3> All Products </h3>
        </div>

        <div className="Product-content">
          {product.map((item, i) => (
            <ProductCard key={i} etm={item} />
          ))}
        </div>
      </div>
      </div>
      </>
  );
}
