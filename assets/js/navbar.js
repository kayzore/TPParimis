/*global $*/
$(document).ready(function () {
    "use strict";
    if ($(window).scrollTop() > 250) {
        $('nav').addClass('goToTop');
        $('#btnGoTop').fadeIn('slow');
    }

    $(window).bind('scroll', function () {
        var navHeight = 250; // Hauteur de déclenchement du position fixed
        if ($(window).scrollTop() > navHeight) {
            $('#other').css({top: 60});
            $('nav').addClass('goToTop');
            $('#btnGoTop').fadeIn('slow');
        } else {
            $('#other').css({top: 50, backgroundColor: "darkgram"});
            $('nav').removeClass('goToTop');
            $('#btnGoTop').fadeOut('slow');
        }
    });
    
    
    $('#other').mouseenter(function () {
        $(this).animate({opacity: 0.8, right: '0'}, 500);
        $('#other #arrowRight').addClass('fa-rotate-180');
    });
    
    $('#other').mouseleave(function () {
        $(this).animate({opacity: 0.5, right: '-310px'}, 500);
        $('#other #arrowRight').removeClass('fa-rotate-180');
    });

    // Animation pour le retour en haut de page

    $('#btnGoTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


    $('#printPage').click(function () {
        window.print();
    });
});