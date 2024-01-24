// GALLERY 1
jQuery('.grid-img').lightGallery();
/*
jQuery('#gallery1 a').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        zoom: true,
        mode: 'lg-zoom-out-in',
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        hash: false,
        pager: false,
        // Images
        dynamicEl: [{
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': 'Lorem ipsum dolor'
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Ullamco ubi mandaremus"
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Quae expetendis"
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Non nulla"
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Voluptate illum dolore"
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Tempor varias possumus"
        }]
    });
});
 */
// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 1
        },
        vimeoPlayerParams: {
            byline : 0,
            portrait : 1,
            color : 'f5245f'     
        },
        // Settings
        dynamic: true,
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: false,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            { // You Tube videos work only on a server.
                "poster": 'images/photos/856x476.png',
                "src": "http://www.youtube.com/embed/_gGYFFW3Ga0",
                "subHtml": "You Tube"
            },
            {
                "poster": 'images/photos/856x476.png',
                "src": "http://vimeo.com/17203320",
                "subHtml": "Vimeo"
            },
            { // You Tube videos work only on a server.
                "poster": 'images/photos/856x476.png',
                "src": "http://www.youtube.com/embed/feOScd2HdiU",
                "subHtml": "You Tube"
            }
        ]
    });
});

// GALLERY 3
jQuery('#gallery3 a').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        zoom: true,
        mode: 'lg-zoom-out-in',
        fullScreen: true,
        autoplay: true,
        pause: 5000,
        thumbnail: true,
        download: true,
        counter: true,
        hash: false,
        pager: false,
        // Images
        dynamicEl: [{
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': 'Lorem ipsum dolor'
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Ullamco ubi mandaremus"
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Quae expetendis"
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Non nulla"
        }, {
            'src': 'images/photos/1600x900.png',
            'thumb': 'images/photos/150x120.png',
            'subHtml': "Voluptate illum dolore"
        }]
    });
});

// GALLERY 4
jQuery('#gallery4 a').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        zoom: true,
        mode: 'lg-zoom-out-in',
        fullScreen: true,
        autoplay: false,
        thumbnail: false,
        download: true,
        counter: true,
        hash: false,
        pager: false,
        // Images
        dynamicEl: [{
            'src': 'images/photos/1600x900.png',
            'subHtml': 'Lorem ipsum dolor'
        }, {
            'src': 'images/photos/1600x900.png',
            'subHtml': "Ullamco ubi mandaremus"
        }, {
            'src': 'images/photos/1600x900.png',
            'subHtml': "Quae expetendis"
        }, {
            'src': 'images/photos/1600x900.png',
            'subHtml': "Non nulla"
        }, {
            'src': 'images/photos/1600x900.png',
            'subHtml': "Voluptate illum dolore"
        }]
    });
});

// GALLERY 5
jQuery('#gallery5 a').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        zoom: false,
        mode: 'lg-zoom-out-in',
        fullScreen: false,
        autoplay: false,
        autoplayControls: false,
        thumbnail: false,
        download: false,
        counter: true,
        hash: false,
        pager: false,
        // Images
        dynamicEl: [{
            'src': 'images/photos/1600x900.png',
        }, {
            'src': 'images/photos/1600x900.png',
        }, {
            'src': 'images/photos/1600x900.png',
        }, {
            'src': 'images/photos/1600x900.png',
        }, {
            'src': 'images/photos/1600x900.png',
        }]
    });
});