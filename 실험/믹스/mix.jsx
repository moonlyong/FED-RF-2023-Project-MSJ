import SvIcon from "./data.js";

const getCard = () => {
    let Card = document.querySelector(".card-box");
    let CardImg = document.querySelector(".card-box img");
    let Top = document.querySelector(".top-logo");
    let ConBox1 = document.querySelector(".container1");
    let ConBox2 = document.querySelector(".container2");
    let bta = document.querySelector(".bottom-area");

    let IconBox = document.querySelector("#icon-box");
    CardImg.style.cssText = `
    display: block;
    `;
    IconBox.style.cssText = `
    display: none;
    `;
    Top.style.cssText = `
    display: none;
    `;
    bta.style.cssText = `
        display:none;
        `;

    Card.style.cssText = `
            position: absolute;
            left: 90%;
            top: 205px;
            width: 187px;
            height: 313px;
            transform: rotate(0deg)scale(1.8);  
        `;
    setTimeout(() => {
        Card.style.cssText = `
            position: absolute;
            top: 205px;
            left:calc(50% - (187px/2));
            width: 187px;
            height: 313px;
            transform: rotate(720deg) scale(1);
            transition: 2s, right 1s 2s;
        `;
    }, 500);
    setTimeout(() => {
        ConBox1.style.cssText = `
        position: absolute;
        top: -10vh;
        width: 100vw;
        height: 100vh;
        opacity: 1;
        transition: 1s ease-in;
        `;
        ConBox2.style.cssText = `
        position: absolute;
        top: -10vh;
        width: 100vw;
        height: 100vh;
        opacity: 1;
        transition: 2s ease-in;
        `;
    }, 1500);
    setTimeout(() => {
        let angle = 0;

        function rotateElement() {
            angle += 0.2;
            if (angle >= 360) {
                angle = 0;
            }

            const Con1 = document.querySelector(".container1");
            const Con2 = document.querySelector(".container2");
            Con1.style.transform = `rotate(${angle}deg)`;
            Con2.style.transform = `rotate(-${angle}deg)`;

            requestAnimationFrame(rotateElement);
        }
        rotateElement();
    }, 3000);
};

// function MakeImg(props) {
//     return <img src={props.isrc} alt={props.ialt} />;
// }

const CardSeq = 27; // 원하는 배열의 길이
const CardDate = Array.from(
    { length: CardSeq },
    (_, index) => `./img/${index + 1}card.png`,
);

function getX(i, Radius) {
    let Dv = Radius === 400 ? 10 : CardSeq - 10;
    const angle = (2 * Math.PI * i) / Dv;
    return window.innerWidth / 2 + Radius * Math.cos(angle);
}
function getY(i, Radius) {
    let Dv = Radius === 400 ? 10 : CardSeq - 10;
    const angle = (2 * Math.PI * i) / Dv;
    return window.innerHeight / 2 + Radius * Math.sin(angle);
}
function Angle(i, Radius) {
    let Dv = Radius === 400 ? 10 : CardSeq - 10;
    const angle = (2 * Math.PI * i) / Dv;
    return (angle * 180) / Math.PI - 360;
}

function CardImg1(props) {
    let Radius = props.index < 10 ? 400 : 800;
    let NewIndex = props.index < 10 ? props.index : props.index - 10;
    const num = Radius === 400 ? 1 : 2;
    const style = {
        left: getX(NewIndex, Radius) - 120 / 2 + "px",
        top: getY(NewIndex, Radius) - 76 / 2 + "px",
        transform: `rotate(${Angle(NewIndex, Radius)}deg)`,
    };
    if(num==1){
        return <img style={style} src={props.isrc}/>;
    }
}
function CardImg2(props) {
    let Radius = props.index < 10 ? 400 : 800;
    let NewIndex = props.index < 10 ? props.index : props.index - 10;
    const num = Radius === 400 ? 1 : 2;
    const style = {
        left: getX(NewIndex, Radius) - 120 / 2 + "px",
        top: getY(NewIndex, Radius) - 76 / 2 + "px",
        transform: `rotate(${Angle(NewIndex, Radius)}deg)`,
    };
    if(num==2){
        return <img style={style} src={props.isrc}/>;
    }
}

// function CardList(props) {
//     // wlist 속성에 담아서 보내준다!
//     return (
//         <React.Fragment>
//         </React.Fragment>
//     );
// } ///////// WishList 컴포넌트 ///////////////
function IconList(props) {
    return (
        <React.Fragment>
            <div class="container1 card-circle">
                {CardDate.map((isrc, index) => (
                    <CardImg1 index={index} isrc={isrc}></CardImg1>
                ))}
            </div>
            <div class="container2 card-circle">
                {CardDate.map((isrc, index) => (
                    <CardImg2 index={index} isrc={isrc}></CardImg2>
                ))}
            </div>
            <div id="icon-box">
                <ul>
                    {SvIcon.map((x) => (
                        <IconSet
                            tit={x.tit}
                            imoz={x.imoz}
                            txt={x.txt}
                        ></IconSet>
                    ))}
                </ul>
            </div>
            <div class="card-box">
                <img src="./img/card.png" alt="" />
            </div>
            {/* 담을박스 */}
        </React.Fragment>
    );
}
ReactDOM.render(<IconList />, document.querySelector("#root2"));

