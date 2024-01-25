var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../1.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../2.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../3.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../1.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../4.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../5.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../6.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../7.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../8.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../9.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../10.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../11.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../12.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../13.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../14.jpg',
            w: 964,
            h: 1024
        },
       {
            src: '../15.jpg',
            w: 964,
            h: 1024
        },

        {
            src: '../16.jpg',
            w: 1024,
            h: 683
        }
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};

openPhotoSwipe();

document.getElementById('btn').onclick = openPhotoSwipe;