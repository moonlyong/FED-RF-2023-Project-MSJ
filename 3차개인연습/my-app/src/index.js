// 메인 페이지 JS - index.js
import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {BrowserRouter, HashRouter, Route, Routes, useNavigate} from "react-router-dom"
import { Layout } from "./layout/Layout";


// 페이지 공통 CSS
import './css/common.css';
import { Popol } from './pages/popol';
import { Rank } from './pages/rank';
import { Service } from './pages/service';
import { MyStory } from './pages/mystory';
import { MyPick } from './pages/mypick';
import { Single } from './pages/single';
import { Education } from './module/mypage/Edu';
import { Experience } from './module/mypage/Exp';
import { Skills } from './module/mypage/Skills';
import { Projects1 } from './module/mypage/Pj1';
import { Projects2 } from './module/mypage/Pj2';
import { Posnav } from './module/mypage/posnav';
import { After } from './module/mypage/after';
import { History } from './module/mypage/history';

// 최상위 Root 컴포넌트 ///////
function App(){
  

  return(
    // <HashRouter>
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyPick />} />
          <Route path="single" element={<Single />} />
          <Route path="mystory" element={<MyStory />} />
          <Route path="myspec" element={<Service />} />
          <Route path="myinfo" element={<Rank />} />
          <Route path="mypopol" element={<Popol />} />
          <Route path="/1" element={<Education />} />
				<Route path="/2" element={<Experience />} />
				<Route path="/3" element={<Skills />} />
				<Route path="/4" element={<Projects1 />} />
				<Route path="/5" element={<Projects2 />} />
				<Route path="/6" element={<Posnav />} />
				<Route path="/7" element={<After />} />
				<Route path="/8" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </HashRouter>

      
  )

} ///////////// App 컴포넌트 /////////////


// 출력하기 ///////
const root = createRoot(document.querySelector('#root'));
root.render(<App />)