// hamburger
const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector("#nav-menu")

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active")
  navMenu.classList.toggle("hidden")
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header")
  const fixedNav = header.offsetTop
  const toTop = document.querySelector("#to-top")

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fixed")
    toTop.classList.remove("hidden")
    toTop.classList.add("flex")
  } else {
    header.classList.remove("nav-fixed")
    toTop.classList.remove("flex")
    toTop.classList.add("hidden")
  }
};

// click di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active")
    navMenu.classList.add("hidden")
  }
});

// dark theme
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html')

darkToggle.addEventListener('click', function() {
  if(darkToggle.checked) {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

// condition toggle if dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}