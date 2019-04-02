const buttons = document.querySelectorAll('figcaption');
const div = document.querySelectorAll('.test');

// sections collapse/expand script
buttons.forEach((button, i) => {

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

// nav bar scripts
const headerImage = document.querySelector('.mainHeader');
const mainContainer = document.querySelector('main');
const nav = document.querySelector('nav');
const icon = document.querySelector('nav div i');
const ul = document.querySelector('nav ul');
const li = document.querySelectorAll('nav ul li');

const navAnimation = () => {
    if (scrollY < mainContainer.offsetTop - nav.offsetHeight) {
        headerImage.style.transform = `translateY(${-scrollY/3}px)`;
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
}
let flag = true;
icon.addEventListener('click', () => {

    icon.classList.toggle('animate');
    ul.classList.toggle('display');
    nav.classList.toggle('display');
    if (flag) {
        const index = setTimeout(() => {
            li.forEach((item) => {
                item.style.opacity = 1;
                item.style.marginTop = '5vh';
                flag = !flag;
            })
            clearTimeout(index);
        }, 100);

    } else {
        li.forEach((item) => {
            item.style.opacity = 0;
            item.style.marginTop = '0px';
            flag = !flag;
        })
    }
})
window.addEventListener('scroll', navAnimation);