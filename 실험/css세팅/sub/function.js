$(()=>{
    const box = $(".icon")
    const Card = $(".card-box img")
    // console.log(Card)
    Card.draggable()
    box.draggable({
            cursor: "grabbing",
            // 드래그 대상 상위처리(z-index)
            stack: ".icon",
            // 이동중 투명도 설정
            opacity: 0.7,
    })
    let num = 0
    $('.basket').droppable({
        drop: function(evt,ele){
            num++
            console.log(num)
            let ta = ele.draggable;
            ta.hide()
            let imoz = ta.find("i").text()
            let itit = ta.find("span").text()
            
            console.log(imoz.index)
            let imbox = $(".imozbox p")
            
            console.log(imbox);
            if(num < 7){ $(this).append(`<div class="imozbox"><p>${imoz}</p><span>${itit}</span></div>`);}
        }});
})
