// 객체
const CardSeq = 27;  // 원하는 배열의 길이
const CardDate = Array.from({ length:CardSeq }, (_, index) => `./img/${index + 1}card.png`);


// getX함수

function getX(i,Radius) {
    // Dv = 반지름이 400일경우 10분할 아닐경우 나며지 분할
    let Dv = Radius === 400 ? 10 : (CardSeq - 10);
    // angle = 2*3.14*i (i = index(해당객체 순번))
    const angle = (2 * Math.PI * i) / Dv;
    // 정중앙 구하기
    // window.innerWidth 윈도우화면 넓이 /2 
    return window.innerWidth / 2 + Radius * Math.cos(angle);
}
function getY(i,Radius) {
    let Dv = Radius === 400 ? 10 : (CardSeq - 10);
    const angle = (2 * Math.PI * i) / Dv;
    // window.innerHeight 윈도우화면 높이 /2
    return window.innerHeight / 2 + Radius * Math.sin(angle);
}
// 객체회전함수 
function Angle(i, Radius) {
    let Dv = Radius === 400 ? 10 : (CardSeq - 10);
    const angle = (2 * Math.PI * i) / Dv;
    return (angle * 180 / Math.PI) - 180;
}


// container에 넣을 요소
function CardImgHTML(index, isrc) {
    let Radius = index < 10 ? 400 : 800;
    let NewIndex = index < 10 ? index : index - 10;
    const style = `
        left: ${getX(NewIndex,Radius) - 120 / 2}px;
        top: ${getY(NewIndex,Radius) - 76 / 2}px;
        transform: rotate(${Angle(NewIndex, Radius)}deg);
    `;
    return `<img style="${style}" src="${isrc}" />`;
}

function generateCardListHTML() {
    let hcode = '<div class="circle">';
    CardDate.forEach((isrc, index) => {
        hcode += CardImgHTML(index, isrc);
    });
    hcode += '</div>';
    return hcode;
}

// Rendering
document.querySelector(".container").innerHTML = generateCardListHTML();