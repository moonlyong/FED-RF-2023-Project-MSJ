import { useEffect } from "react";
import { VodSwiper } from "../modules/VodSwiper";

export function Hilite() {
	useEffect(() => {
		import("../css/hilite.css");
	}, []);
	return (
		<>
			<section id="hilite-body">
				<div class="top-area">
					<div class="left_box">
						<div class="go-back">
							<a href="/">＜＜</a>
						</div>
						<div class="top-goods"></div>
					</div>
					<div class="right_box">
						<a href="https://tv.jtbc.co.kr/ckmonsters" target="_blank">
							<h1 class="JTBC-logo"></h1>
						</a>
					</div>
				</div>
				<div class="middle-area">
					<a
						href="https://smartstore.naver.com/ckmonsters"
						target="_blank"
						class="shoplink_1"
					></a>
					<a
						href="https://smartstore.naver.com/ckmonsters"
						target="_blank"
						class="shoplink_2"
					></a>
				</div>
				<div class="bottom-area">
					<div class="preview">
						<h2>미리보기</h2>
						<div class="preview-clip">
							<span class="clip-img">
								<img src="./image/preview/preview1.jpg" alt="" />
							</span>
							<span class="clip-info">
								<span class="clip-tit">
									최강야구 다음이야기 - 최강의 이름을 건 대결
								</span>
								<span class="clip-date">2023.09.18 (월)</span>
								<span class="clip-tag">
									#최강야구 #최강야구예고편 #최강야구동국대2차전 #동국대야구부
								</span>
							</span>
						</div>
					</div>
					<div class="goods-banner">
						<a href="https://smartstore.naver.com/ckmonsters" target="_blank">
							<img src="./image/goods/doll.png" alt="" />
							<img src="./image/goods/keyring.png" alt="" />
							<img src="./image/goods/new_pink.png" alt="" />
							<img src="./image/goods/cap.png" alt="" />
						</a>
					</div>
				</div>
				<div class="vod">
					<h2>VOD</h2>
				</div>
				<div class="vod-box">
					<VodSwiper />
					<div class="bttn">
						<button class="ab1">＜</button>
						<button class="ab2">＞</button>
					</div>
				</div>
			</section>
		</>
	);
}
