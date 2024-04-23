'use strict'
//mobile menu

const barsBtn = document.querySelector('.menu__navbar-btn'),
      navbar = document.querySelector('nav'),
      buttonBlock = document.querySelector('.btn__group')

const openCloseMenu = () => {
  navbar.classList.toggle('modal-media-nav')
  buttonBlock.classList.toggle('modal-media-btn')
}

barsBtn.addEventListener('click', openCloseMenu)