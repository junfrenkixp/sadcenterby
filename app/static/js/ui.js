;(function() {
  window.addEventListener('DOMContentLoaded', () => {
    window.svg4everybody()

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

})()
