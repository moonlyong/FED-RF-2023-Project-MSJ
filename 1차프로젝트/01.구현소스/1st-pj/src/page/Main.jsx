import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { FooterArea } from '../layout/FooterArea';
import { MainArea1 } from '../layout/MainArea1';
import { MainArea2 } from '../layout/MainArea2';
import { MainArea3 } from '../layout/MainArea3';
import { MainArea4 } from '../layout/MainArea4';
import '../css/main.css';
import { autoScroll } from '../func/jquery-autoScroll';

export function Main(){
  useEffect(() => {
    // 랜더링 후 한번만 적용!
    // console.log("랜더링OK!");

    //자동스크롤 호출
    autoScroll();

    //드래그배너 호출
  }, []); /////// useEffect ///////////
    return (
        <>
        <MainArea1 />
        <MainArea2 />
        <MainArea3 />
        <MainArea4 />
        <FooterArea />
      </>
    )
}