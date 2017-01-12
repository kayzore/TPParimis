$(document).ready(function () {
    if($(window).scrollTop() > 0) {
        $('nav').addClass('goToTop');
    }
    $(window).bind('scroll', function () {
        var navHeight = 300; // custom nav height
        ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop'): $('nav').removeClass('goToTop');
    });
});