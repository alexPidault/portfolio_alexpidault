$(document).ready(function() {
    
    $(window).load(function() {
      $("body").removeClass("preload");
    });
   
    // LOADER PAGE
    setTimeout(function(){
       $(".loader").fadeOut(300);
    }, 2000);
        
    
    $(window).scroll(function() {
        var positionWindow = $(window).scrollTop();
        var fixedPosition_StickyAnchor = $("#sticky-anchor").offset().top;
        
        if(positionWindow > fixedPosition_StickyAnchor - 100){
            $("#sticky").addClass("stick");
            $("#sticky-offset").css("display", "block");
        }
        else{
            $("#sticky").removeClass("stick"); 
            $("#sticky-offset").css("display", "none");
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
        }
        else{
            $(".navbar").removeClass("is-visible");
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
       $(".logo").addClass("animated fadeInDown");
    }, 2200);
    setTimeout(function(){
       $(".about").addClass("animated fadeInDown");
    }, 2600);
    setTimeout(function(){
       $(".contact").addClass("animated fadeInDown");
    }, 2900);
    setTimeout(function(){
       $(".project-picture--2").addClass("is-visible")
    }, 3200);
    setTimeout(function(){
       $(".project-picture--2").css("opacity", "1");
    }, 3201);
    setTimeout(function(){
        $(".intro").addClass("intro--moveUp");
    }, 3400);
    
    
    setTimeout(function(){
        var height_Footer = $(window).height() + 300;
        var marginTop_TxtHeadline = $(window).height() / 4;
        var height_Slider = $(".sliderProgram").height();
        var marginTop_Slider = ($(window).height() - height_Slider) / 2;
        $(".footer").css("height", height_Footer);
        $(".footer .txt-headTitle-container").css("margin-bottom", marginTop_TxtHeadline);
        $(".sliderProgram").css("padding-top", marginTop_Slider);
        
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
    .animate("#p1_parallax1_1", {delay: -900, duration: 2700, property: "top", start: 0, end: -800})
    .animate("#p1_parallax1_2", {delay: 0,duration: 2700,property: "top",start: -200,end: -1e3})
    .animate("#preScreen-home", {delay: 0,duration: 2000,property: "top",start: 200,end: -500})
    .animate("#preScreen-login", {delay: 0,duration: 1300, property: "top",start: 300,end: -500})
    .animate("#text-headlineApp", {delay: 0,duration: 2000,property: "top",start: 0,end: -800})
    .animate("#content_tvguide", {delay: 0,duration: 1500,property: "top",start: 100,end: -800})
    .animate("#appScreen-actor", {delay: 0,duration: 1500,property: "top",start: 500,end: -800})
    .animate("#appScreen-menu", {delay: 0,duration: 1500,property: "top",start: 500,end: -800});
    
});