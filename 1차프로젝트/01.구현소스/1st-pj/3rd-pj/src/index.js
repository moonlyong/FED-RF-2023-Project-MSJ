import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./page/Main";
import { autoScroll } from "./func/jquery-autoScroll";
import {
	BrowserRouter,
	HashRouter,
	Route,
	Routes,
	useNavigate,
} from "react-router-dom";
import { Hilite } from "./page/Hilite";
import { PlayerInfo } from "./page/PlayerInfo";

function App() {
	useEffect(() => {
		// 랜더링 후 한번만 적용!
		// console.log("랜더링OK!");

		//자동스크롤 호출
		autoScroll();

		//드래그배너 호출
	}, []); /////// useEffect ///////////
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				{/* 중요!!! 레이아웃 컴포넌트를 루트로 설정! */}
				<Route>
					<Route path="/" element={<Main />} />
					<Route path="/hilite" element={<Hilite />} />
					<Route path="/playerinfo" element={<PlayerInfo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
