jQuery(document).ready(function () {
    "use strict";
    jQuery("body").find('#home-slider').fadeIn();
    jQuery("#home-slider").nerveSlider({
        sliderAutoPlay: true,
        slideTransitionDelay: 5000,
        sliderWidth: "100%",
        sliderHeight: "100%",
        sliderHeightAdaptable: false,
        slidesDraggable: false,
        allowKeyboardEvents: false,
        sliderResizable: true,
        sliderKeepAspectRatio: false,
        slideTransition: "slide", // slide or fade
        slideTransitionSpeed: 1200,
        slideTransitionEasing: "easeOutQuint",
        showDots: false,
        waitForLoad: true,
        slideTransitionStart: function () {
            jQuery('.ns_slideContent').find('div').fadeOut(100);
            jQuery('.ns_slideContent').find('div h1').toggleClass();
            jQuery('.ns_slideContent').find('div p').toggleClass();
            if (jQuery(window).width() > 1024) {
                setTimeout(function () {
                    jQuery('#home-slider').find('img').removeClass('image-zoom scale-left scale-right scale-up scale-down');
                }, 1000);
            }
        },
        slideTransitionComplete: function () {
            jQuery("#home-slider").data("selectedSlide").find('.ns_slideContent div').fadeIn();
            jQuery('.ns_slideContent').find('div h1').toggleClass();
            jQuery('.ns_slideContent').find('div p').toggleClass();
            if (jQuery(window).width() > 1024) {
                var imgAnimation = jQuery("#home-slider").data("selectedSlide").find("img").data("animation");
                jQuery("#home-slider").data("selectedSlide").find("img").addClass(imgAnimation);
            }
        }
    });
});
