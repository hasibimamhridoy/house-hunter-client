import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerSlider.css";

import bannerOne from "../../../../assets/banner/5.png"
import bannerTwo from "../../../../assets/banner/6.png"
import bannerThree from "../../../../assets/banner/7.png"
import bannerFour from "../../../../assets/banner/8.png"

const BannerSlider = () => {
  
  return (
    <div  className="mb-20 mt-10">
      <div className=" lg:h-[80vh]">
      <Swiper

        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-lg" src={bannerOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={bannerTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={bannerThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={bannerFour} alt="" />
        </SwiperSlide>
        
      </Swiper>
      </div>
     
    </div>
  );
};

export default BannerSlider;
