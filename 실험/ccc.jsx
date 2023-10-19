// 객체
const CardSeq = 27;  // 원하는 배열의 길이
const CardDate = Array.from({ length:CardSeq }, (_, index) => `./img/${index + 1}card.png`);



function getX(i,Radius) {
    let Dv = Radius === 400 ? 10 : (CardSeq - 10);
    const angle = (2 * Math.PI * i) / Dv;
    return window.innerWidth / 2 + Radius * Math.cos(angle);
}
function getY(i,Radius) {
    let Dv = Radius === 400 ? 10 : (CardSeq - 10);
    const angle = (2 * Math.PI * i) / Dv;
    return window.innerHeight / 2 + Radius * Math.sin(angle);
}
function Angle(i, Radius) {
    let Dv = Radius === 400 ? 10 : (CardSeq - 10);
    const angle = (2 * Math.PI * i) / Dv;
    return (angle * 180 / Math.PI) - 360;
}
// 드래그회전함수
let isDragging = false;
let startAngle = 0;
let currentAngle = 0;

const container = document.querySelector('.container');

// 마우스 다운 이벤트
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startAngle = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - window.innerWidth / 2) * (180 / Math.PI);
});

// 마우스 무브 이벤트
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const moveAngle = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - window.innerWidth / 2) * (180 / Math.PI);
        const diffAngle = moveAngle - startAngle;
        const rotation = currentAngle + diffAngle;
        container.style.transform = `rotate(${rotation}deg)`;
    }
});

// 마우스 업 이벤트
document.addEventListener('mouseup', (e) => {
    if (isDragging) {
        const moveAngle = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - window.innerWidth / 2) * (180 / Math.PI);
        currentAngle += moveAngle - startAngle;
        isDragging = false;
    }
});

// 자동회전함수
// let angle = 0;

// function rotateElement() {
//   angle += 0.2;
//   if (angle >= 360) {
//     angle = 0;
//   }

//   const container = document.querySelector('.container');
//   container.style.transform = `rotate(${angle}deg)`;

//   requestAnimationFrame(rotateElement);
// }

// rotateElement();


function CardImg(props) {
    let Radius = props.index < 10 ? 400 : 800;
    let NewIndex = props.index < 10 ? props.index : props.index - 10;
    // transform: `rotate(${Angle}deg)` 
    const style = {
        left: getX(NewIndex,Radius) - 120 / 2 + "px",
        top: getY(NewIndex,Radius) - 76 / 2 + "px",
        transform: `rotate(${Angle(NewIndex, Radius)}deg)`
    };
    return <img style={style} src={props.isrc} />;
}



function CardList(props) {
    // wlist 속성에 담아서 보내준다!
    return (
        <React.Fragment>
            <div class="circle">
                {CardDate.map((isrc, index) => (
                    <CardImg index={index} isrc={isrc}></CardImg>
                ))}
            </div>
        </React.Fragment>
    );
} ///////// WishList 컴포넌트 ///////////////
ReactDOM.render(<CardList />, document.querySelector(".container"));

