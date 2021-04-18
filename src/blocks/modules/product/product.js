import $ from "jquery";
import 'slick-carousel/slick/slick';
'use strict';

window.addEventListener('DOMContentLoaded', function() {
    $('.product__gallery-main').slick({
        dots: false,
        fade: true,
        infinite: true,
        arrows: false,
        swipe: false,
        asNavFor: '.product__gallery-nav'
    });
    $('.product__gallery-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product__gallery-main',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true
    });
})
