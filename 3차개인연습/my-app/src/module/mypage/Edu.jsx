import { MyList } from "../mylist";
import { eduData,eduData2 } from "../../data/data";
import { Cell } from "../cell";

export function Education() {
	return (
		<>
			<section className="info-box">
				<MyList />
				<table className="info">
				<Cell ele={eduData}/>
				<Cell ele={eduData2}/>
				</table>
			</section>
		</>
	);
}
