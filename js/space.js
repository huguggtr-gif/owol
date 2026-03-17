const tooltip = document.getElementById('tt');
const mapWrap = document.querySelector('.map-wrap');

// 현재 활성 구역 찾기
const currentZone = document.querySelector('.zone-active');

document.querySelectorAll('.zone-hit').forEach(zone => {

  zone.addEventListener('mouseenter', function () {
    tooltip.textContent = this.dataset.label;
    tooltip.classList.add('show');
    // 다른 구역 호버 시 active 끄기
    if (currentZone && this !== currentZone) {
      currentZone.classList.remove('zone-active');
    }
  });

  zone.addEventListener('mousemove', function (e) {
    const rect = mapWrap.getBoundingClientRect();
    tooltip.style.left = (e.clientX - rect.left) + 'px';
    tooltip.style.top = (e.clientY - rect.top) + 'px';
  });

  zone.addEventListener('mouseleave', function () {
    tooltip.classList.remove('show');
    // 마우스 나가면 active 복원
    if (currentZone) {
      currentZone.classList.add('zone-active');
    }
  });

  zone.addEventListener('click', function () {
    window.location.href = this.dataset.href;
  });

});
// 글자 path들을 SVG 맨 뒤로 이동 → 항상 히트 영역 위에 렌더링
const svg = document.querySelector('#space-map svg');
svg.querySelectorAll('path[fill="black"]').forEach(label => svg.appendChild(label));