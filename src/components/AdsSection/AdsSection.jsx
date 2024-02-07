import React from 'react'
import "./AdsSection.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import iconOne from "./icon-1.png"
import iconTwo from "./icon-2.png"
import iconThree from "./icon-3.png"
import iconFour from "./icon-4.png"
import logoOne from "./home-logo-1.webp"
import logoTwo from "./home-logo-2.webp"
import logoThree from "./home-logo-3.webp"
import logoFour from "./home-logo-4.webp"
import logoFive from "./home-logo-5.webp"
export default function AdsSection() {
  return (
    <>
        <div className='The-main'>
<div className='left-div'>

</div>
<div className='right-div'>
    <h2>Safe toys for children</h2>
    <ul>
        <li>
            <img src={iconOne}  alt="" />
            <p>Beautiful & well-designed</p>
        </li>
        <li>
            <img src={iconTwo}  alt="" />
            <p>High durable toys</p>
        </li>
        <li>
            <img src={iconThree}  alt="" />
            <p>Recyclable materials</p>
        </li>
        <li>
            <img src={iconFour}  alt="" />
            <p>Safe & non-toxic</p>
        </li>
        
    </ul>
    

</div>
    <div className='end-div'>
      

    <Swiper
     slidesPerView={5}
     spaceBetween={30}
     loop={true}
     
     className="my-5"
    >
      <SwiperSlide>
        <img src={logoOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logoTwo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src= {logoThree} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logoFour} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={logoFive} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src= {logoThree} alt="" />
      </SwiperSlide>
    
    </Swiper>
        
    </div>
    </div>
    </>

    
  )
}
