import { useEffect } from "react";
import { ATLogo } from "../data/atlogo";
import { BTLogo } from "../data/btlogo";
import { BallClick } from "../func/ballclick";
import { OnMouse } from "../func/onmouse";
import { Link } from "react-router-dom";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

export function MainArea4(props) {
	// let a = $(".logo-flex");
	// let ball1 = $(".ball-1");
	// let ball2 = $(".ball-2");
	// let ballbx = $(".ball-box");
	// let after = $(".after");
	// let before = $(".before");
	// let ballback = $(".ball-back");
	// props.page 속성값으로 main/men/women/style
	useEffect(() => {
		OnMouse();
	});
	return (
		<>
			<section class="main-box main-4">
				<div class="txt-logo main4-logo"></div>
				{/* 비포박스 */}
				<div class="before">
					<div class="bpbox">
						<ul>
							{BTLogo.map((v, i) => (
								<li class={v.plname} key={i}>
									<img src={v.plimg} alt="" />
								</li>
							))}
						</ul>
					</div>
					<ul class="logo-flex">
						{BTLogo.map((v, i) => (
							<li class={v.lgname} key={i}>
								<img src={v.lgimg} alt="" />
							</li>
						))}
					</ul>
				</div>
				{/* 비포박스 끝 에프터 박스 */}
				<div class="after">
					<div class="apbox">
						<ul>
							{ATLogo.map((v, i) => (
								<li class={v.plname}>
									<img src={v.plimg} alt="" />
								</li>
							))}
						</ul>
					</div>
					<div class="player-info">▲선수단 자세히보기▲</div>
				</div>
				<div class="ball-box ball-1">
					<div class="ball">
						<img src="./image/etc/ball.png" alt="" onClick={BallClick} />
					</div>
				</div>
				<div class="ball-back"></div>
				<div class="ball-box ball-2 dn">
					<div class="ball">
						<Link to={"/playerinfo"}></Link>
						<img src="./image/etc/ball.png" alt="" />
					</div>
					<div class="ball-back"></div>
				</div>
			</section>
		</>
	);
} //////////////// MainArea 컴포넌트 //////////
