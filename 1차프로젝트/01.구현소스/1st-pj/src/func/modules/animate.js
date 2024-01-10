import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');

// 클래스 add , remove
export function Ani(ad,cn){
ad.animate(cn)
}
