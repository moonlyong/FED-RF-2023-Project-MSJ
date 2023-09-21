// 새로고침시 첫페이지로 리셋하기
// 브라우저 스크롤바 위치캐싱
// setTimeout(() => window.scrollTo(0, 0), 500);

// 2. 이벤트 등록하기
// 대상: window
// window.addEventListener('click',wheelFn)

// 이벤트 연결하기

// DOM선택함수
const domFn ={
    dqs: (x) => document.querySelector(x),
    qs: (a, b) => a.querySelector(b),
    dqsa: (x) => document.querySelectorAll(x),
    qsa: (a, b) => a.querySelectorAll(b),
    addevt: (ele, evt, fn) => ele.addEventListener(evt, fn),
    clog: (x) => console.log(x),
} 
let clickSts = 0;
const TIME_SLIDE = 400;

const bttn = domFn.dqsa('.bttn button')
console.log(bttn)

bttn.forEach(ele=>domFn.addevt(ele,'click',clickFn))

function clickFn(){
    if(clickSts) return;//나가!
    clickSts=1;//잠금!
    setTimeout(()=>clickSts=0,TIME_SLIDE);//해제!
    let li = domFn.dqsa('.vod-ul ul li')
    console.log(li)
    let rbt = this.classList.contains('ab2')
    let vodul = domFn.dqsa('.vod-ul ul')
    console.log(vodUl)
    if(rbt){
        vodul.style.left = '-353px'
        vodul.style.transition = 
                TIME_SLIDE+'ms ease-in-out';

        setTimeout(() => {
            // 3.맨앞li 맨뒤로 이동
            vodul.appendChild(li[0]);
            // 4.slide top값 0
            vodul.style.top = '0';
            // 5.트랜지션 없애기
            vodul.style.transition = 'none';
        }, TIME_SLIDE);
    }
    else{
        vodul.insertBefore(
            li[li.length-1], li[0]);
        // 2. top값 -100% 만들기 : 들어올 준비 위치!
        vodul.style.left = '-353px';
        vodul.style.transition = 'none';
            
        // 같은 top값을 동시에 변경하면 효과가 없음!
        // 비동기적으로 처리해야함!
        // -> setTimeout으로 싸주기!
        // 시간은 0이어도 비동기 처리므로 효과있음!

        setTimeout(() => {
            // 4. top값 0으로 들어오기
            vodul.style.left = '0';
            
            // 5. 트랜지션주기
            vodul.style.transition = 
                TIME_SLIDE+'ms ease-in-out';

        }, 0);

    }
}

/******************************************** 
            forin문
********************************************/
const vodUl = domFn.dqs('.vod-ul')
// console.log(vodUl)

let hcode = ""

for(let x in clipDate){
    hcode += `
        <li>
            <a href="${clipDate[x]["링크"]}"
                ><img
                    src="./image/preview/${x}.jpg"
                    alt=""
                />
                <h4 class="subclip-tit">
                    ${clipDate[x]["제목"]}
                </h4>
                <h6 class="subclip-tag">${clipDate[x]["태그"]}</h6>
            </a>
        </li>
    `
}

hcode = `<ul>${hcode}</ul>`
// console.log(hcode)
let acode = ""

for(let x in clipDate2) {
    acode += `
        <li>
            <a href="${clipDate2[x]["링크"]}"
                ><img
                    src="./image/preview/${x}.jpg"
                    alt=""
                />
                <h4 class="subclip-tit">
                    ${clipDate2[x]["제목"]}
                </h4>
                <h6 class="subclip-tag">${clipDate2[x]["태그"]}</h6>
            </a>
        </li>
    `
}

acode = `<ul>${acode}</ul>`
// console.log(acode)

vodUl.innerHTML = hcode + acode