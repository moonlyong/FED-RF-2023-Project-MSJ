import { useEffect } from "react";
// import $ from 'jquery';
// window.jQuery = $;
// require('jquery-ui-dist/jquery-ui');
// require('jquery-ui-touch-punch/jquery.ui.touch-punch');
import { dragIcon } from "../func/darg";

import { pickdata } from "../data/data";
import { Link } from "react-router-dom";
export function DragPick() {
    useEffect(()=>{
        dragIcon();

    })
    return (
        <>
            <div id="middle-area">
                <div id="icon-box" className="inner">
                    <ul>
                        {pickdata.map((v, i) => (
                            <li className="icon" key={i}>
                                <span>{v.tit}</span>
                                <i className="moz">{v.imoz}</i>
                                <p>{v.txt}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div id="bottom-area">
                <div className="bottom-area inner">
                    <h2>원하는 혜택들을 넣고 카드를 발급받으세요!</h2>
                    <div className="basket">
                        <Link to={"/cardpick"}>
                            <button>발급</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
} //////// MenSub 컴포넌트 ///////
