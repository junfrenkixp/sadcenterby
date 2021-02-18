import $ from "jquery";
import 'slick-carousel/slick/slick';
'use strict';

window.addEventListener('DOMContentLoaded', function() {
    $('.main-slider').slick({
        dots: false,
        fade: true,
        infinite: true,
        arrows: false,
        swipe: false
    });
})
