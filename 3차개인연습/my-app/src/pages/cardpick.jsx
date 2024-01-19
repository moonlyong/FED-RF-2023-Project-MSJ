import { CardUrl } from "../data/card_url";
import { useEffect, useLayoutEffect } from "react";
import { CardImg1, CardImg2 } from "../module/CardSp";
import $ from "jquery";
import { getCard } from "../func/sttshow";
import "../css/cardpick.css";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function CardPick() {
	useEffect(() => {
		getCard();
	},[]);

	return (
		<>
			<div id="middle-area" style={{ height: "100vh" }}>
				<div className="link-next">
					<div className="loading">
						<div className="loadingtxt">데이터 수집중</div>
						<div className="loadingbx">
							<div className="loadingbar"></div>
						</div>
					</div>
				</div>
				<div className="container1 card-circle">
					{CardUrl.map(
						(v, i) =>
							Number(v.idx) <= 10 && (
								<CardImg1 key={v.idx} index={i} isrc={v.src} />
							)
					)}
				</div>
				<div className="container2 card-circle">
					{CardUrl.map(
						(v, i) =>
							Number(v.idx) > 10 && (
								<CardImg2 key={v.idx} index={i} isrc={v.src} />
							)
					)}
				</div>
			</div>
		</>
	);
} 
