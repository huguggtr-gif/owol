const tooltip = document.getElementById('tt')
const mapWrap = document.querySelector('.map-wrap')
const svg = document.querySelector('#space-map svg')

// 글자 path → pointer-events: none
svg.querySelectorAll('path[fill="black"]').forEach((label) => {
  label.style.pointerEvents = 'none'
})

// zone-hit 들을 SVG 맨 뒤로 이동 (가장 위에 렌더링되게)
document.querySelectorAll('.zone-hit').forEach((zone) => {
  svg.appendChild(zone)
})

let currentZone = document.querySelector('.zone-active')

document.querySelectorAll('.zone-hit').forEach((zone) => {
  zone.addEventListener('mouseenter', function () {
    tooltip.textContent = this.dataset.label
    tooltip.classList.add('show')
    if (currentZone && this !== currentZone) {
      currentZone.classList.remove('zone-active')
    }
    this.classList.add('zone-active')
  })

  zone.addEventListener('mousemove', function (e) {
    const rect = mapWrap.getBoundingClientRect()
    tooltip.style.left = e.clientX - rect.left + 'px'
    tooltip.style.top = e.clientY - rect.top + 'px'
  })

  zone.addEventListener('mouseleave', function () {
    tooltip.classList.remove('show')
    this.classList.remove('zone-active')
    if (currentZone) {
      currentZone.classList.add('zone-active')
    }
  })

  zone.addEventListener('click', function () {
    if (currentZone) currentZone.classList.remove('zone-active')
    currentZone = this
    currentZone.classList.add('zone-active')
    window.location.href = this.dataset.href
  })
})

// ===== 모바일 메뉴 =====
const mOpenBtn = document.querySelector('.m-open-btn')
const mCloseBtn = document.querySelector('.m-close-btn')
const mMenuSlide = document.querySelector('.m-menu-slide')

mOpenBtn.addEventListener('click', () => mMenuSlide.classList.add('active'))
mCloseBtn.addEventListener('click', () => mMenuSlide.classList.remove('active'))

document.querySelectorAll('.m-gnb-item .m-link-wrap').forEach((wrap) => {
  wrap.addEventListener('click', () => {
    wrap.closest('.m-gnb-item').classList.toggle('active')
  })
})
