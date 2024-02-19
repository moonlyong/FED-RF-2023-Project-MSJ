// DC.com 레이아웃 컴포넌트

import { createContext, useContext, useEffect, useState } from "react";
import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";
import { useLocation } from "react-router-dom";
import { getCard } from "../func/sttshow";
import { autoScroll } from "../func/jquery-autoScroll";

export function Layout() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const showCard = queryParams.get("showCard");
	useEffect(() => {
		// 랜더링 후 한번만 적용!
		// console.log("랜더링OK!");

		//자동스크롤 호출
		autoScroll();

		//드래그배너 호출
	});

	// 'cardpick' 라우트에 있을 때 TopArea를 숨기는 로직
	return (
		<>
			{<TopArea />}
			{<MainArea />}
			{<FooterArea />}
		</>
	);
} /////////// Layout 컴포넌트 ///////////
