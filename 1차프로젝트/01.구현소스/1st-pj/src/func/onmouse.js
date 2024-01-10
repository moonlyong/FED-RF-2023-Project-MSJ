import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');




export function OnMouse(){
    let ball = $('.ball-2')
    let info = $('.player-info')
    info.hide();
    ball.on('mouseover',function(){
        info.fadeIn()
    })
    ball.on('mouseout',function(){
        info.fadeOut()
    })
}