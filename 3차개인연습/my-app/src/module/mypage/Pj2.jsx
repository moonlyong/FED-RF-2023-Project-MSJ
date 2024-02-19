import { MyList } from "../mylist";
import { pj2Data } from "../../data/data";
import { Cell } from "../cell";

export function Projects2() {
    return (
        <>
          <section className="info-box">
			<MyList />
			<table className="info">
				<Cell ele={pj2Data}/>
                <a href="https://moonlyong.github.io/react-app/second/" target="blank">◀프로젝트2 바로가기▶</a>
				</table>
			</section>
        </>
    );
}
