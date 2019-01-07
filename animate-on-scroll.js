$(document).ready(function(){
    var $animatable_elements = $('.animateOnScroll');
    var $window = $(window);

    //handle both scrolling and resizing the window
    $window.on('scroll resize', animate_if_in_view);

    //first, hide all the animatable elements 
    $.each($animatable_elements, function() {
        $(this).css("opacity", 0);
    });

    function animate_if_in_view() {
        var $window_height = $window.height();
        var $window_top = $window.scrollTop();
        var $window_bottom = $window_top + $window_height;

        $.each($animatable_elements, function(){
            var $element = $(this);
            var $element_top = $element.offset().top;

            //instead of animating the element as soon as it's in view, 
            //buffer by 100px for the motion to be more visible
            if ($element_top < $window_bottom - 100) {
                $element.addClass("inView");
            }
            else {
                $element.removeClass("inView");
            }
        });
    }

    $window.trigger('scroll');
});