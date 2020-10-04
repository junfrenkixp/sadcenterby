;

(function () {
  window.addEventListener('DOMContentLoaded', function () {
    window.svg4everybody();
    $('.js-dropdown-box').each(function () {
      $(this).dropdown({
        prefix: $(this).data('prefix')
      });
    });
    $('.main-slider').slick({
      prevArrow: '<button class="main-slider__left-wrap"><div class="main-slider__left"><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="18" height="32" viewBox="0 0 18 32" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.9997C0 15.4264 0.216016 14.853 0.647069 14.4158L14.225 0.656454C15.0887 -0.218818 16.4891 -0.218818 17.3525 0.656454C18.2158 1.53137 18.2158 2.95019 17.3525 3.82553L5.33813 15.9997L17.3516 28.1744C18.215 29.0493 18.215 30.4684 17.3516 31.3432C16.4883 32.2189 15.0883 32.2189 14.2246 31.3432L0.64658 17.5841C0.215596 17.1467 0 16.5732 0 15.9997Z"/></svg></div></button>',
      nextArrow: '<button class="main-slider__right-wrap"><div class="main-slider__right"><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="18" height="32" viewBox="0 0 18 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.3524 17.5842L3.77482 31.3432C2.91113 32.2189 1.51079 32.2189 0.647511 31.3432C-0.215837 30.4683 -0.215837 29.0493 0.647511 28.1744L12.6616 15.9998L0.64786 3.82553C-0.215488 2.95026 -0.215488 1.53137 0.64786 0.656452C1.51121 -0.218817 2.91147 -0.218817 3.77517 0.656452L17.3527 14.4157C17.7844 14.8534 18 15.4264 18 15.9997C18 16.5733 17.784 17.1467 17.3524 17.5842Z"/></svg></div></button>'
    });
  });
  document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, false);
  var nav = document.querySelector('.header__nav');
  nav.addEventListener('click', function (event) {
    var target = event.target;

    if (target.closest('.header__nav-mob__toggle')) {
      nav.classList.toggle('active');
    }
  });

  (function (ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
      if (!this) return null;
      if (this.matches(selector)) return this;

      if (!this.parentElement) {
        return null;
      } else return this.parentElement.closest(selector);
    };
  })(Element.prototype);

  var allBtns = document.querySelectorAll('.js-accord-btn');

  for (var btn = 0; btn < allBtns.length; btn++) {
    allBtns[btn].addEventListener('click', function (event) {
      var items = document.querySelectorAll('.accordeon__item');

      for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
          items[i].classList.remove('active');
        }
      }

      var item = event.target.closest('.accordeon__item');
      item.classList.add('active');
    });
  }
})();