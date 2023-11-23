export function Top(){
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
                        <li><a href="">
                            TOP 10
                            </a></li>
                        <li><a href="">
                            맞춤카드
                            </a></li>
                        <li><a href="">
                            이달의 카드
                            </a></li>
                        <li><a href="">
                            모든카드
                            </a></li>
                        <li><a href="">
                            고객센터
                            </a></li>
                      
                    </ul>
                </nav>
            </div>
        </>
    )
}