import { useLocation, useNavigate } from "react-router-dom";
import "../css/rank.css";
import { CardData } from "../data/card_data";

export function MyPick() {

    const nav = useNavigate();

    const ClickData = (card) => {
        nav("/single", { state: { card } });
    };
	const location = useLocation();
	const basketItems = location.state?.items; // CardPick에서 전달된 상태
    console.log("location.state:", location.state); // 상태 확인
    if (!basketItems) {
        console.log("basketItems가 정의되지 않았습니다.");
        return; // 또는 오류 메시지를 표시하는 등의 처리
    }
    const MyItems = CardData.filter(card =>
        card.info.some(infoItem => basketItems.includes(infoItem))
    );

	return (
		<>
			<ul>
				{MyItems.map((v, i) => (
					<li key={i} onClick={() => ClickData(v)}>
                    <img src={v.src} alt="" />
                    <h1>
                        {v.name} 
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
                        <span>{v.etc[0]}</span>

                    </h3>
                    <h3 className="p4">
                        <span>★NEW★</span>
                    </h3>
                </li>
				))}
			</ul>
		</>
	);
}
