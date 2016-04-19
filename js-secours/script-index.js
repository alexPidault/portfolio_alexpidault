$(document).ready(function() {
    
    $(window).load(function() {
      $("body").removeClass("preload");
    });
   
    // LOADER PAGE
    setTimeout(function(){
       $(".loader").fadeOut(300);
    }, 2000);
        
    
    setTimeout(function(){
       $(".preview-intro").addClass('animated fadeInUp');
    }, 2200);
    setTimeout(function(){
       $(".preview-project-container .txt-inform").addClass('animated fadeInUp');
    }, 3000);
    setTimeout(function() {
        $('.project--1').addClass('animated fadeInUp');
    }, 3200);
    setTimeout(function() {
        $('.project--2').addClass('animated fadeInUp');
    }, 3500);
    setTimeout(function() {
        $('.project--3').addClass('animated fadeInUp');
    }, 3900);
    
    setTimeout(function(){
       $(".prewiew-picture--1").addClass("pict-active");
    }, 4200);
    
    setTimeout(function(){
       $(".project--1").addClass("is-active");
    }, 4500);
    
    setTimeout(function() {
        $('.logo').addClass('animated fadeInDown');
    }, 4600);
      setTimeout(function() {
        $('.about').addClass('animated fadeInDown');
    }, 4800);
     setTimeout(function() {
        $('.contact').addClass('animated fadeInDown');
    }, 5000);
    
    

    
    // CALCULE DES NOUVELLE DIMENSION DU CONTENU
    function redimensionnement(e) {
        
        var heightWrappPreview = $('.wrapper--preview').height();
        var heightContentPreview = $('.preview-content-container').height();
        var marginTopContent = (heightWrappPreview - heightContentPreview + 20
                               
                               ) / 2;
        var ContentPreview = $('.preview-content-container');

        if("matchMedia" in window) {
          if(window.matchMedia("(max-width:768px)").matches) {    
            ContentPreview.css("margin-top", marginTopContent);
          }else if(window.matchMedia("(min-width:1200px)").matches){
              ContentPreview.css("margin-top", marginTopContent - 30);
          }else{
              ContentPreview.css("margin-top", marginTopContent);
          }
        }
    }

    // On lie l'événement resize à la fonction
    window.addEventListener('resize', redimensionnement, false);
    
    // Exécution de cette même fonction au démarrage pour avoir un retour initial
    redimensionnement();

    
    
    // CHANGEMENT DU BACKGROUND / IMAGE PREVIEW ON HOVER 
    $(".preview-project").hover(function() {
        
        var firstProject = $(this).hasClass("project--1");
        var secondProject = $(this).hasClass("project--2");
        var thirdProject = $(this).hasClass("project--3");
        
        if(firstProject == true){
            $("#preview").removeClass();   
            $("#preview").addClass("preview--1");
            $(".preview-project").removeClass('is-active');
            $(this).addClass('is-active');
            $(".prewiew-picture--2").removeClass('pict-active');
            $(".prewiew-picture--3").removeClass('pict-active');
            $(".prewiew-picture--1").addClass('pict-active');
        }
        else if(secondProject == true){
            $("#preview").removeClass();
            $("#preview").addClass("preview--2");
            $(".preview-project").removeClass('is-active');
            $(this).addClass('is-active');
            $(".prewiew-picture--1").removeClass('pict-active');
            $(".prewiew-picture--3").removeClass('pict-active');
            $(".prewiew-picture--2").addClass('pict-active');
        }
        else{
            $("#preview").removeClass();
            $("#preview").addClass("preview--3");
            $(".preview-project").removeClass('is-active');
            $(this).addClass('is-active');
            $(".prewiew-picture--1").removeClass('pict-active');
            $(".prewiew-picture--2").removeClass('pict-active');
            $(".prewiew-picture--3").addClass('pict-active');
        }
    });
      
    
});

