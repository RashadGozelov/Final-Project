(function ($) {
 "use strict";
    
/*--
    WOW active 
------------------------- */
	new WOW().init(); 
/*--
    stickey menu
------------------------- */
    $(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 265) {
		$(".sticky-header").removeClass("sticky");
	   }else{
		$(".sticky-header").addClass("sticky");
	   }
	});  
	
/*--
    02. jQuery MeanMenu
------------------------- */
$('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu-area .mobile-menu",
});  
/*--
    Nice Select
------------------------- */	
$('.nice-select').niceSelect(); 
    
/*--- Vertical-Menu Activation ----*/
    
$('.categories-toggler-menu').on('click', function () {
    $('.vertical-menu-list').slideToggle();
});	    
/*---
	3. Category Menu Active
---------------------------- */	
$('.categories-more-less').on('click', function(){
    $('.hide-child').slideToggle();
    $(this).toggleClass('rx-change');
});		
/*--
 owl active
--------------------------- */    
$('.slider-active').owlCarousel({
    loop:true,
    items:1,
    autoplay: false,
    dots:true,
    nav:false,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1},
        1200:{items:1}
    }
}); 
/*--
 owl active
------------------------------ */    
$('.slider-active-2').owlCarousel({
    loop:true,
    items:1,
    dots:true,
    nav:true,
    navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1},
        1200:{items:1}
    }
}); 
    /*--
 owl active
------------------------------ */    
$('.product-h-2.priduct-module-1-active').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    margin: 30,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        767:{items:2},
        992:{items:1},
        1200:{items:1}
    }
});
/*--
 owl active
------------------------------ */    
$('.priduct-module-1-active').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1},
        1200:{items:1}
    }
});

/*--
 owl active
------------------------------ */    
$('.deals-offer-active').owlCarousel({
    loop:true,
    items:2,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        768:{items:1},
        992:{items:2},
        1200:{items:2}
    }
}); 
/*--
 owl active
------------------------------ */    
$('.deals-offer-one-active').owlCarousel({
    loop:true,
    items:2,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        768:{items:1},
        992:{items:1},
        1200:{items:1}
    }
});   
/*--
 owl active
------------------------------ */    
$('.feategory-active').owlCarousel({
    loop:true,
    items:5,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        480:{items:2},
        768:{items:4},
        992:{items:5},
        1200:{items:5}
    }
});     
/*--
 owl active
------------------------------ */    
$('.prodict-active').owlCarousel({
    loop:true,
    items:4,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        480:{items:2},
        768:{items:3},
        992:{items:4},
        1200:{items:4}
    }
});  
/*--
 owl active
------------------------------ */    
$('.prodict-active-4').owlCarousel({
    loop:true,
    items:4,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        480:{items:1},
        768:{items:3},
        992:{items:3},
        1200:{items:3}
    }
}); 
/*--
 owl active
------------------------------ */    
$('.prodict-two-active').owlCarousel({
    loop:true,
    items:4,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        480:{items:2},
        768:{items:3},
        992:{items:4},
        1200:{items:5}
    }
}); 
/*--
 owl active
------------------------------ */    
$('.product-three-active').owlCarousel({
    loop:true,
    items:4,
    dots:false,
    nav:true,
    navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
    responsive:{
        0:{items:1},
        480:{items:2},
        768:{items:2},
        992:{items:3},
        1200:{items:4}
    }
});  
/*--
 owl active
------------------------------ */    
$('.brand-active').owlCarousel({
    loop:true,
    items:1,
    margin:15,
    dots:false,
    nav:false,
    responsive:{
        0:{items:1},
        480:{items:2},
        768:{items:4},
        992:{items:5},
        1200:{items:5}
    }
}); 
/*--
 owl active
------------------------------ */    
$('.product-category-active').owlCarousel({
    loop:true,
    items:1,
    margin:15,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1},
        1200:{items:1}
    }
});    
/*--
 owl active
------------------------------ */    
$('.articles-cont-active').owlCarousel({
    loop:true,
    items:1,
    margin:15,
    dots:false,
    nav:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1},
        1200:{items:1}
    }
});       
/*--
 owl active
------------------------------ */    
$('.single-product-active').owlCarousel({
    loop:false,
    items:4,
    margin:15,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:2},
        480:{items:3},
        768:{items:4},
        992:{items:4},
        1200:{items:4}
    }
});     
/*--
 owl active
------------------------------ */    
$('.from-blog').owlCarousel({
    loop:true,
    items:2,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        480:{items:1},
        768:{items:2},
        992:{items:2},
        1200:{items:2}
    }
}); 
    
