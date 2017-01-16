/*global $*/
$(document).ready(function () {
    "use strict";
    var removeActive;

    if ($(window).scrollTop() > 250) {
        $('aside>div').addClass('goAffixTop');
    }

    // Gestion du fixe pour la zone de menu aside
    $(window).bind('scroll', function () {
        var affixHeight = 250; // custom height position
        if ($(window).scrollTop() > affixHeight) {
            $('aside>div').addClass('goAffixTop');
        } else {
            $('aside>div').removeClass('goAffixTop');
        }
    });

    // Gestion des scrolls vers les cartes du restaurant
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