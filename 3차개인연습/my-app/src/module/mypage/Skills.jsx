import { MyList } from "../mylist";
import { skillData,skillData2 } from "../../data/data";
import { Cell } from "../cell";

export function Skills() {
	return (
		<>
			<section className="info-box">
				<MyList />
				<table className="info">
					<Cell ele={skillData}></Cell>
					<Cell ele={skillData2}></Cell>
				</table>
			</section>
		</>
	);
}
