import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./mylist.css";

export function MyList() {
    return (
        <div className="mylist">
            <h2>이력서</h2>
            <ul>
                <li><Link to="/1">학력&교육사항</Link></li>
                <li><Link to="/2">경력</Link></li>
                <li><Link to="/3">기술스킬＆자격증</Link></li>
                <li><Link to="/4">프로젝트</Link></li>
                <li><Link to="/5">자격증</Link></li>
                <li><a href="https://drive.google.com/file/d/13YvXaj1dC0rE-eu9uCu08gWMEjY9YeqO/view?usp=drive_link" target="blank">다운로드</a></li>
            </ul>
        </div>
    );
}