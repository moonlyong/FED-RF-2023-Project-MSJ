import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/banner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BannerData } from '../data/banner_data';


export function Banner() {

  
  return (
    <>
      <Swiper
      slidesPerView={4}
        spaceBetween={200}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination,Navigation]}
        className="banner-swiper"
      >
        {BannerData.map((v,i)=>(
          <SwiperSlide className='bannersw'>
            <div className="bannerinfo">
              <img src={v.src} alt="" />
              <div className="bannercolor"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
