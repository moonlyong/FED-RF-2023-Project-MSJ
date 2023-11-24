import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function dragIcon(setBasketItems) {
    const box = $(".icon");
    const Card = $(".card-box img");

    Card.draggable();
    box.draggable({
        start: function (event, ui) {
            // 드래그 시작 시 원래 위치를 저장합니다.
            $(this).data("originalTop", ui.position.top);
            $(this).data("originalLeft", ui.position.left);
        },
        cursor: "grabbing",
        stack: ".icon",
        opacity: 0.7,
        revert: "invalid",
        revertDuration: 200,
    });

    $(".basket").droppable({
        drop: function (event, ui) {
            let ta = ui.draggable;
            let imoz = ta.find("i").text();
            let itit = ta.find("span").text();
            console.log('드랍객체', itit);

            setBasketItems((prevItems) => {
                // 새로운 아이템을 기존 아이템 배열에 추가합니다.
                const newItems = [...prevItems, { itit, imoz }];
                // 바구니에 아이템이 5개 이하인지 확인합니다.
                if (newItems.length <= 5) {
                    $(this).append(`<div class="imozbox"><p>${imoz}</p><span>${itit}</span></div>`)
                    ta.hide(); // 아이템을 숨깁니다.
                    return newItems; // 새로운 아이템 배열을 반환합니다.
                } else {
                    // 아이템을 원래 위치로 되돌립니다.
                    ta.animate(
                        {
                            top: ta.data("originalTop"),
                            left: ta.data("originalLeft"),
                        },
                        200,
                    );
                    return prevItems; // 아이템 개수가 실패 시 카운터를 감소시킵니다.
                }
            });
        },
    });
}
