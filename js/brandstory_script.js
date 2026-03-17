
// Swiper (brand-story 페이지)
if (document.querySelector('.mySwiper')) {
    const brandSwiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,

        // [핵심 추가] 화면에 보일 수 있는 최대 슬라이드 수만큼 복제본 생성
        // 현재 이미지 8개이므로 8개 전체를 루프용으로 사용하도록 설정
        loopedSlides: 8,

        // 초기화 보정
        observer: true,
        observeParents: true,

        speed: 1000,
        slideToClickedSlide: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        grabCursor: true,

        // 간격 설정 (CSS와 맞춤)
        spaceBetween: 20,
    });
}

//  모바일 메뉴 제어 (중복 제거 및 최적화)
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
