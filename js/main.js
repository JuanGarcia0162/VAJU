/*==================== SLIDER HOME====================*/
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
    muestraSlides(indice += n);
}

function posicionSlide(n) {
    muestraSlides(indice = n);
}
setInterval(function tiempo() {
    muestraSlides(indice += 1)
}, 5000);
function muestraSlides(n) {
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if (n > slides.length) {
        indice = 1;
    }
    if (n < 1) {
        indice = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < barras.length; i++) {
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice - 1].style.display = 'block';
    barras[indice - 1].className += ' active';

}

/*==================== SHOW MENU ====================*/
addEventListener('DOMContentLoaded', () => {
    const btn__menu = document.querySelector('.btn__menu')
    if (btn__menu) {
        btn__menu.addEventListener('click', () => {
            const menu__items = document.querySelector('.menu__items')
            menu__items.classList.toggle('show')
        })
    }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-Up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-Up class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
var fotoMostrada = "img/DisneyB.png";
var fotoMostrada2 = "img/HBOMAXB.png";
var fotoMostrada3 = "img/DeezerB.png";
var fotoMostrada4 = "img/PrimeB.png";

function funcionImg() {
    const elemento = document.getElementById("foto");
    const elemento2 = document.getElementById("foto2");
    const elemento3 = document.getElementById("foto3");
    const elemento4 = document.getElementById("foto4");

    if (fotoMostrada == "img/DisneyB.png") {
        elemento.src = "img/Disney.png";
        fotoMostrada = "img/Disney.png";
    }
    else {
        elemento.src = "img/DisneyB.png";
        fotoMostrada = "img/DisneyB.png";
    }
    if (fotoMostrada2 == "img/HBOMAXB.png") {
        elemento2.src = "img/HBOMAX.png";
        fotoMostrada2 = "img/HBOMAX.png";
    }
    else {
        elemento2.src = "img/HBOMAXB.png";
        fotoMostrada2 = "img/HBOMAXB.png";
    }
    if (fotoMostrada3 == "img/DeezerB.png") {
        elemento3.src = "img/Deezer.png";
        fotoMostrada3 = "img/Deezer.png";
    }
    else {
        elemento3.src = "img/DeezerB.png";
        fotoMostrada3 = "img/DeezerB.png";
    }
    if (fotoMostrada4 == "img/PrimeB.png") {
        elemento4.src = "img/Prime.png";
        fotoMostrada4 = "img/Prime.png";
    }
    else {
        elemento4.src = "img/PrimeB.png";
        fotoMostrada4 = "img/PrimeB.png";
    }
}

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

