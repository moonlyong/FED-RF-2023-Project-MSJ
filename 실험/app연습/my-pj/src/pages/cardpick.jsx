
import { Link } from "react-router-dom";
import { CardData } from "../data/card_data";
import { useEffect, useLayoutEffect } from "react";
import { CardImg1,CardImg2 } from "../module/CardSp";
import $ from 'jquery';
import { getCard } from "../func/sttshow";
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');


export function CardPick() {
    useEffect( ()=>{getCard()},[] )
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
