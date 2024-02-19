import { MyList } from "../mylist";
import { expData } from "../../data/data";
import { Cell } from "../cell";

export function Experience() {
	return (
		<>
			<section className="info-box">
				<MyList />
				<table className="info">
					<Cell ele={expData} />
				</table>
			</section>
		</>
	);
}
