// add shadow to navbar
window.onscroll = () => {
    const navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 30) {
    navbar.classList.add("navbar-shadow");
  } else {
    navbar.classList.remove("navbar-shadow");
  }
};
