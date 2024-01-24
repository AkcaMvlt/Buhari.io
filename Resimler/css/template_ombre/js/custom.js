/* MAIN MENU */

var mobileMenu = function () {
    "use strict";
    jQuery('#header-menu').find(".nav li a").each(function () {
        if (jQuery(this).next().length > 0) {
            jQuery(this).addClass("parent");
        }
    });
    jQuery('#header-menu').find(".toggleMenu").on('click', function (e) {
        e.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery('#header-menu').find(".nav").toggle();
    });
};

var adjustMenu = function () {
    "use strict";
    var ww = document.body.clientWidth;
    if (ww <= 1024) {
        jQuery('#header-menu').find(".toggleMenu").css("display", "inline-block");
        if (!jQuery('#header-menu').find(".toggleMenu").hasClass("active")) {
            jQuery('#header-menu').find(".nav").hide();
        } else {
            jQuery('#header-menu').find(".nav").show();
        }
        jQuery('#header-menu').find(".nav li").unbind('mouseenter mouseleave');
        jQuery('#header-menu').find(".nav li a.parent").unbind('click').on('click', function (e) {
            e.preventDefault();
            jQuery(this).parent("li").toggleClass("hover");
        });
    } else if (ww > 1024) {
        jQuery('#header-menu').find(".toggleMenu").css("display", "none");
        jQuery('#header-menu').find(".nav").show();
        jQuery('#header-menu').find(".nav li").removeClass("hover");
        jQuery('#header-menu').find(".nav li a").unbind('click');
        jQuery('#header-menu').find(".nav li").unbind('mouseenter mouseleave').on('mouseenter mouseleave', function () {
            jQuery(this).toggleClass('hover');
            jQuery(this).toggleClass('activelink');
            jQuery(this).find("ul").toggleClass('animatedfast');
            jQuery(this).find("ul").toggleClass('menudown');
        });
        jQuery('#header-menu').find(".nav ul").unbind('mouseenter mouseleave').on('mouseenter mouseleave', function () {
            jQuery(this).toggleClass('hover');
            jQuery(this).find("ul").toggleClass('animatedfast');
            jQuery(this).find("ul").toggleClass('menudown');
        });
    }
};

/* CATEGORY MENU */

jQuery("#horizontal-menu-title").on('click', function () {
    "use strict";
    if (jQuery(this).hasClass('horizontal-menu-animate')) {
        jQuery(this).removeClass('horizontal-menu-animate');
        jQuery(".horizontal-menu").find('li').not('#horizontal-menu-title').removeClass('hide-menu').addClass('show-menu');
        jQuery(".horizontal-menu").find('li').not('#horizontal-menu-title').show();
    }
    else {
        jQuery(this).addClass('horizontal-menu-animate');
        jQuery(".horizontal-menu").find('li').not('#horizontal-menu-title').removeClass('show-menu').addClass('hide-menu');
        setTimeout(function(){
            jQuery(".horizontal-menu").find('li').not('#horizontal-menu-title').hide();
        }, 400);
    }
});

var responsiveMenu = function () {
    "use strict";
    var ww = document.body.clientWidth;
    if (ww <= 1024) {
        jQuery("#horizontal-menu-title").addClass('horizontal-menu-animate');
        jQuery(".horizontal-menu").find('li').not('#horizontal-menu-title').removeClass('show-menu').addClass('hide-menu');
        jQuery(".horizontal-menu").find('li').not('#horizontal-menu-title').hide();
    }
    else {
        jQuery("#horizontal-menu-title").removeClass('horizontal-menu-animate');
        jQuery(".horizontal-menu").find('li').not('#horizontal-menu-title').removeClass('hide-menu').addClass('show-menu');
        jQuery(".horizontal-menu").find('li').not('#horizontal-menu-title').show();
    }
};

/* BACK TO TOP */

jQuery("#back-to-top").on('click', function (event) {
    "use strict";
    event.preventDefault();
    jQuery('body,html').animate({
        scrollTop: 0
    }, 500);
});

/* TOOLTIPS */
jQuery("body").find('.tooltip-dark').tooltipster({
    theme: 'tooltipster-dark',
    delay: 400,
    hideOnClick: true,
    touchDevices: false,
    position: 'top',
    offsetY: 3,
    animation: 'fade'
});
jQuery("body").find('.tooltip-light').tooltipster({
    theme: 'tooltipster-light',
    delay: 400,
    hideOnClick: true,
    touchDevices: false,
    position: 'top',
    offsetY: 3,
    animation: 'fade'
});
jQuery("body").find('.tooltip-pink').tooltipster({
    theme: 'tooltipster-pink',
    delay: 0,
    hideOnClick: true,
    touchDevices: false,
    position: 'top',
    offsetY: 3,
    animation: 'swing'
});
jQuery("body").find('.tooltip-gototop').tooltipster({
    theme: 'tooltipster-gototop',
    delay: 400,
    hideOnClick: true,
    touchDevices: false,
    position: 'left',
    offsetX: -7,
    arrow: false,
    animation: 'fade'
});
jQuery("body").find('.tooltip-header').tooltipster({
    theme: 'tooltipster-pink',
    delay: 0,
    hideOnClick: true,
    touchDevices: false,
    position: 'top',
    offsetY: 3,
    animation: 'fall'
});

/* EVENTS */
jQuery(window).load(function () {
    "use strict";
    jQuery('#header-menu').css('pointer-events', 'auto');
    jQuery('body').find(".owl-prev:empty").parent().hide();
    setTimeout(function(){
        jQuery("#featured-image-title h1").addClass("showtitle");
        jQuery("#featured-image-title p").addClass("showtitle");
        jQuery('#featured-image').find(".backstretch").addClass("image-zoom");
    }, 1500);
    responsiveMenu();
});

jQuery(document).ready(function () {
    "use strict";

    /* BG IMAGE */
    if (jQuery(window).width() > 1024) {
        /* PCs,Desktops etc. */
        jQuery('body').backstretch("https://eroxx.be/public/css/template_ombre/images/photos/bg.jpg",{fade:1000});
    }
    else {
        /* Mobile Devices */
        jQuery('body').backstretch("https://eroxx.be/public/css/template_ombre/images/photos/bg.jpg");
    }
    /* BG IMAGE END */
    jQuery( ".nav > li:has(ul)" ).addClass('nav-arrow');
    mobileMenu();
    adjustMenu();
    /* Pretty embed */
    jQuery('.flex-video').each(function() {
    var embedThumb = jQuery(this).data("thumb");
    jQuery(this).prettyEmbed({
        customPreviewImage: embedThumb,
        showInfo: false,
        showControls: true,
        loop: false,
        showRelated: false,
        useFitVids: true
    });
    });
    /* Pretty embed end */
});

jQuery(window).on('resize orientationchange', function () {
    "use strict";
    adjustMenu();
    responsiveMenu();
});

if($("#no-sort").length) {
    jQuery('#no-sort').dataTable({
        "ordering": false
    });
}
