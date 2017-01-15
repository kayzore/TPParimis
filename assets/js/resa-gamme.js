/*global $*/
$(document).ready(function () {
    "use strict";
    var gamme = "",
        i,
        interrogation = false;
    
    if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) !== "reservation.html") {
        $('#linkResa').click(function (evt) {
            var source = evt.target || evt.srcElement;
            evt.preventDefault();
            gamme = source.dataset.gamme;
            window.location.assign("../reservation.html?gamme=" + gamme);
        });
    } else {
        for (i = 0; i < location.search.length; i += 1) {
            if (location.search[i] === "=") {
                interrogation = true;
            } else if (interrogation === true) {
                gamme += location.search[i];
            }
        }
        
        if (gamme === "classique") {
            $('#selectGammeBedroom').val(1);
        } else if (gamme === "confort") {
            $('#selectGammeBedroom').val(3);
        } else if (gamme === "deluxe") {
            $('#selectGammeBedroom').val(5);
        } else if (gamme === "suite") {
            $('#selectGammeBedroom').val(7);
        }
    }
});