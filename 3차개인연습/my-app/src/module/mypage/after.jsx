import { MyList } from "../mylist";
import { afData } from "../../data/data";
import { Cell } from "../cell";

export function After() {
    return (
        <>
          <section className="info-box">
			<MyList />
            <table className="info">
				<Cell ele={afData}/>
				</table>
			</section>
        </>
    );
}
