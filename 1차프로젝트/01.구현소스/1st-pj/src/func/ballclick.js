import '../css/main_4.css';


import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');




export function BallClick(){
// B 요소에 클래스를 추가합니다.
let tlogo = $(".logo-flex");
let ballbx = $(".ball-box");
let after = $(".after");
let before = $(".before");
let ballback = $(".ball-back");
tlogo.removeClass("mv");
ballbx.addClass("on");
ballback.addClass("on");

setTimeout(() => {
  after.animate({opacity:1});
  before.animate({opacity:0});
  let ball1 = $(".ball-1");
  let ball2 = $(".ball-2");
  ball1.addClass("dn")
  ball2.removeClass("dn")
  
}, 5000);

}