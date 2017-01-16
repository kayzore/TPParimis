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

    $('a#btnSoinsDetente').click(function (evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({
            scrollTop: $('#detente').offset().top - 175
        }, 2000);
    });

    $('a#btnSoinsDecouverte').click(function (evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({
            scrollTop: $('#decouverte').offset().top - 175
        }, 2000);
    });

    $('a#btnSoinsRelaxant').click(function (evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({
            scrollTop: $('#relaxant').offset().top - 175
        }, 2000);
    });

    $('a#btnSoinsPlaisir').click(function (evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({
            scrollTop: $('#plaisir').offset().top - 175
        }, 2000);
    });

    $('a#btnSoinsEvasion').click(function (evt) {
        evt.preventDefault();
        removeActive();
        $(this.parentNode).addClass('active');
        $('html, body').animate({
            scrollTop: $('#evasion').offset().top - 175
        }, 2000);
    });

    removeActive = function removeActive() {
        $('aside .active').removeClass('active');
    };
});