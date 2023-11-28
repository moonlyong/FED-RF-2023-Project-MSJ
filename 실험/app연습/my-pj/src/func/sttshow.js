import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

export function getCard() {
    let ConBox1 = $(".container1");
    let ConBox2 = $(".container2");
    let button = $(".link-next a");
    let Bar = $(".loadingbar");
    let load = $(".loading");

    setTimeout(() => {
        ConBox1.css({
            position: "absolute",
            width: "100vw",
            height: "100vh",
            opacity: 1,
            transition: "1s ease-in",
        });
        ConBox2.css({
            position: "absolute",
            width: "100vw",
            height: "100vh",
            opacity: 1,
            transition: "2s ease-in",
        });
    }, 1000);
    Bar.animate(
        {
            width: "100%",
        },
        4000,
        "easeInCubic",
        function () {
            load.hide();
            button.css({
            opacity: 1,
            transition: "2s ease-in",
        });
        },
    );


    // let angle = 0;

    // function rotateElement() {
    //     angle += 0.2;
    //     if (angle >= 360) {
    //         angle = 0;
    //     }

    //     const Con1 = $(".container1");
    //     const Con2 = $(".container2");
    //     // Con1.style.transform = `rotate(${angle}deg)`;
    //     Con1.css({
    //         transform:'rotate(${angle}deg)'
    //     })
    //     Con2.css({
    //         transform:'rotate(-${angle}deg)'
    //     })
    //     // Con2.style.transform = `rotate(-${angle}deg)`;

    //     requestAnimationFrame(rotateElement);}
}
