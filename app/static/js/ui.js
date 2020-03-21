;(function() {
  window.addEventListener('DOMContentLoaded', () => {
    window.svg4everybody();

    $('.js-dropdown-box').each(function() {
      $(this).dropdown({
        prefix: $(this).data('prefix'),
      })
    })
  })

  document.documentElement.addEventListener(
    'touchstart',
    function(event) {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    },
    false,
  )

    const nav = document.querySelector('.header__nav');
    nav.addEventListener('click', event => {
      let target = event.target;
      if (target.closest('.header__nav-mob__toggle')) {
        nav.classList.toggle('active');
      }
    })



    let allBtns = document.querySelectorAll('.js-accord-btn');

    allBtns.forEach( btn => {
      btn.addEventListener('click', event => {
        let items = document.querySelectorAll('.accordeon__item');
        for (let item of items) {
          if (item.classList.contains('active')) {
              item.classList.remove('active');
          }
        }
      let item = event.target.closest('.accordeon__item');
      item.classList.add('active');
      })
    })

})()
