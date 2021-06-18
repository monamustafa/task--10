// import Darkmode from 'darkmode-js';

let menuIcon = document.querySelector('#menu-icon');
let menu = document.querySelector('#menu');
let closeMenu = document.querySelector('.close');
let showPart = document.querySelectorAll('.showPart')

let showMore = document.querySelector('.show-more');
let userEmail = document.querySelector('.userName');
let userName = document.querySelector('.userEmail');
let stickyNav = document.querySelector('.stickyNav');
let darkModee = document.querySelector('.darkModee');
let bodyStyle = document.querySelector('body');
let listItem = document.querySelectorAll('.menu li');

let listItemII = document.querySelectorAll('.stickyNav ul li');
let sectionItems = document.querySelectorAll('.mainSection');

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', () => {
        sectionItems[i].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
for (let i = 0; i < listItemII.length; i++) {
    listItemII[i].addEventListener('click', () => {
        sectionItems[i].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        listItemII[i].classList.add('myActive');
    });
}
// darkModee.addEventListener('click',function(){
//     bodyStyle.style.mixBlendMode='difference'
// })
// new Darkmode().showWidget();

// sticky navbar
let bodyScroll = document.querySelector('html,body');
window.addEventListener('scroll', function () {
    console.log(bodyScroll.scrollTop);
    if (bodyScroll.scrollTop > 90) {
        stickyNav.style.display = 'block '
    } else {
        stickyNav.style.display = 'none'
    }

})
//                          navbar section 
let doupleclick = false;
closeMenu.addEventListener('click', function () {
    menu.style.display = 'none';
})
menuIcon.addEventListener('click', function () {
    if (!doupleclick) {
        menu.style.display = 'block';
        doupleclick = true;
    } else {
        menu.style.display = 'none';
        doupleclick = false;

    }
})
let x = true;
showMore.addEventListener('click', function () {
    if (x) {
        showMore.innerHTML = "Show Less";
        x = false;
        for (let i = 0; i < showPart.length; i++) {
            showPart[i].style.display = 'block'
        }
    } else {
        x = true;
        showMore.innerHTML = "Show More"
        for (let i = 0; i < showPart.length; i++) {
            showPart[i].style.display = 'none'
        }
    }
})
// showMore.addEventListener('click', function () {
//     if (showMore.innerHTML == "Show More") {
//         showMore.innerHTML = "Show Less";
//         for (let i = 0; i < showPart.length; i++) {
//             showPart[i].style.display = 'block'
//         }
//     } else {
//         showMore.innerHTML = "Show More"
//         for (let i = 0; i < showPart.length; i++) {
//             showPart[i].style.display = 'none'
//         }
//     }
// })

// $(menuIcon).click(function () {
//     $(menu).toggle("lol");
// });
//                           Form 
userName.addEventListener('blur', function () {
    if (userName.value.length < 2) {
        userName.classList.add('btn-outline-danger');
    } else {
        userName.classList.add('btn-outline-success');
    }

});

userEmail.addEventListener('keyup', function () {
    userEmail.value = userEmail.value.toUpperCase();
});