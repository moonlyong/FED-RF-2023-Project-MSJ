

import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');






require('jquery-ui-touch-punch/jquery.ui.touch-punch');




export function BallClick(a,b,c,d,e,f,g){

e.removeClass("mv");
f.addClass("on");
g.addClass("on");

setTimeout(() => {
  a.animate({opacity:1});
  b.animate({opacity:0});
  c.addClass("dn")
  d.removeClass("dn")
  
}, 5000);

}