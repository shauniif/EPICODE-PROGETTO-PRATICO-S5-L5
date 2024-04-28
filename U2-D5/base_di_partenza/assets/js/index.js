let changeNavbar = function() {
    var navBar = document.querySelector('.nav-bar');
    var navbtn = document.querySelector('.button-nav');
    var ValuescrollY = window.scrollY;
    if(ValuescrollY < 445) {
        navBar.classList.remove('navbar-scrolled');
        navbtn.classList.remove('nav-bar-button-scrolled');
    } else {
        navBar.classList.add('navbar-scrolled');
        navbtn.classList.add('nav-bar-button-scrolled');
    }
}
window.addEventListener('scroll',changeNavbar);




