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
const vodUl = domFn.dqs('.vod-ul')



/******************************************** 
            forin문
********************************************/
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

hcode = `<div class="clip-ul1"><ul>${hcode}</ul></div>`
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

acode = `<div class="clip-ul2"><ul>${acode}</ul></div>`
// console.log(acode)

vodUl.innerHTML = hcode + acode


const ulBox1 = domFn.dqs('.clip-ul1 ul')
const ulBox2 = domFn.dqs('.clip-ul2 ul')

const lbt = domFn.dqs('.ab1')
console.log(lbt)
domFn.addevt(lbt,'click',movlFn)
function movlFn() {
    console.log('dd')
    let li1 = domFn.dqsa('.clip-ul1 ul li')[0]
    let li2 = domFn.dqsa('.clip-ul2 ul li')[0]
    console.log(li1)
    ulBox1.appendChild(li1)
    ulBox2.appendChild(li2)
}
const rbt = domFn.dqs('.ab2')
console.log(rbt)
domFn.addevt(rbt,'click',movrFn)

function movrFn() {
    console.log('dd')
    let li1 = domFn.dqsa('.clip-ul1 ul li')
    let li2 = domFn.dqsa('.clip-ul2 ul li')
    ulBox1.insertBefore(li1[li1.length-1],li1[0])
    ulBox2.insertBefore(li2[li2.length-1],li2[0])
}
