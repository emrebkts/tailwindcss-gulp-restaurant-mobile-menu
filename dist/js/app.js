$(document).ready(function () {

    $(".open-left-slide-menu").click(function () {
        $(".slide-menu").toggleClass("slide-left");
    });
    $('.slide-close-button, .slider-overlay').click(function () {
        $(".slide-menu").removeClass("slide-left");
    });


    $(".btn_ , [data-btn-ripple]")
        .on("mousedown touchstart", function () {
            $(this).css('transform', 'scale(0.95)');
        })
        .on("mouseup touchend", function () {
            $(this).css('transform', 'scale(1)');
        })

});


