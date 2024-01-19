import "../css/single.css";
import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink,faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export function Single(){
    const loc = useLocation();
    const nav = useNavigate()
    const { card } = loc.state;
    
    const back = () => {
        nav(-1)
    }
    return (
        <>
        <div className="single">
        <div onClick={back} className="back">
        <FontAwesomeIcon icon={faArrowLeft} /></div>
            <h1>{card.name}</h1>
            <img src={card.src} alt="" />
                        <h1>{card.name}</h1>
                        <h2>{card.com}</h2>
                        <h3 className="p1">
                            <p>※{card.txt[0]}</p>
                            <p>※{card.txt[1]}</p>
                            <p>※{card.txt[2]}</p>
                        </h3>
                        <h3 className="p2">
                            <span>연회비</span>
                            <p>{card.cost}</p>
                        </h3>
                        <h3 className="p3">
                            <p>{card.etc[1]}</p>
                            <p>{card.etc[2]}</p>
                            <a href={card.make} target="blank">{card.com}바로가기
                                <FontAwesomeIcon icon={faLink} />
                            </a>
                        </h3>
                        <h3 className="p4">
                            <span>{card.etc[0]}</span>
                        </h3>
        </div>
        </>
    )
}