import "../css/allcard.css";
import React from "react";
import { CardData } from "../data/card_data";
import { Spread } from "../module/Spread";

export function AllCard() {
    
    return (
        <>
        {Spread("cardli",CardData)}
        </>
    );
}
