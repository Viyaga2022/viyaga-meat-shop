new WOW().init();

var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 50,          // distance to the element when triggering the animation (default is 0)
        mobile: false      // trigger animations on mobile devices (true is default)
    });
wow.init();

jQuery(window).on('load',function () {
	'use strict'; 
	w3kit.load();
    
	setTimeout(function(){
		jQuery('#splashscreen').addClass('active');
	 	jQuery('#splashscreen').fadeOut(1500);
	}, 1500);
	
    $('.theme-dark .custom-switch input').prop('checked', true).addClass('active');
	
});
