


import { Swiper, SwiperSlide } from "swiper/react";
// import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { CardData } from "../data/card_data";
// import { CardPick } from "./cardpick";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import "../css/cardslide.css";
import "../module/list.css";
// import "../css/settimeout.css";
import { EffectCards, Navigation } from "swiper/modules";
import { FadeOut } from "../func/fadeout";
import { Banner } from "../module/Banner";
import { List } from "../module/List";

export function MyPick() {
	// const [showCard, setShowCard] = useState(true);
	const loc = useLocation();
	const basketItems = loc.state?.items || [];
	const cardScores = CardData.map((card) => {
		const score = card.info.reduce((acc, infoItem) => {
			return acc + (basketItems.includes(infoItem) ? 1 : 0);
		}, 0);
		return { ...card, score };
	});

	const sortedMyItems = cardScores.sort((a, b) => b.score - a.score);


	return (
		<>
			{/* <Banner></Banner> */}
			{/* list 모듈 사용 */}
			{List(sortedMyItems)}
		</>
	);
}
