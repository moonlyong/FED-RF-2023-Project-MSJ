import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function dragIcon() {
    const box = $(".icon");
    const Card = $(".card-box img");

    Card.draggable();
    box.draggable({
        start: function(event, ui) {
            // 드래그 시작 시 원래 위치를 저장합니다.
            $(this).data("originalTop", ui.position.top);
            $(this).data("originalLeft", ui.position.left);
        },
        cursor: "grabbing",
        stack: ".icon",
        opacity: 0.7,
        revert: "invalid",
        revertDuration: 200 
    });

    let num = 0;
    $('.basket').droppable({
        drop: function(event, ui) {
            num++;
            let ta = ui.draggable;
            let imoz = ta.find("i").text();
            let itit = ta.find("span").text();

            if (num < 6) {
                $(this).append(`<div class="imozbox"><p>${imoz}</p><span>${itit}</span></div>`);
                ta.hide();
            } else {
                // 요소를 원래 위치로 되돌립니다.
                ta.animate({
                    top: ta.data("originalTop"),
                    left: ta.data("originalLeft")
                }, 200);
                num--; // 드롭 실패 시 카운터를 감소시킵니다.
            }
        }
    });
}
