import { Link } from "react-router-dom";
import { CardData } from "../data/card_data";
import { useEffect, useLayoutEffect } from "react";
import { CardImg1, CardImg2 } from "../module/CardSp";
import $ from "jquery";
import { getCard } from "../func/sttshow";
import "../css/cardpick.css";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function CardPick() {
    useEffect(() => {
        getCard();
    }, []);
    return (
        <>
            <div id="middle-area" style={{ height: "100vh" }}>
                <Link to={"/mypick"}>
                    <div className="link-next">
                        <div className="loading">
                            <div className="loadingtxt">데이터 수집중</div>
                            <div className="loadingbx">
                                <div className="loadingbar"></div>
                            </div>
                        </div>
                        <Link to={"/mypick"}></Link>
                        <a href="">
                            <img src="./img/button.png" alt="" />
                            <p>Click!</p>
                        </a>
                    </div>
                </Link>
                <div className="container1 card-circle">
                    {CardData.map(
                        (v, i) =>
                            Number(v.idx) <= 10 && (
                                <CardImg1 key={v.idx} index={i} isrc={v.src} />
                            ),
                    )}
                </div>
                <div className="container2 card-circle">
                    {CardData.map(
                        (v, i) =>
                            Number(v.idx) > 10 && (
                                <CardImg2 key={v.idx} index={i} isrc={v.src} />
                            ),
                    )}
                </div>
            </div>
        </>
    );
} //////// MenSub 컴포넌트 ///////
