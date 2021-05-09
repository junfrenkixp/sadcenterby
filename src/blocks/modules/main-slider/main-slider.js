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
        autoplaySpeed: 5000,
    });
});
