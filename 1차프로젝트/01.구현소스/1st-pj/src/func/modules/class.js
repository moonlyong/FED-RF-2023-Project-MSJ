import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');

// 클래스 add , remove
export function AddClass(ad,cn){
ad.addClass(cn)
}
export function RemoveClass(ad,cn){
    ad.removeClass(cn)
}