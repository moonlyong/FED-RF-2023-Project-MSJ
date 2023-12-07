// 메인 페이지 JS - index.js
import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import { Layout } from "./layout/Layout";
import { DragPick } from './pages/dragpick';


// 페이지 공통 CSS
import './css/common.css';
import { getCard } from './func/sttshow';
import { Loading } from './pages/Loading';
import { NewCard } from './pages/newcard';
import { Rank } from './pages/rank';
import { Service } from './pages/service';
import { AllCard } from './pages/allcard';
import { MyPick } from './pages/mypick';
import { Single } from './pages/single';

// 최상위 Root 컴포넌트 ///////
function App(){
  

  return(
    <BrowserRouter>
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
          - path대신 index만 쓰면 첫페이지로 로딩함! 
          -> path는 Layout의 Link to="/" 에 해당하는 셋팅*/}
          
          <Route index element={<Loading />} />
          <Route path='dragpick' element={<DragPick />} />
          <Route path="mypick" element={<MyPick />} />
          <Route path="single" element={<Single />} />
          <Route path="allcard" element={<AllCard />} />
          <Route path="service" element={<Service />} />
          <Route path="rank" element={<Rank />} />
          <Route path="newcard" element={<NewCard />} />
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