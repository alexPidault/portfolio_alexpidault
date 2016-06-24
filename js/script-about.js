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
       $(".stain--yellow").addClass("is-visible");
    }, 1200);
    setTimeout(function(){
       $(".stain--green").addClass("is-visible");
    }, 1500);
    setTimeout(function(){
       $(".stain--red").addClass("is-visible");
    }, 2200);
    setTimeout(function(){
       $(".stain--blue").addClass("is-visible");
    }, 2600);
    setTimeout(function(){
       $(".stain--violet").addClass("is-visible");
    }, 3100);
    
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
       $(".contact-container").addClass("animated fadeIn");
    }, 3600);
    setTimeout(function(){
       $(".picture-alex").addClass("animated fadeInRight");
    }, 3700);
    
    setTimeout(function(){
       $(".about-headline").addClass("animated fadeInUp");
    }, 3800);
    setTimeout(function(){
       $("p.txt-corp-important").addClass("animated fadeInUp");
    }, 4100);
    setTimeout(function(){
       $(".txt-corp").addClass("animated fadeInUp");
    }, 4200);
    

    
    
    
    
    // CALCULE DES NOUVELLE DIMENSION DU CONTENU
    function redimensionnement(e) {
        
        var height_Window = $(window).height();        
        
        var height_LoaderSquare = $('.loaderSquare-container').height();
        var marginTop_LoaderSquare = (height_Window - height_LoaderSquare) / 2;
        
        var height_AboutContainer = $('.about-container').height();
        var marginTop_AboutContainer = (height_Window - height_AboutContainer - 100) / 2;

        if("matchMedia" in window) {
            if(window.matchMedia("(max-width:768px)").matches) {    
                $('.about-container').css("margin-top", marginTop_AboutContainer);
          }else if(window.matchMedia("(min-width:1200px)").matches){
                $('.about-container').css("margin-top", marginTop_AboutContainer);
          }else{
                $('.about-container').css("margin-top", marginTop_AboutContainer);
          }
        }
    }

    // On lie l'événement resize à la fonction
    window.addEventListener('resize', redimensionnement, false);
    // Exécution de cette même fonction au démarrage pour avoir un retour initial
    redimensionnement();
    
    
    
    
    
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

