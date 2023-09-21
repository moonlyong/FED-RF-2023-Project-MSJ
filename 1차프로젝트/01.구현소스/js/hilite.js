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

/******************************************** 
            forin문
********************************************/
const vodUl = domFn.dqs('.vod-ul')
console.log(vodUl)

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

hcode = `<ul>${hcode}</ul><ul>${hcode}</ul>`
// console.log(hcode)

vodUl.innerHTML = hcode