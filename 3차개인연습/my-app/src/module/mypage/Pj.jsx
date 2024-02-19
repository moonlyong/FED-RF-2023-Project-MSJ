import { MyList } from "../mylist";
import { pjData } from "../../data/data";
import { Cell } from "../cell";

export function Projects() {
    return (
        <>
          <section className="info-box">
			<MyList />
			<table className="info">
				<Cell ele={pjData}/>
				</table>
			</section>
        </>
    );
}
