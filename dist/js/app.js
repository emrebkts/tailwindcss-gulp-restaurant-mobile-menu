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



    // rating

    var $rating = $('.rating');
    var $stars = $('.rating .star');

    $stars.each(function() {
        var $this = $(this);
        var rating = $this.data('rating');



        $this.on('click', function(e) {
            e.preventDefault();
            if($this.hasClass('selected')) {
                return false;
            }

            const $rating_input_class = $rating.data("input-class");

            if ($rating_input_class){
                $($rating_input_class).val(rating)
            }

            $stars.removeClass('selected');
            $this.addClass('selected');

        });
    });


});


