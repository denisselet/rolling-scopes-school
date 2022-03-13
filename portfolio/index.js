import i18Obj from './translate.js';

let lang = "en";
let theme = "dark";
//dark ru

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
function toggleMenu() {
  hamburger.classList.toggle('open');
  sidebar.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.nav-linkSidebar');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));
function closeMenu(event) {
    if (event.target.classList.contains('nav-linkSidebar')) {
        sidebar.classList.remove("open");
        hamburger.classList.remove("open");
    }
  }
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

//Portfolio Images

const portfolioBtnsp = document.querySelector('.spring');
const portfolioBtnw = document.querySelector('.winter');
const portfolioBtnsu = document.querySelector('.summer');
const portfolioBtna = document.querySelector('.autumn');
// const portfolioBtn = document.querySelector('.portfolio-btn');

const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtnsp.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
});
portfolioBtnw.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});
portfolioBtnsu.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
});
portfolioBtna.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
});

// const portfolioBtns = document.querySelector('.pory');

// function changeImage(event) {
//   if(event.target.classList.contains('portfolio-btn')) {
//     console.log("D");
//     // здесь код функции, меняющей src изображений
//   }
// }
// portfolioBtns.addEventListener('click', changeImage);

//cache img
const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    seasons.forEach(function(item, index) {
      img.src = `./assets/img/${item}/${i}.jpg`;
    });
  }
}
preloadImages();


//button active light
portfolioBtnsp.addEventListener('click', () => {
  portfolioBtnw.classList.remove("active");
  portfolioBtnsu.classList.remove("active");
  portfolioBtna.classList.remove("active");
  portfolioBtnsp.classList.toggle('active');
});
portfolioBtnw.addEventListener('click', () => {
  portfolioBtnsp.classList.remove("active");
  portfolioBtnsu.classList.remove("active");
  portfolioBtna.classList.remove("active");
  portfolioBtnw.classList.toggle('active');
});
portfolioBtnsu.addEventListener('click', () => {
  portfolioBtnw.classList.remove("active");
  portfolioBtnsp.classList.remove("active");
  portfolioBtna.classList.remove("active");
  portfolioBtnsu.classList.toggle('active');
});
portfolioBtna.addEventListener('click', () => {
  portfolioBtnw.classList.remove("active");
  portfolioBtnsu.classList.remove("active");
  portfolioBtnsp.classList.remove("active");
  portfolioBtna.classList.toggle('active');
});



//en ru
const en = document.querySelector('.nav_link-en');
const ru = document.querySelector('.nav_link-ru');
function getTranslateRU() {
  const tt = document.querySelectorAll("[data-i18]");
  tt.forEach(function (item) {
    item.textContent = i18Obj.ru[item.dataset.i18];
    lang = "ru";
    localStorage.setItem('lang', lang);
  })

}
function getTranslateEN() {
  const tt = document.querySelectorAll("[data-i18]");
  tt.forEach(function (item) {
    item.textContent = i18Obj.en[item.dataset.i18];
    lang = "en";
    localStorage.setItem('lang', lang);
  })

}


//saving lang
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    if (lang == "ru") {
      getTranslateRU();
    } else {
      getTranslateEN();
    }  
  }
}
window.addEventListener('load', getLocalStorage)


// console.log(i180bj);
en.addEventListener('click', getTranslateEN);
ru.addEventListener('click', getTranslateRU);


//light teme

function reverseLightDark () {
  if (theme == "light") {
    theme = "dark";
  } else {
    theme = "light";
  }
}


const sk_con = document.querySelector('.light_but');
const sk_content = document.querySelector('.skills_content');
const body = document.querySelector('body');
const name_price = document.querySelectorAll('.name_price');
const text_price = document.querySelectorAll('.price-span');
const button1 = document.querySelector('.winter');
const button2 = document.querySelector('.summer');
const button3 = document.querySelector('.spring');
const button4 = document.querySelector('.autumn');

function sk_con_add() {
  reverseLightDark();
  sk_con.classList.toggle('light');
  sk_content.classList.toggle('light');
  body.classList.toggle('light');
  name_price[0].classList.toggle('light');
  name_price[1].classList.toggle('light');
  name_price[2].classList.toggle('light');
  text_price.forEach(function (item) {
    item.classList.toggle('light');
  });
  button1.classList.toggle('light');
  button2.classList.toggle('light');
  button3.classList.toggle('light');
  button4.classList.toggle('light');
}
sk_con.addEventListener('click', sk_con_add);

//saving theme
function setLocalStorageTheme() {
  localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorageTheme);


function getLocalStorageTheme() {
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    if (theme == "light") {
      sk_con_add();
    } 
  }
}
window.addEventListener('load', getLocalStorageTheme)
