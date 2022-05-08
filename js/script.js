const buttons = document.querySelectorAll(".solution__scroll-button");
const body = document.querySelector(".body")
const burger = document.querySelector(".header__burger")
const nav = document.querySelector(".header__nav")
const overlay = document.querySelector('.header__overlay');


burger.addEventListener('click', () => {
    nav.classList.toggle('header__nav--burger');
    overlay.classList.toggle('header__overlay--shown')
    body.classList.toggle('stop-scroll');
});

body.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('header__overlay')) {
        overlay.classList.remove('header__overlay--shown');
        nav.classList.remove('header__nav--burger');
        body.classList.remove('stop-scroll');
    }
})





body.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('solution__scroll-button')) {
        if (element.classList.contains('solution__scroll-button--activated')) {
            
        }
    
        else {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('solution__scroll-button--activated')
              }
            element.classList.toggle('solution__scroll-button--activated');
    
            }

    }

    else {
        

    }


})
