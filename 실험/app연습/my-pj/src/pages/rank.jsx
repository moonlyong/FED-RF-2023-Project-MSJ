import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { CardData } from "../data/card_data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import "../css/rank.css";
import "../css/cardslide.css";

import { EffectCards, Navigation } from "swiper/modules";

import $ from "jquery";
import { Banner } from "../module/Banner";
// window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// import required modules

export function Rank() {
	const nav = useNavigate();
	const shuffleList = shuffle([...CardData].slice(0, 10)); // CardData를 복사하여 섞습니다.

	const ClickData = (card) => {
		nav("/single", { state: { card } });
	};

	return (
		<>
		<Banner></Banner>
			<ul className="rankbody">
				<Swiper
					effect={"cards"}
					grabCursor={true}
					navigation={true}
					modules={[EffectCards, Navigation]}
					className="rank-swiper"
				>
					{shuffleList.map((v, i) => (
						<SwiperSlide className="ranksw">
							<li key={i} className="rankli">
								<img src={v.src} alt="" onClick={() => ClickData(v)} />
								<h1>
									{i == 0 && <span>🥇</span>}
									{i == 1 && <span>🥈</span>}
									{i == 2 && <span>🥉</span>}
									{i >= 3 && <span className="sp1">{i + 1}</span>}. {v.name}
								</h1>
								<h2>{v.com}</h2>
								<h3 className="p1">
									<p>{v.txt[0]}</p>
									<p>{v.txt[1]}</p>
									<p>{v.txt[2]}</p>
								</h3>
								<h3 className="p2">
									<span>연회비</span>
									<p>{v.cost}</p>
								</h3>
								<h3 className="p3">
									<p>{v.etc[1]}</p>
									<p>{v.etc[2]}</p>
								</h3>
								<h3 className="p4">
									<span>{v.etc[0]}</span>
								</h3>
							</li>
						</SwiperSlide>
					))}
				</Swiper>
			</ul>
		</>
	);
}
