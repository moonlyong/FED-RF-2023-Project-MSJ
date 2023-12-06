// DC.com 레이아웃 컴포넌트

import { createContext, useContext, useEffect, useState } from "react";
import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";
import { useLocation } from "react-router-dom";
import { getCard } from "../func/sttshow";
import { autoScroll } from "../func/jquery-autoScroll";

export function Layout(){
  useEffect(() => {
    // 랜더링 후 한번만 적용!
    // console.log("랜더링OK!");

    //자동스크롤 호출
    autoScroll();

    //드래그배너 호출
  })
  
  const location = useLocation();
  
  // 'cardpick' 라우트에 있을 때 TopArea를 숨기는 로직
  const showTopArea = location.pathname !== '/' && location.pathname !== '/cardpick';
const showBotArea = location.pathname !== '/' && location.pathname !== '/cardpick' && location.pathname !== '/dragpick' 
    return(
      <>
     {showTopArea && <TopArea />}
      {<MainArea />}
      {showBotArea && <FooterArea/>}
      </>

    );

} /////////// Layout 컴포넌트 ///////////