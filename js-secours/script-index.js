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
    
    setTimeout(function(){
       $(".preview-intro").addClass('animated fadeInUp');
    }, 3000);
    setTimeout(function() {
        $('.navbar').addClass('animated fadeInDown');
    }, 3400);
    setTimeout(function(){
       $(".preview-project-container .txt-inform").addClass('animated fadeInUp');
    }, 4000);
    setTimeout(function() {
        $('.project--1').addClass('animated fadeInUp');
    }, 4100);
    setTimeout(function() {
        $('.project--2').addClass('animated fadeInUp');
    }, 4400);
    setTimeout(function() {
        $('.project--3').addClass('animated fadeInUp');
         $('.blockPage').css("display", "none");
    }, 4800);
    
    setTimeout(function(){
       $(".prewiew-picture--1").addClass("pict-active");
    }, 4850);
    
    setTimeout(function(){
       $(".project--1").addClass("is-active");
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

