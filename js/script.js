document.addEventListener('DOMContentLoaded', function () {
  // 1. GNB hover (PC용)
  const gnbItems = document.querySelectorAll('.gnb > li');
  const menuArea = document.querySelector('.menu-area');

  gnbItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      gnbItems.forEach((li) => li.classList.remove('active'));
      item.classList.add('active');
    });
  });

  if (menuArea) {
    menuArea.addEventListener('mouseleave', () => {
      gnbItems.forEach((li) => li.classList.remove('active'));
    });
  }

  // 2. Main Slider
  const mainSlides = document.querySelectorAll('.slide');
  const mainPrevBtn = document.querySelector('.slider .prev');
  const mainNextBtn = document.querySelector('.slider .next');
  let currentMainSlide = 0;
  let mainSlideInterval = null;

  function showMainSlide(n) {
    mainSlides.forEach((slide) => slide.classList.remove('active'));
    currentMainSlide = (n + mainSlides.length) % mainSlides.length;
    mainSlides[currentMainSlide].classList.add('active');
  }

  function startMainTimer() {
    if (mainSlideInterval) clearInterval(mainSlideInterval);
    mainSlideInterval = setInterval(() => {
      showMainSlide(currentMainSlide + 1);
    }, 4000);
  }

  function stopMainTimer() {
    if (mainSlideInterval) {
      clearInterval(mainSlideInterval);
      mainSlideInterval = null;
    }
  }

  if (mainSlides.length > 0) {
    startMainTimer();
    if (mainNextBtn) {
      mainNextBtn.addEventListener('click', () => {
        showMainSlide(currentMainSlide + 1);
        startMainTimer();
      });
    }
    if (mainPrevBtn) {
      mainPrevBtn.addEventListener('click', () => {
        showMainSlide(currentMainSlide - 1);
        startMainTimer();
      });
    }
    const sliderArea = document.querySelector('.slider');
    if (sliderArea) {
      sliderArea.addEventListener('mouseenter', stopMainTimer);
      sliderArea.addEventListener('mouseleave', startMainTimer);
    }
  }

  // 3. Scroll Animation (IntersectionObserver)
  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('#winter_travel, .brandstory');
  animatedElements.forEach((sec) => observer.observe(sec));

  // 4. Special Program Slider
  const wrap = document.querySelector('#content .wrap');
  const next = document.querySelector('.next-btn');
  const prev = document.querySelector('.prev-btn');

  let position = 0;
  const cardWidth = 320 + 25; 
  const maxScroll = cardWidth * 2;

  if (next && prev && wrap) {
    next.addEventListener('click', () => {
      if (position < maxScroll) {
        position += cardWidth;
        wrap.style.transform = `translateX(-${position}px)`;
      }
    });

    prev.addEventListener('click', () => {
      if (position > 0) {
        position -= cardWidth;
        wrap.style.transform = `translateX(-${position}px)`;
      }
    });
  }

  // 5. 모바일 메뉴 제어 (중복 제거 및 최적화)
  const mMenuSlide = document.querySelector('.m-menu-slide');
  const mOpenBtn = document.querySelector('.m-open-btn');
  const mCloseBtn = document.querySelector('.m-close-btn');
  const mGnbItems = document.querySelectorAll('.m-gnb-item');

  if (mOpenBtn && mMenuSlide) {
    mOpenBtn.addEventListener('click', () => {
      mMenuSlide.classList.add('active');
    });
  }

  if (mCloseBtn && mMenuSlide) {
    mCloseBtn.addEventListener('click', () => {
      mMenuSlide.classList.remove('active');
    });
  }

  // 모바일 아코디언 메뉴
  mGnbItems.forEach((item) => {
    const linkWrap = item.querySelector('.m-link-wrap');
    if (linkWrap) {
      linkWrap.addEventListener('click', () => {
        // 클릭한 것 외에 다른 열려있는 메뉴는 닫기 (아코디언 기능)
        mGnbItems.forEach((otherItem) => {
          if (otherItem !== item) otherItem.classList.remove('active');
        });
        // 현재 클릭한 메뉴 토글
        item.classList.toggle('active');
      });
    }
  });
});