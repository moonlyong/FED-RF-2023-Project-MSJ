import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function dragIcon(setBasketItems) {
	const box = $(".icon");
	const Card = $(".card-box img");
	const basket = $(".basket");

	// Card.draggable();
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


    function dropItemToBasket(item, basket) {
        let imoz = item.find("i").text();
        let itit = item.find("span").text();
        console.log("드랍객체", itit);

        setBasketItems((prevItems) => {
            const newItems = [...prevItems, { itit, imoz }];
            if (newItems.length <= 5) {
                basket.append(`<div class="imozbox"><p>${imoz}</p><span>${itit}</span></div>`);
                item.hide();
                return newItems;
            } else {
                item.animate({
                    top: item.data("originalTop"),
                    left: item.data("originalLeft"),
                }, 200);
                return prevItems;
            }
        });
    }

    basket.droppable({
        drop: function (event, ui) {
            let ta = ui.draggable;
            dropItemToBasket(ta, $(this));
        },
    });

    // box.dblclick(function() {
    //     dropItemToBasket($(this), basket);
    // });
}
