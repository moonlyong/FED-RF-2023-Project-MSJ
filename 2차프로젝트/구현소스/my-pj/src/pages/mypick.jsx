


import { Swiper, SwiperSlide } from "swiper/react";
// import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { CardData } from "../data/card_data";
// import { CardPick } from "./cardpick";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import "../css/cardslide.css";
import "../css/rank.css";
// import "../css/settimeout.css";
import { EffectCards, Navigation } from "swiper/modules";
import { FadeOut } from "../func/fadeout";
import { Banner } from "../module/Banner";

export function MyPick() {
	// const [showCard, setShowCard] = useState(true);
	const nav = useNavigate();
	const loc = useLocation();
	const basketItems = loc.state?.items || [];
	// console.log("Basket Items:", basketItems); // basketItems 내용 확인

	// const [searchParams, setSearchParams] = useSearchParams();

	// useEffect(() => {
	// 	FadeOut();
	// }, []);
	//     setSearchParams({ showCard: "true" });

	// 	const timer = setTimeout(() => {
	// 		setShowCard(false);
	//         setSearchParams({});
	// 	}, 5000);

	// 	return () => clearTimeout(timer);

	const ClickData = (card) => {
		nav("/single", { state: { card } });
	};

	const cardScores = CardData.map((card) => {
		const score = card.info.reduce((acc, infoItem) => {
			return acc + (basketItems.includes(infoItem) ? 1 : 0);
		}, 0);
		return { ...card, score };
	});

	// const cardScores = CardData.map(card => {
	//     const score = card.info.reduce((acc, infoItem) => {
	//         return acc + (basketItems.includes(infoItem) ? 1 : 0);
	//     }, 0);
	//     return { ...card, score }; // 각 CardData 항목에 점수 추가
	// });

	// console.log("Card Scores:", cardScores); // 점수 확인을 위한 로그

	const sortedMyItems = cardScores.sort((a, b) => b.score - a.score);
	//  console.log("Sorted Items:", sortedMyItems); // 정렬된 결과 확인을 위한 로그

	// MyItems 필터링

	return (
		<>
			{/* <div className="card-pick-fade-out">
				<CardPick />
			</div> */}
            {/* <div className="fade-in"> */}
			<Banner></Banner>
			<ul className="rankbody">
				<Swiper
					effect={"cards"}
					grabCursor={true}
					navigation={true}
					modules={[EffectCards, Navigation]}
					className="rank-swiper"
				>
					{sortedMyItems.map((v, i) => (
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
