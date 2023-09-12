

// 새로고침시 첫페이지로 리셋하기
// 브라우저 스크롤바 위치캐싱
setTimeout(() => window.scrollTo(0, 0), 500);

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

