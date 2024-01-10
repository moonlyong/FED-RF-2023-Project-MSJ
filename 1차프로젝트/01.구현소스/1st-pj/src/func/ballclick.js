import { AddClass,RemoveClass } from "./modules/class"; 
import { Ani } from "./modules/animate";
import "../css/main_4.css";

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

require("jquery-ui-touch-punch/jquery.ui.touch-punch");



export function BallClick() {
	let tlogo = $(".logo-flex");
	let ballbx = $(".ball-box");
	let after = $(".after");
	let before = $(".before");
	let ballback = $(".ball-back");
  AddClass(ballbx,'on')
  AddClass(ballback,'on')
  RemoveClass(tlogo,'mv')

	setTimeout(() => {
    Ani(after,{opacity:1});
    Ani(before,{opacity:0});
		let ball1 = $(".ball-1");
		let ball2 = $(".ball-2");
    AddClass(ball1,'dn')
    RemoveClass(ball2,'dn')
	}, 5000);
}