function TopArea(props) {
    return (
        <React.Fragment>
            <h1 class="top-logo">
                <img src="./img/MLM.png" alt="" />
                MLM Card
            </h1>
        </React.Fragment>
    );
}
ReactDOM.render(<TopArea />, document.querySelector("#root1"));
function IconSet(props) {
    return (
        <li id="icon">
            <span>{props.tit}</span>
            <span>{props.imoz}</span>
            <p>{props.txt}</p>
        </li>
    );
}

function IconBox(props) {
    return (
        <React.Fragment>
            <div className="bottom-area">
                <h2>원하는 혜택들을 넣고 카드를 발급받으세요!</h2>
                <div class="basket">
                    <button onClick={getCard}>발급</button>
                </div>
            </div>
            {/* 담을박스 */}
        </React.Fragment>
    );
}
ReactDOM.render(<IconBox />, document.querySelector("#root3"));


function throttle(func, delay) {
  let lastCall = 0;
  return function() {
    let now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func.apply(this, arguments);
  }
}
const dtg = document.querySelectorAll("#icon");
let Card = document.querySelector(".card-box img");

// 드래그 설정하기
dtg.forEach((ele) => goDrag(ele));
// goDrag(CardBox);
// console.log(Card);
throttle(goDrag(Card),500)


function goDrag(ele) {
    //ele - 드래그 대상 요소
    // 2.변수세팅
    // (1) 드래그 상태 변수 : true =드래그중 false = 드래그 아님
    let drag = false;
    // (2) 첫번째 위치 포인트 first x, first y
    let fx, fy;
    // (3) 마지막 위치 포인트 last x, last y
    let lx = 0,
        ly = 0;
    // 마지막 위치로 부터 처음 작동하므로 초기값 0세팅
    // (4) 움직일때 위치포인트 move x, move y
    let mvx, mvy;
    // (5) 위치이동 차이 결과변수 result x, result y
    let rx, ry;

    // 3.함수만들기
    // (1) 드래그 상태 true로 변경 함수
    const dTrue = () => (drag = true);
    // (2) 드래그 상태 false로 변경 함수
    const dFalse = () => (drag = false);
    // (3) 드래그 작동함수
    const dMove = () => {
        // console.log(drag);
        // 드래스 상태일때만 실행
        if (drag) {
            // 1. 드래그 상태에서 움직일때 위치값 mvx,mvy
            mvx = event.pageX;
            mvy = event.pageY;
            // 2. 움직일때 위치값-처음위치값 : rx ry
            rx = mvx - fx;
            ry = mvy - fy;
            // 순수하게 움직인 거리
            // 3. x,y 움직인 위치값을 타겟 요소에 적용
            // 대상: 전달된 드래그요소 ->ele변수
            ele.style.left = rx + lx + "px";
            ele.style.top = ry + ly + "px";
            let box = document.querySelectorAll('.card-circle')
            // console.log(box)
            dtg.forEach(ele=>ele.style.zIndex=0);
            ele.style.zIndex = 1;
            // box.forEach(ele=>ele.style.display='none');
            box.forEach(ele=>ele.style.cssText = `
            display:none;
            `);
            console.log(`mvx: ${mvx}mvy: ${mvy}`);
            console.log(`rx: ${rx}ry: ${ry}`);
        }
    }; ////dmove 함수

    // (4) 첫번째 위치 포인트 세팅 함수 :fx fy
    const firstPoint = () => {
        fx = event.pageX;
        fy = event.pageY;
    };
    // (5) 마지막 포인트 세팅함수 lx ly
    const lastPoint = () => {
        lx += rx;
        ly += ry;
    };
    // 4. 이벤트 등록하기
    // (1) 마우스 내려갈때 : 드래그 true + 첫번째 위치값 업데이트
    // 대상 :호출시 보내준 드래그 대상 요소 ->ele변수
    ele.addEventListener("mousedown", () => {
        dTrue();
        firstPoint();
    });
    // (2) 마우스 올라올때
    ele.addEventListener("mouseup", () => {
        dFalse();
        lastPoint();
    });
    // (3) 마우스 움직일때
    ele.addEventListener("mousemove", dMove);
    // (4) 마우스 벗어날때 : 드래그 상태 false 처리 함수 호출
    ele.addEventListener("mouseleave", dFalse);
} //////////드래그 이벤트//////////
