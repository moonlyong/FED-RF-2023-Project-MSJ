import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "../css/top.css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';

import { Link } from "react-router-dom";
import $ from "jquery";
import { TopBannerData } from '../data/top_banner_data';
import { TopData } from '../data/topdata';
import { Autoplay, Navigation } from 'swiper/modules';
import { Top } from '../module/Top';
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

export function Topsec() {


	return (
		<>

		{Top("mytop","./img/logo.png",TopBannerData,TopData)}
		</>
	);
}
