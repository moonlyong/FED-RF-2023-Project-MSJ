// DC.com 레이아웃 컴포넌트

import { createContext, useContext, useState } from "react";
import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

export function Layout(){
  const myCon = createContext();
  const [pageVal, setPageVal] = useState(0);
  const chgVal = (val)=>setPageVal(val);
    return(
    <myCon.Provider value={{chgVal}}>
      {pageVal == 0 &&
      <TopArea />
      }
      <MainArea />
    </myCon.Provider>

    );

} /////////// Layout 컴포넌트 ///////////