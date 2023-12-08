import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BannerData } from '../data/banner_data';
import { Shuffle } from './Shuffle';
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export function Banner() {

  const Newimg = Shuffle([...BannerData])
  
  return (
    <>
      <Swiper
      slidesPerView={2}
        spaceBetween={1200}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="banner-swiper"
      >
        {Newimg.map((v,i)=>(
          <SwiperSlide className='bannersw'>
            <div className="bannerinfo">
              <div className="bannercolor"></div>
              <img src={v.src} alt="" />
              <p className='bp1'>{v.txt}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
