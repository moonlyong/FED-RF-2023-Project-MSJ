import { MyList } from "../mylist";

export function Certifications() {
    return (
        <>
          <section className="info-box">
			<MyList />
            <div className="info">

				<h2>학력</h2>
				<ul>
					<li>
						<strong>학위</strong>: 전공, 학교, 졸업년도
					</li>
					<li>
						<strong>학위</strong>: 전공, 학교, 졸업년도
					</li>
				</ul>
            </div>
			</section>
        </>
    );
}
