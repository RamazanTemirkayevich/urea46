function MobileMenu() {
    const btnmenu = document.querySelector('.header__wrap-menu');
    const nav = document.querySelector('.nav');

    btnmenu.onclick = function() {
        btnmenu.classList.toggle('active');
        nav.classList.toggle('active');
        $('body').toggleClass('lock');
    };
};

MobileMenu();