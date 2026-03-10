document.addEventListener('DOMContentLoaded', function () {
  // 1. GNB hover
  const gnbItems = document.querySelectorAll('.gnb > li')
  const menuArea = document.querySelector('.menu-area')

  gnbItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      gnbItems.forEach((li) => li.classList.remove('active'))
      item.classList.add('active')
    })
  })

  if (menuArea) {
    menuArea.addEventListener('mouseleave', () => {
      gnbItems.forEach((li) => li.classList.remove('active'))
    })
  }

  // 2. Scroll Animation (IntersectionObserver)
  const observerOptions = {
    root: null,
    threshold: 0.1, // 요소가 10%만 보여도 바로 나타나게 설정
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(
    '#winter_travel, .brandstory',
  )
  animatedElements.forEach((sec) => {
    observer.observe(sec)
  })

  // 3. Swiper (brand-story 페이지)
  if (document.querySelector('.mySwiper')) {
    const brandSwiper = new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 10,
      loop: true,

      loopAddBlankSlides: true,
      rewind: false,

      speed: 1000,
      slideToClickedSlide: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      grabCursor: true,
    })
  }
})
