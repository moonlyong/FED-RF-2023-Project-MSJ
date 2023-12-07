import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function FadeOut() {
    let Fadebox = $(".card-pick-fade-out");
    let Finbox = $('.fade-in')
    console.log(Fadebox)
    setTimeout(() => {
        Fadebox.css({
            display:"none",
        });
        Finbox.css({
            display:"block",
        })
    }, 5000);


}
