
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

