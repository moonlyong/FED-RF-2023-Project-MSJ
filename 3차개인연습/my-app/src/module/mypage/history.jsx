import { MyList } from "../mylist";
import { historyData } from "../../data/data";
import { Cell } from "../cell";

export function History() {
	return (
		<>
			<section className="info-box">
				<MyList />
				<table className="info">
					<Cell ele={historyData}></Cell>
				</table>
			</section>
		</>
	);
}
