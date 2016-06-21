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
        
        if(positionWindow > fixedPosition_StickyAnchor - 60){
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
        var section_Intro = $("#section_intro").offset().top - 50;
        var section_brand = $("#section_brand").offset().top - 150;
        var section_appOverview = $("#section_appOverview").offset().top - 150;
        var section_ui = $("#section_ui").offset().top - 150;
        var section_demo = $("#section_demo").offset().top - 200;
        var section_footer = $("#section_footer").offset().top - 150;
        
   
        var violetBackground = $(".violetBackground").offset().top - 120;
        var whiteBackground = $(".whiteGradientBackground").offset().top - 120;
        
        if (positionWindow < section_Intro - 100) {

        }else {// your != 0 case here
        }
        if (positionWindow > section_Intro && positionWindow < section_brand ) {
 
           $(".text-change").removeClass("active");
            $(".text-intro").addClass("active");
            
            
        }else {// your != 0 case here
        }
        if (positionWindow > section_brand && positionWindow < section_appOverview) {
     
                $(".text-intro").removeClass("active");
                $(".text-change").removeClass("active");
                $(".text-change2").addClass("active");
    
        }else {// your != 0 case here
        }
        if (positionWindow > section_appOverview && positionWindow < section_ui) {
            
                $(".text-change").removeClass("active");
                $(".text-change3").addClass("active");

        }else {// your != 0 case here
        }
        if (positionWindow > section_ui && positionWindow < section_demo) {
            
                $(".text-change").removeClass("active");
                $(".text-change4").addClass("active");
      
        }else {// your != 0 case here
        }
        if (positionWindow > section_demo && positionWindow < section_footer) {
            
                $(".text-change").removeClass("active");
                $(".text-change5").addClass("active");
                $(".sectionTitle-container").removeClass("is-black");
                $(".sectionTitle-container").addClass("is-white");

        }else {// your != 0 case here
        }
        if (positionWindow > section_footer) {         
             $(".text-change").removeClass("active");
        }else {// your != 0 case here
        }
        
        
        
        if (positionWindow > violetBackground && positionWindow < whiteBackground ) {
 
            $(".sectionTitle-container").removeClass("is-black");
           $(".sectionTitle-container").addClass("is-white");
             
        }else if(positionWindow > section_demo - 150){
              $(".sectionTitle-container").removeClass("is-black");
           $(".sectionTitle-container").addClass("is-white");
        }else{
              $(".sectionTitle-container").removeClass("is-white");
           $(".sectionTitle-container").addClass("is-black");
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
    
   
    
    
    setTimeout(function(){
        var height_Footer = $(window).height() + 300;
        var marginTop_TxtHeadline = $(window).height() / 4;
        $(".footer").css("height", height_Footer);
        $(".footer .txt-headTitle-container").css("margin-bottom", marginTop_TxtHeadline);
    }, 100);
    
            
        


    var a = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 400
        }
    });
    
    new ScrollMagic.Scene({triggerElement: "#sec0"})
        .setClassToggle("#step-0", "active").addTo(a),  
    new ScrollMagic.Scene({triggerElement: "#sec1"})
        .setClassToggle("#step-1", "active")
        .addTo(a), 
    new ScrollMagic.Scene({triggerElement: "#sec2"})
        .setClassToggle("#step-2", "active")
        .addTo(a), 
    new ScrollMagic.Scene({triggerElement: "#sec3"}).setClassToggle("#step-3", "active")
        .addTo(a), 
    
        
        
        
        
        
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
    .animate("#p1_parallax1_1", {delay: -940, duration: 2700, property: "top", start: 0, end: -800})
    .animate("#p1_parallax1_2", {delay: 0,duration: 1500,property: "top",start: -150,end: -500})
    .animate("#themeMosaic1", {delay: 0,duration: 2300,property: "top",start: 400,end: -500})
    .animate("#themeMosaic2", {delay: 0,duration: 2300, property: "top",start: 300,end: -500})
    .animate("#txtheadLine-appView", {delay: 200,duration: 900,property: "top",start: 200,end: -500})
    .animate("#appIcon-hour", {delay: 0,duration: 1500,property: "top",start: 150,end: -500})
    .animate("#appIcon-map", {delay: 200,duration: 900,property: "top",start: 420,end: -500})
    .animate("#appIcon-picture", {delay: 200,duration: 2800,property: "top",start: 100,end: -500});
    
    
    
    
     /////// CONTACT FORM POSITION + ANIMATION TO MAKE IT VISIBLE ////////
    function positionTopContactForm(e) {
        var height_Window = $(window).height();   
        var height_ContactForm = $('.contactForm').outerHeight();
        var positionTop_ContactForm = (height_Window - height_ContactForm) / 2;
        return positionTop_ContactForm;
    }
    $('.contact_link').click(function() {
        
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
    
    
    
    
    
    
    /////// SLIDER ACTIVTY ////////
    


          
        $('.sliderArrow').click(function() {
        
            var wayArrow = $( this ).attr('id')            
            var indexItem = $("#root").html();
            
            if(wayArrow == "right"){
                
                    indexItem = parseInt(indexItem) + 1;
                    $("#root").html(indexItem);
                
                    if(indexItem > 2){
                        $("#root").html(2);
                    }else{
                        if (indexItem==0) {
                            $(".sliderActivity-header--danse").animate({opacity: "1"}, 300);
                            $(".sliderActivity-header--healthy").animate({opacity: "0"}, 300);
                            $(".sliderActivity-header--fight").animate({opacity: "0"}, 300);
                            $(".sliderActivity-container").animate({marginLeft: "0px"}, 300);
                        }else {// your != 0 case here
                        }
                        if (indexItem==1) {
                            $(".sliderActivity-header--danse").animate({opacity: "0"}, 300);
                            $(".sliderActivity-header--healthy").animate({opacity: "1"}, 300);
                            $(".sliderArrow--left").animate({opacity: "1"}, 300);
                            $(".sliderActivity-container").animate({marginLeft: "-295px"}, 300);
                        }else {// your != 1 case here
                        }
                        if (indexItem==2) {
                            $(".sliderActivity-header--healthy").animate({opacity: "0"}, 300);
                            $(".sliderActivity-header--fight").animate({opacity: "1"}, 300);
                            $(".sliderArrow--right").animate({opacity: "0.5"}, 300);
                            $(".sliderActivity-container").animate({marginLeft: "-590px"}, 300);
                        }else {// your != 2 case here
                        }
                    }
            }else{
                    
                    indexItem = parseInt(indexItem) - 1;
                    $("#root").html(indexItem);
                    
                    if(indexItem < 0){
                        $("#root").html(0);
                    }else{
                        if (indexItem==0) {
                            $(".sliderActivity-header--danse").animate({opacity: "1"}, 300);
                            $(".sliderActivity-header--healthy").animate({opacity: "0"}, 300);
                            $(".sliderActivity-header--fight").animate({opacity: "0"}, 300);
                            $(".sliderArrow--left").animate({opacity: "0.5"}, 300);
                            $(".sliderActivity-container").animate({marginLeft: "0px"}, 300);
                        } else {// your != 0 case here
                        }
                        if (indexItem==1) {
                            $(".sliderActivity-header--danse").animate({opacity: "0"}, 300);
                            $(".sliderActivity-header--healthy").animate({opacity: "1"}, 300);
                            $(".sliderActivity-header--fight").animate({opacity: "0"}, 300);
                            $(".sliderArrow--right").animate({opacity: "1"}, 300);
                            $(".sliderActivity-container").animate({marginLeft: "-295px"}, 300);
                        } else {// your != 1 case here
                        }
                        if (indexItem==2) {
                            $(".sliderActivity-header--healthy").animate({opacity: "0"}, 300);
                            $(".sliderActivity-header--fight").animate({opacity: "1"}, 300);
                            $(".sliderActivity-container").animate({marginLeft: "-590px"}, 300);
                        } else {// your != 2 case here
                        }
                    }
                }
        
	   });
    
    
    
    
    

    
    
    
    
    
    

    
});