import SvIcon from "../data.js";




const getCard = () => {
    let Card = document.querySelector(".card-box");
    let CardImg = document.querySelector(".card-box img");
    let Top = document.querySelector(".top-logo");
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
    // setTimeout(() => {
    //     ConBox1.style.cssText = `
    //     position: absolute;
    //     top: -10vh;
    //     width: 100vw;
    //     height: 100vh;
    //     opacity: 1;
    //     transition: 1s ease-in;
    //     `;
    //     ConBox2.style.cssText = `
    //     position: absolute;
    //     top: -10vh;
    //     width: 100vw;
    //     height: 100vh;
    //     opacity: 1;
    //     transition: 2s ease-in;
    //     `;
    // }, 1500)
};///////getCard


function IconSet(props) {
    return (
        <li class="icon">
            <span>{props.tit}</span>
            <i class="moz">{props.imoz}</i>
            <p>{props.txt}</p>
        </li>
    );
}
function IconList(props) {
    let cardIdx = SvIcon[props.idx]
    return (
        <React.Fragment>
            {/* <div class="container1 card-circle">
                {CardDate.map((isrc, index) => (
                    <CardImg1 index={index} isrc={isrc}></CardImg1>
                ))}
            </div>
            <div class="container2 card-circle">
                {CardDate.map((isrc, index) => (
                    <CardImg2 index={index} isrc={isrc}></CardImg2>
                ))}
            </div> */}
            <div id="icon-box" class="inner">
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
            {/* 담을박스 */}
            <div class="card-box">
                <img src="../img/card.png" alt="" />
            </div>
        </React.Fragment>
    );
}
ReactDOM.render(<IconList />, document.querySelector("#root2"));
function IconBox(props) {
    return (
        <React.Fragment>
            <div class="bottom-area inner">
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
