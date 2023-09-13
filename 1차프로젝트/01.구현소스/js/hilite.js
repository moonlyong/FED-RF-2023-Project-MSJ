// 새로고침시 첫페이지로 리셋하기
// 브라우저 스크롤바 위치캐싱
// setTimeout(() => window.scrollTo(0, 0), 500);

// 2. 이벤트 등록하기
// 대상: window
// window.addEventListener('click',wheelFn)

// 이벤트 연결하기

// DOM선택함수
const dqs = (x) => document.querySelector(x);
const qs = (a, b) => a.querySelector(b);
const dqsa = (x) => document.querySelectorAll(x);
const qsa = (a, b) => a.querySelectorAll(b);
const addevt = (ele, evt, fn) => ele.addEventListener(evt, fn);
const clog = (x) => console.log(x);

/******************************************** 
            함수명 linkFn
********************************************/
        /* 
        <li>
            <a href="./vodplayer.html"
                ><img
                    src="./이미지/프리뷰/preview.jpg"
                    alt=""
                />
                <h4 class="clip-tit">
                    [미공개] 콜드 패 위기에 굴하지 않고 슬로
                    커브 작렬하는 유희관
                </h4>
                <h6 class="clip-sub">메이킹영상</h6>
            </a>
        </li>
         */
