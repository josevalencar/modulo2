// ===== SHOW MENU ===== //
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // valida que a variável existe
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // adiciona a classe show menu pra tag div com a classe nav__menu
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Remove o show-menu quando clicar em um nav__link
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ===== SCROLL LINK ===== //
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

// ===== jQuery ===== //
$("i, a").hover

    (function () {

        $(this).css("color", "#e28743");
    },

        function () {
            $(this).css("color", "black");
        });

$("img").click(function () {
    $(this).toggle("explode");
});
