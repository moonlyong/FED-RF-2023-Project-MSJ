import { MyList } from "../mylist";
import { pnData } from "../../data/data";
import { Cell } from "../cell";

export function Posnav() {
    return (
        <>
          <section className="info-box">
			<MyList />
            <table className="info">
				<Cell ele={pnData}/>
				</table>
			</section>
        </>
    );
}
