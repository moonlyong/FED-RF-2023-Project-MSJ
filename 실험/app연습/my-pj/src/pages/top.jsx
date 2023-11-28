import { Link } from "react-router-dom";

export function Top() {
    return (
        <>
            <div id="top-area">
                <div className="bdl-gray top-area">
                    <div className="topnav inner">
                        <h1 className="top-logo">
                            <img src="../../img/logo.png" alt="" />
                        </h1>
                        <nav className="rank">
                            <ul>
                                <li></li>
                            </ul>
                        </nav>
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            className="search"
                        />
                        <div className="search-icon"></div>
                    </div>
                </div>
                <nav>
                    <ul className="nav-menu">
                        <li>
                            <Link to={"/rank"}>
                                <a href="">TOP 10</a>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/dragpick"}>
                                <a href="">맞춤카드</a>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/newcard"}>
                                <a href="">이달의 카드</a>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/allcard"}>
                                <a href="">모든카드</a>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/service"}>
                                <a href="">고객센터</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
