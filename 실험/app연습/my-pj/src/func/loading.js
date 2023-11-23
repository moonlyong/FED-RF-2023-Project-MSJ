import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

export function LoadEft(){
    let ConBox1 = $(".container1");
    let ConBox2 = $(".container2");

        ConBox1.css({
            position: "absolute",
        width: "100vw",
        height: "100vh",
        opacity: 1,
        transition: "1s ease-in",
        })
        ConBox2.css({
            position: "absolute",
            width: "100vw",
        height: "100vh",
        opacity: 1,
        transition: "2s ease-in",
        })
};