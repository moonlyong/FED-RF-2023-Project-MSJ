import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "../css/top.css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';

import { Link } from "react-router-dom";
import $ from "jquery";
import { TopData } from '../data/top_banner_data';
import { Autoplay, Navigation } from 'swiper/modules';
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

export function Top() {
	return (
		<>
			<div id="top-area">
				<div className="bdl-gray top-area">
					<div className="topnav inner">
						<h1 className="top-logo">
							<Link to={"/"}>
									<img src="./img/logo.png" alt="" />
							</Link>
						</h1>
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
                            {TopData.map((v,i)=>(

							<SwiperSlide className='topsw'><img src={v.src} alt="" /></SwiperSlide>
                            ))}
							
						</Swiper>
                        <div className="blank"></div>
						<nav className="rank">
							<ul>
								<li></li>
							</ul>
						</nav>
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
						<li>
							<Link to={"/rank"}>
								<a href="">HOME</a>
							</Link>
						</li>
						<li>
							<Link to={"/rank"}>
								<a href="">TOP 10</a>
							</Link>
						</li>
						<li>
							<Link to={"/dragpick"}>
								<a href="">맞춤카드</a>
							</Link>
						</li>
						<li>
							<Link to={"/newcard"}>
								<a href="">이달의 카드</a>
							</Link>
						</li>
						<li>
							<Link to={"/allcard"}>
								<a href="">모든카드</a>
							</Link>
						</li>
						<li>
							<Link to={"/service"}>
								<a href="">고객센터</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
