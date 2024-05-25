'use strict'
const barsBtn = document.querySelector('.menu__navbar-btn'),
      navbar = document.querySelector('nav'),
      buttonBlock = document.querySelector('.btn__group'),
      container = document.querySelector('.container'),
      prevBtn = document.querySelector('#prev-btn'),
      nextBtn = document.querySelector('#next-btn'),
      sliderBlock = document.querySelector('.block1'),
      slider = document.querySelector('.advantage__block'),
      sliderOrder = document.querySelectorAll('.advantage__slider-w span')



//<mobile menu>

barsBtn.addEventListener('click', () => {
  navbar.classList.toggle('modal-media-nav')
  buttonBlock.classList.toggle('modal-media-btn')
})

//</mobile menu>



//<slider>
let sliderIndex = 0

const changeActiveOrder = (id) => {
  sliderOrder.forEach(item => item.classList.remove('active-order'))
  sliderOrder[id].classList.add('active-order')
}

function changeSlide() {
  let blockWidth = window.getComputedStyle(sliderBlock, null)
  const widthValue = blockWidth.getPropertyValue('width')
  slider.style.cssText = `translate: -${(parseInt(widthValue)+20)*sliderIndex}px 0;`
}

function prevEvent() {
  sliderIndex--
  if(sliderIndex<0) {
    sliderIndex=2
  }
  changeSlide()
  changeActiveOrder(sliderIndex)
}
function nextEvent() {
  sliderIndex++
  if(sliderIndex===3) {
    sliderIndex=0
  }
  changeSlide()
  changeActiveOrder(sliderIndex)
}

prevBtn.addEventListener('click',prevEvent)

nextBtn.addEventListener('click', nextEvent)


//</slider>