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

  // 2. Main Slider
  const slides = document.querySelectorAll('.slide')
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  let currentSlide = 0

  function showSlide(n) {
    // 모든 슬라이드에서 active 제거
    slides.forEach((slide) => slide.classList.remove('active'))

    // 인덱스 순환 처리
    currentSlide = (n + slides.length) % slides.length

    // 현재 슬라이드에 active 추가
    slides[currentSlide].classList.add('active')
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1)
    })

    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1)
    })

    // 선택사항: 5초마다 자동 슬라이드
    setInterval(() => {
      showSlide(currentSlide + 1)
    }, 5000)
  }

  // 3. Scroll Animation (IntersectionObserver)
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

  // 4. Special Program Slider
  const wrap = document.querySelector('#content .wrap')
  const next = document.querySelector('.next-btn')
  const prev = document.querySelector('.prev-btn')

  let position = 0 // 현재 이동 거리
  const cardWidth = 320 + 25 // 카드 너비(320) + 간격(25)
  const maxScroll = cardWidth * 2 // 총 5개 중 3개 노출 = 2개 분량만큼만 이동 가능

  if (next && prev && wrap) {
    next.addEventListener('click', () => {
      if (position < maxScroll) {
        position += cardWidth
        wrap.style.transform = `translateX(-${position}px)`
      }
    })

    prev.addEventListener('click', () => {
      if (position > 0) {
        position -= cardWidth
        wrap.style.transform = `translateX(-${position}px)`
      }
    })
  }

  // 5. Swiper (brand-story 페이지)
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
