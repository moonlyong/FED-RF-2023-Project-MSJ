// 메인 페이지 JS - index.js
import React, { useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Layout } from "./layout/Layout";
import { DragPick } from './pages/dragpick';
import { CardPick } from './pages/cardpick';


// 페이지 공통 CSS
import './css/common.css';

// 최상위 Root 컴포넌트 ///////
function App(){

  // 후크상태변수 설정 : 페이지변경
  const [pgName,setPgName] = useState('main');

  // 페이지변경 상태변수 업데이트 함수
  const chgPgName = (txt) => {
    setPgName(txt);
  }; ///////// chgPgName 함수 //////

  return(
    <BrowserRouter>
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
          - path대신 index만 쓰면 첫페이지로 로딩함! 
          -> path는 Layout의 Link to="/" 에 해당하는 셋팅*/}
          
          <Route index element={<DragPick />} />
          <Route path="cardpick" element={<CardPick />} />
          {/* <Route path="comics" element={<Comics />} /> */}
          {/* <Route path="movies" element={<Movies />} /> */}
          {/* <Route path="games" element={<Games />} /> */}
          {/* <Route path="news" element={<News />} /> */}
          {/* <Route path="video" element={<Video />} /> */}
          {/* <Route path="board" element={<SwiperApp />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      // <>
      //   <TopArea cat={pgName} />        
      //   <MainArea page={pgName} />
      //   <FooterArea />
      // </>
      
  )

} ///////////// App 컴포넌트 /////////////


// 출력하기 ///////
const root = createRoot(document.querySelector('#root'));
root.render(<App />)