
import "../css/newcard.css";

import { CardData } from "../data/card_data";
import { Spread } from "../module/Spread";

export function NewCard(){

    let cL = CardData.length

    // console.log(cL)
    
    const NewCard = CardData.slice(cL - 6 , cL)
    return (
        <>
        {/* spread 모듈 사용 */}
         {Spread("newli",NewCard)}
        </>
    )
}