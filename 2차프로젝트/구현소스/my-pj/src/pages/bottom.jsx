import "../css/bottom.css";

export function Bottom() {
    return (
        <>
            <div id="footer-area">
                <div class="address">
                    <address>
                        
                        <span className="span1">
                        <div className="company">
                            <img src="./img/mllogo2.png" alt="" />
                        </div>
                        <div className="loc">
                            <p>제작사 : MLMW Company</p> <br />
                            주소 : 서울시 강서구 마곡로 78 - 22</div>
                        </span>
                        <span>
                            <p>대표 : 문 승준</p> <br />
                            전화번호 : 010 - 9435 - 1395
                            <br />
                            E-mail : moonthth @ naver . com
                        </span>
                    </address>
                </div>
            </div>
        </>
    );
}
