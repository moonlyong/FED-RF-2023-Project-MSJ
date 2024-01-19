import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { CardData } from "../data/card_data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
// import "../css/rank.css";
import "../css/cardslide.css";

import { EffectCards, Navigation } from "swiper/modules";

import $ from "jquery";
import { Banner } from "../module/Banner";
import { Shuffle } from "../module/Shuffle";
import { List } from "../module/List";
// window.jQuery = $;
require("jquery-ui-dist/jquery-ui");


// import required modules

export function Rank() {
	const shuffleList = Shuffle([...CardData].slice(0, 10)); // CardData를 복사하여 섞습니다.


	return (
		<>
		<Banner></Banner>
		{/* list모듈 사용 */}
		{List(shuffleList)}
			
		</>
	);
}
