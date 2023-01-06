// FLS (Full Logging System) =================================================================================================================
export function FLS(message) {
  setTimeout(() => {
    if (window.FLS) {
      console.log(message)
    }
  }, 0)
}

// Проверка браузера на поддержку .webp изображений =================================================================================================================
export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML 
  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

// Функция для фиксированной шапки при скролле =================================================================================================================
export function headerFixed() {
  const header = document.querySelector('.header')
  const firstScreen = document.querySelector('[data-observ]')

  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('sticky', !entry.isIntersecting)
  })

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen)
  }
}
//burger
const toggleBodyLock = (isLock) => {
 
  const body = document.body
  const pageWrapper = document.querySelector('.page')
  const lockPaddingElements = document.querySelectorAll('.lock-padding')
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth
  if (lockPaddingElements) {
    lockPaddingElements.forEach((element) => {
      element.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
    })
  }

  body.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px'
  body.classList.toggle('lock', isLock)
}
export function toggleBurgerMenu() {
  const burgerButton = document.querySelector('.icon-menu')
  const header = document.querySelector('.header')
  const menu = document.querySelector('.menu')
  let isLock = false

  burgerButton.addEventListener('click', () => {
    isLock = !isLock
    toggleBodyLock(isLock)

    burgerButton.classList.toggle('active')
    menu.classList.toggle('active')
    header.classList.toggle('active')
  })
}