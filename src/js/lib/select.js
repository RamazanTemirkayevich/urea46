function Select() {
    const select = document.querySelector('.header__wrap-lang-item');
    const selectContent = document.querySelector('.header__wrap-lang-childs');

    select.addEventListener('click', () => {
        selectContent.classList.toggle('active');
    });
};

Select();