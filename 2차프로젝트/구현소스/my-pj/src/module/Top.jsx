import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "../css/top.css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';

import { Link } from "react-router-dom";
import $ from "jquery";
import { Autoplay, Navigation } from 'swiper/modules';
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

export function Top(cln,lg,bn,td) {
	return (
		<>
			<div id="top-area" className={cln}>
				<div className="bdl-gray top-area">
					<div className="topnav inner">
						<h1 className="top-logo">
                            {/* 홈버튼 */}
							<Link to={"/"}>
									<img src={lg} alt="" />
							</Link>
						</h1>
                        {/* 상단배너구역 */}
						<Swiper
							direction={"vertical"}
							slidesPerView={1}
							spaceBetween={0}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                              }}
							modules={[Autoplay,Navigation]}
							className="topSwiper"
						>
                            {bn.map((v,i)=>(

							<SwiperSlide className='topsw'><img src={v.src} alt="" /></SwiperSlide>
                            ))}
							
						</Swiper>
                        <div className="blank"></div>
						{/* <nav className="rank">
							<ul>
								<li></li>
							</ul>
						</nav> */}
						<input
							type="text"
							placeholder="검색어를 입력하세요"
							className="search"
						/>
						<div className="search-icon"></div>
					</div>
				</div>
				<nav>
					<ul className="nav-menu">
                        {td.map((v,i)=>(
						<li>
							<Link to={v.src}>
								<a href="">{v.name}</a>
							</Link>
						</li>
                        ))}
					</ul>
				</nav>
			</div>
		</>
	);
}
