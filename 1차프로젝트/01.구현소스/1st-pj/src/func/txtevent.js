import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');



export function TextEvent(){
    const txtbox = $(".txt-box_1");
    // clog(txtbox);
    setTimeout(() => {
      txtbox.addClass("on");
    }, 1000);
    const txt2 = $(".txt-2");
    setTimeout(() => {
      txt2.addClass("on");
    }, 3000);
    setTimeout(() => {
      txt2.addClass("show");
    }, 1500);
}