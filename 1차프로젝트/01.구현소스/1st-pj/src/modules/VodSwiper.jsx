import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./VodSwiper.css";

// import required modules
import { Grid, Navigation, Pagination } from "swiper/modules";
import { ClipDate } from "../data/vod_date";
import "swiper/css/navigation";

export function VodSwiper() {
	return (
		<>
			<Swiper
				slidesPerView={4}
				grid={{
					rows: 2,
				}}
				loop={true}
				spaceBetween={30}
				navigation={{
					prevEl: ".ab1",
					nextEl: ".ab2",
				}}
				modules={[Grid, Navigation]}
				className="mySwiper"
			>
				{ClipDate.map((v, i) => (
					<SwiperSlide>
						<a href={v.src}>
							<img src={v.img} alt="" />
							<h4 class="subclip-tit">{v.tit}</h4>
							<h6 class="subclip-tag">{v.tag}</h6>
						</a>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
