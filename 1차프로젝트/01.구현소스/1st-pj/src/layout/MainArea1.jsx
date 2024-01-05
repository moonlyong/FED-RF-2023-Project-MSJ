// Pilot PJ 메인영역 공통 컴포넌트
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { LogoData } from "../data/logodata";
import { MenuData } from "../data/menudata.js";
import { Link } from "react-router-dom";


// 라우터 역할을 하는 MainArea 컴포넌트 ////////
export function MainArea1(props) {
	// props.page 속성값으로 main/men/women/style
	return (
		<>
			<section class="main-box main-1">
					<a href="https://tv.jtbc.co.kr/ckmonsters" target="_blank">
						<h1 class="JTBC-logo"></h1>
					</a>
                <nav class="gnb">
                    <ul class="menu-icon">
                        {LogoData.map((v,i)=>(
                            <li class="blogo hide-menu" key={i}>
                            <a href={v.src} class={v.name}
                              ><img src={v.img} alt={v.name}
                            /></a>
                          </li>
                        ))}
                    </ul>
                    <ul class="menu-icon sub-menu">
                    <div class="menu-color"></div>
                        {MenuData.map((v,i)=>(
                              <li key={i}>
                                <Link to={v.src}>{v.name}</Link>
                              </li>
                              
                        ))}
                    </ul>
                    <FontAwesomeIcon icon={faBars} className="menu-bar" />
                </nav>
			</section>
		</>
	);
} //////////////// MainArea 컴포넌트 //////////
