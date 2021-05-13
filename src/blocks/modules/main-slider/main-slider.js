import $ from "jquery";
import "slick-carousel/slick/slick";
"use strict";

window.addEventListener("DOMContentLoaded", function() {
    $(".main-slider").slick({
        dots: true,
        fade: true,
        infinite: true,
        arrows: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    swipe: true,
                    autoplaySpeed: 2200,
                }
            }
        ]
    });
});
