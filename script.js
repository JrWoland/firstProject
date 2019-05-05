// collapse/expand sections script
const sectionExpandScript = (function () {
    const buttons = document.querySelectorAll('.expand');
    const div = document.querySelectorAll('.test');

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
})();




// nav bar script
const navBarScript = (function () {

    const headerImage = document.querySelector('.mainHeader');
    const mainContainer = document.querySelector('main');
    const nav = document.querySelector('nav');
    const icon = document.querySelector('nav div button');
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

    let isNavHidden = true;
    const navOpenClose = () => {

        icon.classList.toggle('animate');
        ul.classList.toggle('display');
        nav.classList.toggle('display');
        if (isNavHidden) {
            const index = setTimeout(() => {
                li.forEach((item) => {
                    item.style.opacity = 1;
                    item.style.margin = '5vh auto 0';
                    isNavHidden = !isNavHidden;
                })
                clearTimeout(index);
            }, 100);
        } else {
            li.forEach((item) => {
                item.style.removeProperty('opacity');
                item.style.removeProperty('margin');
                isNavHidden = !isNavHidden;
            })
        }
    }
    icon.addEventListener('click', navOpenClose)
    window.addEventListener('scroll', navAnimation);
})();