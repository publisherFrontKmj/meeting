// jquery ver 2 
var $newJquery = jQuery.noConflict(); // jquery 충돌 방지 alias

function stickySet(){
    var sticker = document.getElementById('stickyBox_0');

    sticker.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];

        sticker.style.left = touchLocation.pageX + 'px';
        sticker.style.top = touchLocation.pageY + 'px';
    });
    sticker.addEventListener('touchend', function(e) {
        var x = parseInt(sticker.style.left);
        var y = parseInt(sticker.style.top);
    });
}

// 스티커 메모
$newJquery(".stiker_memo").on("click", function(i) {
    $sticky = $(
        "<div id='stickyBox_0' class='sticky draggable' onmousemove='return false'>" + 
        "	<div class='sticky_header'>" + 
        "		<i class='sticky_control sticky_close'>x</i>" +
        "	</div>" + 
        "	<div class='sticky_text'>" +
        "		<textarea class='sticky_cont' placeholder='메모를 입력하세요.'></textarea>" +
        "	</div>" +
        "</div>"
    );
    $newJquery("body").append($sticky);

    stickySet(); 

    $newJquery(".sticky.draggable").draggable(); 

    if($newJquery(".sticky.draggable").length >= 3){
        $newJquery(".stiker_memo").off("click");
    } 

    $newJquery(".sticky .sticky_close").on("click", function(){ 
        var ownSticky = $(this);

        $newJquery(".viewer_total_drawing_layer02").addClass("on");
        $newJquery(".layer_bg").addClass("on");

        $newJquery(".drawing_layer_btn").on("click", function(){
            if($newJquery(this).hasClass("drawing_layer_btn_yes02")){
                ownSticky.parents(".sticky").hide();
            }
            $newJquery(".viewer_total_drawing_layer02").removeClass("on");
            $newJquery(".layer_bg").removeClass("on");
        });
    }); 

    $newJquery(".sticky.draggable").each(function(i){
        $newJquery(this).css({"z-index":(i + 4), "margin-top":(i * 30 + "px")});

        $newJquery(this).attr("id", "stickyBox_0" + ($(this).index()-1)); 
    }); 

});