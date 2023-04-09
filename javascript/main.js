const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}


let typed = new Typed("#input-0", {
    strings: ["To the Moon"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
