function Select() {
    const select = document.querySelector('.header__wrap-lang-item');
    const selected = document.querySelector('.selected')
    const menu = document.querySelector('.header__wrap-lang-childs');
    const option = document.querySelectorAll('.option')

    select.addEventListener('click', () => {
        select.classList.toggle('active');
        menu.classList.toggle('active');
    });

    option.forEach(o => {
        o.addEventListener('click', () => {
            selected.innerHTML = o.innerHTML;
            select.classList.remove('active');
            menu.classList.remove('active');
            option.forEach(o => {
                o.classList.remove('active')
            });
            option.classList.add('active');
        });
    });
};

Select();