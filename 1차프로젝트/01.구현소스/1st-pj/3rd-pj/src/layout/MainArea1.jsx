import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { LogoData } from "../data/logodata";
import { MenuData } from "../data/menudata.js";
import { Link } from "react-router-dom";
import { TextEvent } from "../func/txtevent.js";

export function MainArea1(props) {
	useEffect(() => {
		TextEvent();
	}, []);
	const [visible, setVisible] = useState(1);

	const toggle = () => {
		setVisible(visible === 1 ? 2 : 1);
	};
	return (
		<>
			<section class="main-box main-1">
				<header className="header">
					<a href="https://tv.jtbc.co.kr/ckmonsters" target="blank">
						<h1 class="JTBC-logo"></h1>
					</a>
					<nav class="gnb">
						{visible === 1 ? (
							<ul class="menu-icon">
								{LogoData.map((v, i) => (
									<li class="blogo hide-menu" key={i}>
										<a href={v.src} class={v.name}>
											<img src={v.img} alt={v.name} />
										</a>
									</li>
								))}
							</ul>
						) : (
							<ul class="sub-menu">
								{MenuData.map((v, i) => (
									<li key={i}>
										<Link to={v.src}>{v.name}</Link>
									</li>
								))}
							</ul>
						)}
						<FontAwesomeIcon
							icon={faBars}
							className="menu-bar"
							onClick={toggle}
						/>
					</nav>
				</header>
				<div class="txt-area">
					<div class="txt-box_1">
						<p class="txt txt-1">
							<span class="font-3">Win or Nothing.</span>
							<br />
							<br />
							오직 승리만을 추구하는 사상 최강의 야구팀이 탄생했다.
							<br />
							“우리보다 최강인 팀은 절대 없을 겁니다”
							<br />
							프로야구팀에 대적할만한 11번째 구단
							<br />
							‘최강 몬스터즈’와 전국의 야구 강팀이 펼치는 양보 없는 대결!
							<br />
							야구에 미친 자들의 모든 걸 건 진짜 승부가 시작된다.
						</p>
						<p class="txt txt-2">
							<span class="font-2">출연진</span>
							<br />
							<br />
							김성근, 박용택, 송승준, 이택근, 정성훈, 이대호, 정근우, 장원삼
							<br />
							<br />
							<br />
							<span class="font-2">크리에이터</span>
							<br />
							<br />
							장시원, 최태규, 김은지, 김주아, 김현수, 최소망, 김세홍
						</p>
					</div>
				</div>
			</section>
		</>
	);
} //////////////// MainArea 컴포넌트 //////////
