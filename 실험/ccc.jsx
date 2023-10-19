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

function CardImg(props) {
    let Radius = props.index < 10 ? 400 : 800;
    let NewIndex = props.index < 10 ? props.index : props.index - 10;
    const style = {
        left: getX(NewIndex,Radius) - 120 / 2 + "px",
        top: getY(NewIndex,Radius) - 76 / 2 + "px",
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

// 객체 길이로 표현
// const container = document.getElementById('container');
// // 작은 동그라미로 이뤄진 원의 크기

// const Circle = document.querySelectorAll(".circle img")
// console.log(Circle)

// const Cset = () => {

//     Card.style.cssText = `
//             position: absolute;
//             left: 90%;
//             top: 6vh;
//             width: 24vw;
//             height: 34vw;
//             transition: 2s;
//         `;
// }
