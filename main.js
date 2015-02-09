$(document).ready(function() {
        $(".games img").hover(imgHoverIn, imgHoverOut);
        });

function imgHoverIn() {
    $(this).animate({
        opacity: 0.25,
        left: "+50",
    }, 100, function() {
        //Animation complete
    });
}

function imgHoverOut() {
    $(this).animate({
        opacity: 1,
        left: "-50",
    }, 100, function() {
        //Animation complete
    });
}