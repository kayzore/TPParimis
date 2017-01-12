$(document).ready(function () {
    "use strict";
    var removeActive;

    if($(window).scrollTop() > 0) {
        $('aside>div').addClass('goAffixTop');
    }

    $(window).bind('scroll', function () {
        var affixHeight = 300; // custom nav height
        ($(window).scrollTop() > affixHeight) ? $('aside>div').addClass('goAffixTop'): $('aside>div').removeClass('goAffixTop');
    });

    $('a#btnCarteBrasserie').click(function(evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({scrollTop: $('#brasserie').offset().top - 125}, 2000);
    });

    $('a#btnCarteDegustation').click(function(evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({scrollTop: $('#degustation').offset().top - 125}, 2000);
    });

    $('a#btnCarteRestaurant').click(function(evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({scrollTop: $('#restaurant').offset().top - 125}, 2000);
    });

    removeActive =function removeActive() {
        $('aside .active').removeClass('active');
    }
});