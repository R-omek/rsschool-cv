let menuToggle = document.getElementById("menu__toggle");


const hideBurgMenu = () => {
    menuToggle.checked = false;
    body.classList.toggle('hamburger-opened');
    pageMask.classList.toggle('darken');
  }