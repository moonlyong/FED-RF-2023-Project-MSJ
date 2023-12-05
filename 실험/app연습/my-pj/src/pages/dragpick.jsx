import "../css/drag.css";

import { useEffect, useState } from "react";
// import $ from 'jquery';
// window.jQuery = $;
// require('jquery-ui-dist/jquery-ui');
// require('jquery-ui-touch-punch/jquery.ui.touch-punch');
import { dragIcon } from "../func/darg";

import { pickdata } from "../data/data";
import { useNavigate } from "react-router-dom";
   

export function DragPick() {
    const [basketItems, setBasketItems] = useState([]); // 바구니 아이템을 위한 상태
    const navigate = useNavigate(); // 프로그래밍 방식으로 네비게이션을 위한 훅
    useEffect(()=>{
        dragIcon(setBasketItems);
    },[])
    const handle = () => {

        // '/cardpick' 경로로 네비게이션하면서 상태를 전달합니다.
        navigate('/cardpick', { state: { items: basketItems } });
        console.log('i객체:', basketItems);
    }
    return (
        <>
            <div className="middle-ex">
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
                    <button onClick={handle}>발급</button>
                    </div>
                </div>
            </div>
        </>
    );
} //////// MenSub 컴포넌트 ///////
