const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click',()=>{
    nav.classList.toggle('menu-open');
});

/*чтоб открывалось меню при клике на меню*/