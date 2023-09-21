// 1-1 페이지 변수
let pg_num = 0;
let sts_wheel = 0;
// 전체 페이지수
let total_page;


// 새로고침시 첫페이지로 리셋하기
// 브라우저 스크롤바 위치캐싱
// setTimeout(() => window.scrollTo(0, 0), 500);

// 2. 이벤트 등록하기
// 대상: window
window.addEventListener("wheel", wheelFn);
window.addEventListener("DOMContentLoaded", loadFn);
// window.addEventListener('click',wheelFn)

// 이벤트 연결하기

// DOM선택함수
const dqs = (x) => document.querySelector(x);
const qs = (a, b) => a.querySelector(b);
const dqsa = (x) => document.querySelectorAll(x);
const qsa = (a, b) => a.querySelectorAll(b);
const addevt = (ele, evt, fn) => ele.addEventListener(evt, fn);
const clog = (x) => console.log(x);

/**********************************************
        함수명 loadFn
        기능 html 로딩후 싷랭 코드구역
**********************************************/

function loadFn() {
    // console.log("로딩완료");


    total_page = dqsa(".main-box").length;

    // 클릭시 로고 숨기기
    const bar = dqs(".menu-bar");
    // 숨길대상선택
    const menuIcon = dqs('.menu-icon');
    // clog(bar);
        bar.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();

            // clog("오버");
            menuIcon.classList.toggle('on');


        };
    // console.log("페이지수", total_page);
    // startSS()
}
/******************************************** 
     함수명 linkFn
     https://www.netflix.com/kr/title/81614459
     https://www.tving.com/contents/P001609758
     https://www.disneyplus.com/ko-kr/series/a-clean-sweep/7MipMuyGlPHc
     ********************************************/

const link = dqsa(".menu-icon a");
// clog(link);
link.forEach((ele) => addevt(ele, "click", linkFn));

function linkFn() {
    // clog(this.className);
    let acls = this.className;

    event.preventDefault();
    let url;

    switch (acls) {
        case "netflix":
            url = "https://www.netflix.com/kr/title/81614459";
            break;
        case "tving":
            url = "https://www.tving.com/contents/P001609758";
            break;
        case "disney":
            url =
                "https://www.disneyplus.com/ko-kr/series/a-clean-sweep/7MipMuyGlPHc";
            break;
        case "프로그램소개":
            url = "./index.html";
            break;
        case "하이라이트":
            url = "./hilite.html";
            break;
        case "선수단소개":
            url = "";
            break;
    }
    // clog(url);
    if(!url) return;
    window.open(url);
}
//////txt 박스 1초후 나오기
const txtbox = dqs('.txt-box_1')
// clog(txtbox);
setTimeout(()=>{
    txtbox.classList.add('on')
},1000)
const txt2 = dqs('.txt-2')
setTimeout(()=>{
    txt2.classList.add('on')
},3000)
setTimeout(()=>{
    txt2.classList.add('show')
},1500)
/******************************************** 
        함수명 wheelFn
        기능: 마우스 휠 작동시 페이지 이동
********************************************/

function wheelFn(e) {
    //이벤트 전달변수(자동)
    // 함수호출
    // console.log("휠이벤스");

    // 광클금지
    if (sts_wheel) return;
    sts_wheel = 1; //
    setTimeout(() => (sts_wheel = 0), 800);
    // console.log('11')

    // 1. 휠방향에 따른 페이지변수 변경하기
    // 휠방향은 wheelDelta로 알아냄
    let delta = e.wheelDelta;
    // console.log("윌델타", delta);

    // 음수 는 아랫방향 양수는 윗방향
    if (delta < 0) pg_num++;
    else pg_num--;
    // 페이지 번호 확인
    console.log("페이지번호는?", pg_num);

    // 제한주기(양끝페이지 고정)
    if (pg_num < 0) pg_num = 0;
    if (pg_num > total_page) pg_num = total_page - 1;

    // 2. 페이지 이동하기
    // scrollTo(x, y)
    // 세로방향이동은 두번째 값만 주면 된다
    // 스크롤 애니메이션은 html-behavior:smooth 로 처리
    // 화면단위로 이동하므로 윈도우 높이값을 기본값으로 처리
    // window.innerHeight -> window 높이값 구해온다

    window.scrollTo(0, window.innerHeight * pg_num);

    const hlink_iframe = dqs('.hilite_link iframe')
    const linkbx = dqs('.linkbox')

    if(delta=2){ // 아래로 내려갈때 - 자동플레이
        hlink_iframe.src=
        'https://www.youtube.com/embed/Z-x4LIovPD4?autoplay=true&hl=';

        setTimeout(()=>{ 
            hlink_iframe.classList.add('dn');
            linkbx.classList.remove('dn');
            },62000)
    } ///// if ////////////
    else{ // 위로 올라올때 - 멈춤
        hlink_iframe.src=
        'https://www.youtube.com/embed/Z-x4LIovPD4';
    }

    const tlogo = dqsa('.logo-flex li');
    console.log(tlogo);

    if(delta=3){
        tlogo.classList.add('mv');
    }

}

// 오버시 움직이는 배경
// 이벤트 대상
// 대상 메뉴컬러
const subMenu = dqsa('.sub-menu li');
const mbc = dqs('.menu-color')
// clog(subMenu)
// clog(mbc)
subMenu.forEach(ele=>{
    addevt(ele,'mouseover',overFn)
    addevt(ele,'mouseout',outFn)
})
function overFn(){
    // 오버된 li의 left위치값
    let posL = this.offsetLeft
    console.log('위치',posL)
    mbc.style.opacity = 1
    mbc.style.left = posL + 'px'

}
function outFn(){
    console.log('아웃',this)
    // 사라지기
    mbc.style.opacity = 0
}
// main4 tlogo for문
const before = dqs('.before')


let hcode = ''

for(let i=0; i<10;i++){
    hcode +=
    `
    <li class="tlogo tlogo-${i+1}">
        <img src="./image/logo/tlogo${i+1}-B.png" alt="">
    </li>
    `
}
hcode = `
<div class="bpbox"></div>
<ul class="logo-flex">${hcode}</ul> 

`
before.innerHTML = hcode 
// clog(hcode)
// console.log(hcode)
const bpbox = dqs('.bpbox')
let pcode = ''
for(let i=0; i<5; i++){
    pcode +=`
    <li class="bplayer-${i+1}">
    <img src="./image/player/Bplayer-${i+1}.png" alt="">
    </li>
    `
}
pcode = `<ul>${pcode}</ul>`
bpbox.innerHTML = pcode

const apbox = dqs('.apbox')
let acode = ''
for(let i=0; i<6; i++){
    acode +=`
    <li class="player-${i+1}">
    <img src="./image/player/player-${i+1}.png" alt="">
    </li>
    `
}

acode = `<ul>${acode}</ul>`
apbox.innerHTML = acode
