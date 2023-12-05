import { useNavigate } from "react-router-dom";
import "../css/rank.css";
import { CardData } from "../data/card_data";
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function MyPick() {
    const nav = useNavigate();
    const shuffleList = shuffle([...CardData].slice(0, 10)); // CardData를 복사하여 섞습니다.

    const ClickData = (card) => {
        nav("/single", { state: { card } });
    };

    return (
        <>
        <h1 className="rankhd">HOT 한 카드 TOP 10 !!!</h1>
                <ul className="rankli">
                    {shuffleList.map((v, i) => (
                        <li key={i} onClick={() => ClickData(v)}>
                            <img src={v.src} alt="" />
                            <h1>
                                {i + 1}. {v.name}
                            </h1>
                            <h2>{v.com}</h2>
                            <h3 className="p1">
                                <p>{v.txt[0]}</p>
                                <p>{v.txt[1]}</p>
                                <p>{v.txt[2]}</p>
                            </h3>
                            <h3 className="p2">
                                <span>연회비</span>
                                <p>{v.cost}</p>
                            </h3>
                            <h3 className="p3">
                                <p>{v.etc[1]}</p>
                                <p>{v.etc[2]}</p>
                            </h3>
                            <h3 className="p4">
                                <span>{v.etc[0]}</span>
                            </h3>
                        </li>
                    ))}
                </ul>
        </>
    );
}
