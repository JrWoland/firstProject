const buttonClick = document.querySelectorAll('figcaption');
const div = document.querySelectorAll('.test');

buttonClick.forEach((button, i) => {

    div[i].style.height = '0px';

    button.addEventListener('click', () => {

        if (div[i].getAttribute('style').includes(' 0px')) {
            let myHeight = document.querySelector('.ptest').offsetHeight;
            div[i].style.height = myHeight + "px";
            button.innerText = 'schowaj';

        } else {
            div[i].style.height = '0px';
            button.innerText = "więcej";
        }
    })
})

const headerImage = document.querySelector('.mainHeader');
const mainContainer = document.querySelector('main');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (scrollY < mainContainer.offsetTop - nav.offsetHeight) {
        headerImage.style.transform = `translateY(${-scrollY/3}px)`;
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
})