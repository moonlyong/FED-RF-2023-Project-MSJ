import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./mylist.css";

export function MyList() {
	return (
		<div className="mylist">
			<h2><Link to="/mystory">이력서</Link></h2>
			<ul>
				<li>
					<Link to="/1">학력&교육사항</Link>
				</li>
				<li>
					<Link to="/2">경력</Link>
				</li>
				<li>
					<Link to="/3">기술스킬＆자격증</Link>
				</li>
				<li>
					<Link to="/4">프로젝트1</Link>
				</li>
				<li>
					<Link to="/5">프로젝트2</Link>
				</li>
				<li>
					<Link to="/6">장점&단점</Link>
				</li>
				<li>
					<Link to="/7">지원동기&향후방향</Link>
				</li>
				<li>
					<Link to="/8">교육활동(경험사항)</Link>
				</li>
				<li>
					<a
						href="https://drive.google.com/file/d/13YvXaj1dC0rE-eu9uCu08gWMEjY9YeqO/view?usp=drive_link"
						target="blank"
					>
						다운로드
					</a>
				</li>
			</ul>
		</div>
	);
}
