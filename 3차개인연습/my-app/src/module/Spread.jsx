
import "../css/newcard.css";

import { useNavigate } from "react-router-dom";

export function Spread(cln,el){
    const nav = useNavigate();

    const ClickData = (card) => {
        nav("/single", { state: { card } });
    };

    return (
        <>
        <ul className={cln}>
                    {el.map((v, i) => (
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
                                {cln ==="newli"&&<span>{v.etc[0]}</span>}
                            </h3>
                            <h3 className="p4">
                                {cln ==="cardli"&&<span>{v.etc[0]}</span>}
                                {cln ==="newli" && <span>★NEW★</span>}
                            </h3>
                        </li>
                    ))}
                </ul>
        </>
    )
}