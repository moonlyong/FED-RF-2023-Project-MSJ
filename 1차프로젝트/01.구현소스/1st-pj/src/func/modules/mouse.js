import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');

// 클래스 add , remove
export function MouseOver(ad,fn){
    ad.on('mouseover',fn)
}
export function MouseOut(ad,fn){
    ad.on('mouseout',fn)
}
