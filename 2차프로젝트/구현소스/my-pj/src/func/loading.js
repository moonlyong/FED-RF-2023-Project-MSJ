import $ from "jquery";
require("jquery-ui-dist/jquery-ui");

export function LoadEft(){
    const CardBox = $('.card-box img');
    const Bar = $('.bar')
    $.fx.step.rotateY = function (fx) {
        // 시작과 끝 값을 설정합니다.
        fx.start = fx.start || 0;
        fx.end = fx.end || 360*5;
    
        // CSS transform 속성을 사용하여 회전을 적용합니다.
        $(fx.elem).css('transform', 'rotateY(' + fx.now + 'deg)');
      };
    

      CardBox.animate({ rotateY: 360*5, },4000,"easeInQuad");
      Bar.animate({
        width:"100%"
      },4000,"easeInCubic")
    }