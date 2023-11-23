// DC.com 레이아웃 컴포넌트

import { createContext, useContext, useEffect, useState } from "react";
import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";
import { useLocation } from "react-router-dom";
import { getCard } from "../func/sttshow";

export function Layout(){

  const location = useLocation();
  
  // 'cardpick' 라우트에 있을 때 TopArea를 숨기는 로직
  const showTopArea = location.pathname !== '/' && location.pathname !== '/cardpick';

    return(
      <>
     {showTopArea && <TopArea />}
      {<MainArea />}
      </>

    );

} /////////// Layout 컴포넌트 ///////////