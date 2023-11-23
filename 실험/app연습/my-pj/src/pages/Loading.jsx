
import { Link, useNavigate } from "react-router-dom";
import { CardData } from "../data/card_data";
import { useEffect, useLayoutEffect } from "react";
import { CardImg1,CardImg2 } from "../module/CardSp";
import $ from 'jquery';
import { LoadEft } from "../func/loading";
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');


export function Loading() {
    const nav = useNavigate();

    useEffect(() => {
        LoadEft(); // 로딩 효과 함수 실행
        
        // 2초 후에 /dragpick 으로 리디렉트
        const timer = setTimeout(() => {
            nav('/dragpick');
        }, 5000,);

        // 컴포넌트 언마운트 시 타이머 클리어
        return () => clearTimeout(timer);
    }, [nav]); // navigate를 종속성 배열에 추가
    return (
        <>  
            <div id="middle-area" style={{height:"100vh"}}>
                <div className="container1 card-circle">
                    {CardData.map((v, i) => Number(v.idx) <= 10 && (
                        <CardImg1 key={v.idx} index={i} isrc={v.src} />
                    ))}
                </div>
                <div className="container2 card-circle">
                {CardData.map((v, i) =>  Number(v.idx) > 10 && (
                        <CardImg2 key={v.idx} index={i} isrc={v.src} />
                    ))}
                </div>
            </div>
        </>
    );
} //////// MenSub 컴포넌트 ///////
