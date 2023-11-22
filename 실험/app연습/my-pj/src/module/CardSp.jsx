import React from 'react';
import { CardData } from "../data/card_data";
import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');

const CardSeq = CardData.length; // 원하는 배열의 길이

function getX(i, Radius) {
    let Dv = Radius === 400 ? 10 : CardSeq - 10;
    const angle = (2 * Math.PI * i) / Dv;
    return window.innerWidth / 2 + Radius * Math.cos(angle);
}
function getY(i, Radius) {
    let Dv = Radius === 400 ? 10 : CardSeq - 10;
    const angle = (2 * Math.PI * i) / Dv;
    return window.innerHeight / 2 + Radius * Math.sin(angle);
}
function Angle(i, Radius) {
    let Dv = Radius === 400 ? 10 : CardSeq - 10;
    const angle = (2 * Math.PI * i) / Dv;
    return (angle * 180) / Math.PI - 360;
}

function CardImg1(props) {
    let Radius = props.index < 10 ? 400 : 800;
    let NewIndex = props.index < 10 ? props.index : props.index - 10;
    const num = Radius === 400 ? 1 : 2;
    const style = {
        left: getX(NewIndex, Radius) - 120 / 2 + "px",
        top: getY(NewIndex, Radius) - 76 / 2 + "px",
        transform: `rotate(${Angle(NewIndex, Radius)}deg)`,
    };
    if(num==1){
        return <img style={style} src={props.isrc}/>;
    } return null;
}
function CardImg2(props) {
    let Radius = props.index < 10 ? 400 : 800;
    let NewIndex = props.index < 10 ? props.index : props.index - 10;
    const num = Radius === 400 ? 1 : 2;
    const style = {
        left: getX(NewIndex, Radius) - 120 / 2 + "px",
        top: getY(NewIndex, Radius) - 76 / 2 + "px",
        transform: `rotate(${Angle(NewIndex, Radius)}deg)`,
    };
    if(num==2){
        return <img style={style} src={props.isrc}/>;
    } return null;
}
export { CardImg1, CardImg2 };