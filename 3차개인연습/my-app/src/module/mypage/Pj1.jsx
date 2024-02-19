import { MyList } from "../mylist";
import { pj1Data } from "../../data/data";
import { Cell } from "../cell";

export function Projects1() {
    return (
        <>
          <section className="info-box">
			<MyList />
			<table className="info">
				<Cell ele={pj1Data}/>
                <a href="https://moonlyong.github.io/react-app/first/" target="blank">◀프로젝트1 바로가기▶</a>
				</table>
			</section>
        </>
    );
}
