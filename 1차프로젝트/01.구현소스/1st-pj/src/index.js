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
				<Route path="/" element={<Main />}>
					{/* 하위 라우트 셋팅 
          - path대신 index만 쓰면 첫페이지로 로딩함! 
          -> path는 Layout의 Link to="/" 에 해당하는 셋팅*/}

					{/* <Route index element={<Loading />} />
          <Route path='dragpick' element={<DragPick />} />
          <Route path="mypick" element={<MyPick />} />
          <Route path="single" element={<Single />} />
          <Route path="allcard" element={<AllCard />} />
          <Route path="service" element={<Service />} />
          <Route path="rank" element={<Rank />} />
          <Route path="newcard" element={<NewCard />} /> */}
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
