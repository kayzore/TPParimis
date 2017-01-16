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
            $('nav').addClass('goToTop');
            $('#btnGoTop').fadeIn('slow');
        } else {
            $('nav').removeClass('goToTop');
            $('#btnGoTop').fadeOut('slow');
        }

    });

    // Animation pour le retour en haut de page

    $('#btnGoTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});