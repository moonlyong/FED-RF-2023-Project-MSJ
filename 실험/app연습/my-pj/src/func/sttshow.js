import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");

export function getCard(){
    let Card = $(".card-box");
    let ConBox1 = $(".container1");
    let ConBox2 = $(".container2");

    Card.css({
        position: 'absolute',
                left: '90%',
                top: '205px',
                width: '187px',
                height: '313px',
                transform: 'rotate(0deg)scale(1.8)',  
    })
    // Card.style.cssText = `
    //         position: absolute;
    //         left: 90%;
    //         top: 205px;
    //         width: 187px;
    //         height: 313px;
    //         transform: rotate(0deg)scale(1.8);  
    //     `;
    // setTimeout(() => {
    //     Card.style.cssText = `
    //         position: absolute;
    //         top: 205px;
    //         left:calc(50% - (187px/2));
    //         width: 187px;
    //         height: 313px;
    //         transform: rotate(720deg) scale(1);
    //         transition: 2s, right 1s 2s;
    //     `;
    // }, 500);
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
};