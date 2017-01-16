/*global $*/
$(document).ready(function () {
    "use strict";
    var removeActive;

    if ($(window).scrollTop() > 250) {
        $('aside>div').addClass('goAffixTop');
    }

    $(window).bind('scroll', function () {
        var affixHeight = 250; // custom nav height
        ($(window).scrollTop() > affixHeight) ? $('aside>div').addClass('goAffixTop'): $('aside>div').removeClass('goAffixTop');
    });

    $('a#btnCarteBrasserie').click(function (evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({
            scrollTop: $('#brasserie').offset().top - 100
        }, 2000);
    });

    $('a#btnCarteDegustation').click(function (evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({
            scrollTop: $('#degustation').offset().top - 100
        }, 2000);
    });

    $('a#btnCarteRestaurant').click(function (evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({
            scrollTop: $('#restaurant').offset().top - 100
        }, 2000);
    });

    removeActive = function removeActive() {
        $('aside .active').removeClass('active');
    };
});