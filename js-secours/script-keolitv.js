$(document).ready(function() {
    

  // SMOOTH PAGE TRANSITION
	$('.holder').toggleClass("visible");
	$('a.link').click(function(event) {
		// Over-rides the link
		event.preventDefault();
		// Sets the new destination to the href of the link
		newLocation = this.href;
		color = $(this).data("color");
		$('body').css('background-color', color );
		  
        
        $('.holder').animate({
                opacity: "0"
        }, 300);
      
        // Delays action
		window.setTimeout(function() {
		    // Redirects to new destination
				window.location = newLocation;
		}, 300);
        
	});
    
    // POSITION LOADER 
    function positionTopLoader(e) {      
        var height_Window = $(window).height();        
        var height_LoaderSquare = $('.loaderSquare-container').height();
        var marginTop_LoaderSquare = (height_Window - height_LoaderSquare) / 2;
        if("matchMedia" in window) {
            if(window.matchMedia("(max-width:768px)").matches) {    
                $('.loaderSquare-container').css("top", marginTop_LoaderSquare);
            }else if(window.matchMedia("(min-width:1200px)").matches){
                $('.loaderSquare-container').css("top", marginTop_LoaderSquare);
            }else{
                $('.loaderSquare-container').css("top", marginTop_LoaderSquare);
            }
        }
    }
    // On lie l'événement resize à la fonction
    window.addEventListener('resize', positionTopLoader, false);
    positionTopLoader();
    
    
    // LOADER PAGE //
    setTimeout(function(){
       $(".loader-logo").addClass("animated fadeIn");
    }, 1800);
    setTimeout(function(){
       $(".loader").fadeOut(300);
    }, 3000);
    
    
        // LOADER PAGE //
    setTimeout(function(){
       $(".loader-logo").addClass("animated fadeIn");
    }, 1800);
    setTimeout(function(){
       $(".loader").fadeOut(300);
    }, 3000);
    setTimeout(function() {
        $('.navbar').addClass('animated fadeInDown');
    }, 3200); 
    setTimeout(function(){
       $(".project-picture--1").addClass("is-visible")
    }, 3600);
    setTimeout(function(){
       $(".project-picture--1").css("opacity", "1");
    }, 3601);
    setTimeout(function(){
        $(".scroll").removeClass("not-allowed");
    }, 3700);
    setTimeout(function(){
        $(".intro").addClass("intro--moveUp");
    }, 3900);
    
    
    
    
    $(window).scroll(function() {
        var positionWindow = $(window).scrollTop();
        var fixedPosition_StickyAnchor = $("#sticky-anchor").offset().top;
        
        if(positionWindow > fixedPosition_StickyAnchor - 100){
            $("#sticky").addClass("stick");
            $("#sticky-offset").css("display", "block");
            $("#project-picture").css("display", "none");
        }
        else{
            $("#sticky").removeClass("stick"); 
            $("#sticky-offset").css("display", "none");
            $("#project-picture").css("display", "block");
        }
    });

    
    
    $(window).scroll(function() {
        var positionWindow = $(window).scrollTop();
        var fixedPosition_blueBackground = $(".blueBackground").offset().top;
        
        if(positionWindow > fixedPosition_blueBackground - 100){
            $(".sectionTitle-txt").addClass("is-white");
            $(".sectionTitle-container").addClass("is-white");
            
        }
        else{
            $(".sectionTitle-txt").removeClass("is-white");
            $(".sectionTitle-container").removeClass("is-white");
            
        }
    });
    
    
    
      $(window).scroll(function() {
        var positionWindow = $(window).scrollTop(); 
        if(positionWindow > 1){
            $(".navbar").addClass("is-visible");
            $(".intro").addClass("is-shadow");
        }
        else{
            $(".navbar").removeClass("is-visible");
            $(".intro").removeClass("is-shadow");
        }
    });  
    
    
    var off = $(".blueBackground-2").offset().top;    
    $(window).scroll(function() {
        
        var positionWindow = $(window).scrollTop();
        if (positionWindow >= (off)) {
            var translate_Tvshow =  (positionWindow - off) / $(window).height() * 40;
            var translate_Hour =  (positionWindow - off) / $(window).height() * 10;
            $(".sliderTVshow").css({transform: 'translateX(' + "-" + translate_Tvshow +'%)'});
            $(".sliderHour").css({transform: 'translateX(' + "-" + translate_Hour +'%)'});
        }
    });
            

    
    
    setTimeout(function(){
        var height_Footer = $(window).height() + 300;
        var marginTop_TxtHeadline = $(window).height() / 4;
        var height_Slider = $(".sliderProgram").height();
        var marginTop_Slider = ($(window).height() - height_Slider) / 2;
        $(".footer").css("height", height_Footer);
        $(".footer .txt-headTitle-container").css("margin-bottom", marginTop_TxtHeadline);
        $(".sliderProgram").css("padding-top", marginTop_Slider);
        
    }, 100);
    
    

        


    
    
    // Hover social icon
    $(".social-icon").hover(function() {
        $(".social-icon").not(this).stop(true, false).animate({
            opacity: "0.5"
        });
    }, function() {
        $(".social-icon").not(this).stop(true, false).animate({
            opacity: "1"
        });
    });
    
    
    $(".arrow-up").click(function (){
            $('html, body').animate({scrollTop:$(".navbar").offset().top}, 5000);
    });
    
    var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
    scrollorama
    .animate("#project-picture", {delay: -100, duration: 1500, property: "top", start:50, end: 800})
    .animate("#p1_parallax1_1", {delay: -400, duration: 2700, property: "top", start: 0, end: -800})
    .animate("#p1_parallax1_2", {delay: 0,duration: 1500,property: "top",start: -100,end: -500})
    .animate("#preScreen-home", {delay: 0,duration: 2000,property: "top",start: 200,end: -500})
    .animate("#preScreen-login", {delay: 0,duration: 1300, property: "top",start: 300,end: -500})
    .animate("#text-headlineApp", {delay: 0,duration: 2000,property: "top",start: 0,end: -800})
    .animate("#content_tvguide", {delay: 0,duration: 1500,property: "top",start: 100,end: -800})
    .animate("#appScreen-actor", {delay: 0,duration: 1500,property: "top",start: 500,end: -800})
    .animate("#appScreen-menu", {delay: 0,duration: 1500,property: "top",start: 500,end: -800});
    
    
    
     /////// CONTACT FORM POSITION + ANIMATION TO MAKE IT VISIBLE ////////
    function positionTopContactForm(e) {
        var height_Window = $(window).height();   
        var height_ContactForm = $('.contactForm').outerHeight();
        var positionTop_ContactForm = (height_Window - height_ContactForm) / 2;
        return positionTop_ContactForm;
    }
    $('#contact_link').click(function() {
        
        var topContactForm = positionTopContactForm();
        
        $('.whiteOverlay').fadeIn( "slow" );
        $(".contactForm").css("display", "block");
        
        setTimeout(function(){
            $(".contactForm").animate({
                opacity: "1",
                top: topContactForm
            }, 300);
        }, 600);
	});
    $('.whiteOverlay').click(function() {
        
        $(this).fadeOut( "slow" );
        $(".contactForm").animate({
                opacity: "0"
        }, 300);
         setTimeout(function(){
            $(".contactForm").css("display", "none");
             $(".contactForm").css("top", "0px");
        }, 1000);
        
	});

    
});