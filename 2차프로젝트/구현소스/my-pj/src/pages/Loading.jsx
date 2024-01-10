import { Link, useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import $ from "jquery";
import { LoadEft } from "../func/loading";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function Loading() {
	const nav = useNavigate();

	useEffect(() => {
		LoadEft(); // 로딩 효과 함수 실행

		// 2초 후에 /dragpick 으로 리디렉트
		const timer = setTimeout(
			() => {
				nav("/dragpick");
			},
			4500,
			"easeOutCubic"
		);

		// 컴포넌트 언마운트 시 타이머 클리어
		return () => clearTimeout(timer);
	}, []); // navigate를 종속성 배열에 추가
	return (
		<>
			<div id="middle-area" style={{ height: "100vh" }}>
				<div className="card-box">
					<div className="load-logo"></div>
					<img src="./img/card.png" alt="" />
					<div className="loading-bar">
						<div className="bar"></div>
					</div>
				</div>
			</div>
		</>
	);
} //////// MenSub 컴포넌트 ///////
