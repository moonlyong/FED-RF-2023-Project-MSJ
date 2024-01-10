


import { Swiper, SwiperSlide } from "swiper/react";
// import { useState, useEffect } from "react";
// import { CardPick } from "./cardpick";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import "../css/cardslide.css";
import "./list.css";
// import "../css/settimeout.css";
import { EffectCards, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export function List(el) {
	const nav = useNavigate();
	const ClickData = (card) => {
		nav("/single", { state: { card } });
	};


	return (
		<>
			<ul className="rankbody">
				<Swiper
					effect={"cards"}
					grabCursor={true}
					navigation={true}
					modules={[EffectCards, Navigation]}
					className="rank-swiper"
				>
					{el.map((v, i) => (
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
            {/* </div> */}
		</>
	);
}
