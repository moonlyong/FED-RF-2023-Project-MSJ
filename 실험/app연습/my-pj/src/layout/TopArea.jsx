// Pilot PJ 상단영역 공통 컴포넌트

// GNB 데이터 가져오기
export function TopArea(props) {
    return (
        <>
            <div id="top-area">
                <div className="bdl-gray top-area">
                    <div className="topnav inner">
                        <h1 className="top-logo">
                            <img src="../../img/MLM.png" alt="" />
                            <p>MLM Card</p>
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
                
            </div>
        </>
    );
} //////////////// TopArea 컴포넌트 //////////
