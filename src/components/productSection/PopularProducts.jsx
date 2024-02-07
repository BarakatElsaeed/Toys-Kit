import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ProductCard from "../productCard/productCard";
import "./PopularProducts.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PopularProducts() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:3004/prouducts?state=Popular")
      .then((resp) => setProduct(resp.data));
  }, []);

  return (
    <div className="Popular-Products">
      <h3>Popular Products</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        modules={[Autoplay]}
        autoplay
        className="my-5"
      >
        {product.map((item, i) => (
          <SwiperSlide>
            <ProductCard key={i} etm={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
