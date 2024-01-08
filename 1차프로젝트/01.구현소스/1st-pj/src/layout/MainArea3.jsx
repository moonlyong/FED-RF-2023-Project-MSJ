import { Link } from "react-router-dom";


// 라우터 역할을 하는 MainArea 컴포넌트 ////////
export function MainArea3(props){
    // props.page 속성값으로 main/men/women/style
    return(
        <>
           <section class="main-box main-3">
      <div class="display-box">
        <a href="/hilite" target="_blank">
          <div class="frame-box"></div>
          <div class="linkbox dn">
            <ul>
              <li>
                <img src="./image/preview/clip1.jpg" alt="" />
              </li>
              <li class="preview-txt">
                <h4>
                  [미공개] 콜드 패 위기에 굴하지 않고 슬로 커브 작렬하는 유희관
                </h4>
                <h5>
                  6회 초, 8점의 격차로 콜드 패 위기인 몬스터즈.. <br />
                  이번 이닝을 반드시 막아야 하는 유희관!
                </h5>
                <h6>메이킹 영상</h6>
              </li>
            </ul>
            <div class="more-vod">▲더 많은 영상보기▲</div>
          </div>
        </a>
      </div>
    </section>
        </>
    );
} //////////////// MainArea 컴포넌트 //////////