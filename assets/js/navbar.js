$(document).ready(function () {
    if ($(window).scrollTop() > 250) {
        $('nav').addClass('goToTop');
        $('#btnGoTop').fadeIn('slow');
    }
    $(window).bind('scroll', function () {
        var navHeight = 250; // custom nav height
        //        ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop'): $('nav').removeClass('goToTop');

        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('goToTop');
            $('#btnGoTop').fadeIn('slow');
        } else {
            $('nav').removeClass('goToTop')
            $('#btnGoTop').fadeOut('slow');
        }

    });

    $('#btnGoTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });
});