/*--
 owl active
------------------------------ */
$('.post-slider').owlCarousel({
    loop:true,
    items:1,
    dots:true,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1},
        1200:{items:1}
    }
}); 
/*--
 owl active
------------------------------ */
    
$('.testimonials-active').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1},
        1200:{items:1}
    }
});
    
    
/*--
    elevateZoom
------------------------------ */	
    $("#zoom1").elevateZoom({
        gallery:'gallery_01', 
        responsive : true,
        zoomType : 'inner',
        cursor: 'crosshair'
    });  
    
    
    
/*--
  11. price-slider active
-----------------------------*/  
$( "#price-slider" ).slider({
   range: true,
   min: 0,
   max: 145,
   values: [ 20, 440 ],
   slide: function( event, ui ) {
        $( "#min-price" ).val('$' + ui.values[ 0 ] );
        $( "#max-price" ).val('$' + ui.values[ 1 ] );
     }
  });
  $( "#min-price" ).val('$' + $( "#price-slider" ).slider( "values", 0 ));   
  $( "#max-price" ).val('$' + $( "#price-slider" ).slider( "values", 1 )); 
    	
    
    
    
/*---
    select last tab 
-------------------------*/
    
$('.tabs-categorys-list a[href="#new-arrivals"],.shop-item-filter-list a[href="#grid"],.discription-tab-menu a[href="#description"]').tab('show')
	
/*--
	Count Down Timer
----------------------------*/
$('[data-countdown]').each(function() {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>mins</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>secs</p></span>'));
	});
});      
    
    
/*--
  Vertical-Menu Activation
-----------------------------*/
$('.categorie-title,.mobile-categorei-menu').on('click', function () {
    $('.vertical-menu-list,.mobile-categorei-menu-list').slideToggle();
});

/*--
  Category menu Activation
------------------------------*/
$('#cate-toggle li.has-sub>a,#cate-mobile-toggle li.has-sub>a').on('click', function () {
    $(this).removeAttr('href');
    var element = $(this).parent('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
    } else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
    }
});
    
/*--
    Accordion
-------------------------*/
$(".faequently-accordion").collapse({
    accordion:true,
  open: function() {
    this.slideDown(300);
  },
  close: function() {
    this.slideUp(300);
  }		
});	 
    
/*--
  showlogin toggle function
--------------------------*/
$( '#showlogin' ).on('click', function() {
    $( '#checkout-login' ).slideToggle(500);
}); 
    
/*--
  showcoupon toggle function
--------------------------*/
$( '#showcoupon' ).on('click', function() {
    $( '#checkout-coupon' ).slideToggle(500);
});
    
/*--- Checkout ---*/
$("#chekout-box").on("change",function(){
    $(".account-create").slideToggle("100");
});
    
/*-- Checkout -----*/
$("#chekout-box-2").on("change",function(){
    $(".ship-box-info").slideToggle("100");
});   
       
    
/*--
    ScrollUp Active
-----------------------------------*/
$.scrollUp({
    scrollText: '<i class="fas fa-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
}); 
/*--
    Instafeed
-----------------------------------------*/   
    if($('#instagram-feed').length) {
    var feed = new Instafeed({
        get: 'user',
        userId: 6665768655,
        accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
        target: 'instagram-feed',
        resolution: 'thumbnail',
        limit: 6,
        template: '<li><a href="{{link}}" target="_new"><img src="{{image}}" /></a></li>',
    });
    feed.run();
}  
    
 
    
/*--------
    DateCountdown active 
------------------------------------- */
$(".DateCountdown").TimeCircles({
    direction: "Counter-clockwise",
    fg_width: 0.009,
    bg_width: 0,
    use_background: false,
    time: {
        Days: {
            text: "Days",
            color: "#fff"
        },
        Hours: {
            text: "Hours",
            color: "#fff"
        },
        Minutes: {
            text: "Mins",
            color: "#fff"
        },
        Seconds: {
            text: "Secs",
            color: "#fff"
        }
    }

});


    
    
    
    
    
 
})(jQuery);


  
  
  
  
  
  
  