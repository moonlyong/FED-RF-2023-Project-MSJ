// Pilot PJ 메인영역 공통 컴포넌트

// 라우터 역할을 하는 MainArea 컴포넌트 ////////
export function MainArea4(props){
    // props.page 속성값으로 main/men/women/style
    return(
        <>
           <section class="main-box main-4">
      <div class="txt-logo main4-logo"></div>
      <div class="before"></div>
      <div class="after dn">
        <div class="apbox"></div>
        <div class="player-info">▲선수단 자세히보기▲</div>
      </div>
      <div class="ball-box ball-1">
        <div class="ball">
          <img src="./image/etc/ball.png" alt="" />
        </div>
        <div class="ball-back"></div>
      </div>
      <div class="ball-box ball-2 dn">
        <div class="ball">
          <a href="./playerinfo.html" target="_blank"><img src="./image/etc/ball.png" alt="" /></a>
        </div>
        <div class="ball-back"></div>
      </div>
    </section>
        </>
    );
} //////////////// MainArea 컴포넌트 //////////