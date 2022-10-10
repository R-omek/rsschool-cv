let menuToggle = document.getElementById("menu__toggle");
const BODY = document.getElementById('body')
const MENU_BTN = document.querySelector('.menu__btn')
const POPUP = document.querySelector('.popup')


const hideBurgMenu = () => {
    menuToggle.checked = false;
    POPUP.classList.toggle('popup-showed')
    BODY.classList.toggle('hiddenScroll')
  }

  MENU_BTN.addEventListener('click', () => {
    BODY.classList.toggle('hiddenScroll')
    POPUP.classList.toggle('popup-showed')
  })

  POPUP.addEventListener('click', () => {
    menuToggle.checked = false;
    POPUP.classList.toggle('popup-showed')
    BODY.classList.toggle('hiddenScroll')
  })