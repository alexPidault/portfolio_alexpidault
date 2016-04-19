$(document).ready(function() {
    
    $(window).load(function() {
      $("body").removeClass("preload");
    });
   
    // LOADER PAGE
    setTimeout(function(){
       $(".loader").fadeOut(300);
    }, 1000);
    
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
        var fixedPosition_violetBackground = $(".violetBackground").offset().top;
        
        if(positionWindow > fixedPosition_violetBackground - 100){
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
       $(".project-picture--1").addClass("is-visible")
    }, 3200);
    setTimeout(function(){
       $(".project-picture--1").css("opacity", "1");
    }, 3201);
    setTimeout(function(){
        $(".intro").addClass("intro--moveUp");
    }, 3400);
    
    
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
    .animate("#p1_parallax1_1", {delay: -900, duration: 2700, property: "top", start: 0, end: -800})
    .animate("#p1_parallax1_2", {delay: 0,duration: 2700,property: "top",start: -200,end: -1e3})
    .animate("#themeMosaic1", {delay: 0,duration: 2300,property: "top",start: 400,end: -500})
    .animate("#themeMosaic2", {delay: 0,duration: 2300, property: "top",start: 300,end: -500})
    .animate("#txtheadLine-appView", {delay: 200,duration: 900,property: "top",start: 200,end: -500})
    .animate("#appIcon-hour", {delay: 0,duration: 1500,property: "top",start: 150,end: -500})
    .animate("#appIcon-map", {delay: 200,duration: 900,property: "top",start: 420,end: -500})
    .animate("#appIcon-picture", {delay: 200,duration: 2800,property: "top",start: 100,end: -500});
});