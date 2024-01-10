import { MouseOut, MouseOver } from './modules/mouse';


import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');




export function OnMouse(){
    let ball = $('.ball-2')
    let info = $('.player-info')
    info.hide();
    MouseOver(ball,function(){info.fadeIn()})
    // ball.on('mouseover',function(){
    //     info.fadeIn()
    // })
    MouseOut(ball,function(){info.fadeOut()})

    // ball.on('mouseout',function(){
    //     info.fadeOut()
    // })
}