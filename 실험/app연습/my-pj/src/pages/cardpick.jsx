
import { Link } from "react-router-dom";
import { CardData } from "../data/card_data";
import { useEffect } from "react";
import { CardImg1,CardImg2 } from "../module/CardSp";
import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');

let Top = $('#top-area')

export function CardPick() {
    return (
        <>
            <div id="middle-area">
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
            <div className="bottom-area"></div>
        </>
    );
} //////// MenSub 컴포넌트 ///////
