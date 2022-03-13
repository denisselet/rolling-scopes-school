let isPlay = false;
const logo = document.querySelector('.logo_but');
const sol = document.querySelector('.sol');
const dr = document.querySelector('.dr');
const mal = document.querySelector('.mal');
const zav = document.querySelector('.zav');
const sla = document.querySelector('.sla');
const image = document.getElementById('image');
const audio = document.querySelector('audio');
const main_container = document.querySelector('.main_container');
const play = document.querySelector('.play');
const img_logo = document.querySelector('#img_logo');
// const logobut = document.querySelector(#img)
const solbut = document.getElementById('sol');
const drbut = document.getElementById('dr');
const malbut = document.getElementById('mal');
const zavbut = document.getElementById('zav');
const slabut = document.getElementById('sla');
let arr = [img_logo, solbut, drbut, malbut, zavbut, slabut];
function isTrue () {
    if (play.classList.contains('pause')) {
        playAudio();
        isPlay = true;
    } else {
        reversePause();
    }
}
function reversePause() {
    play.classList.toggle('pause');
    if(isPlay == false) {
        isPlay = true;
    } else {
        isPlay = false;
    }
    if (isPlay) {
        playAudio();
    } else {
        pauseAudio();
    }
}
play.addEventListener('click', reversePause);

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
img_logo.classList.add('select');
logo.addEventListener('click', () => {
    image.src = "assets/img/forest.jpg";
    img_logo.src = "assets/svg/logo1.svg";
    audio.src = "assets/audio/forest.mp3";
    isTrue();
    arr.forEach(function (item) {
        item.classList.remove('select');
    });
    img_logo.classList.add('select');
});
sol.addEventListener('click', () => {
    image.src = "assets/img/solovey.jpg";
    img_logo.src = "assets/svg/logo.svg";
    audio.src = "assets/audio/solovey.mp3";
    isTrue();
    arr.forEach(function (item) {
        item.classList.remove('select');
    });
    solbut.classList.add('select');
 });
 dr.addEventListener('click', () => {
    image.src = "assets/img/drozd.jpg";
    img_logo.src = "assets/svg/logo.svg";
    audio.src = "assets/audio/drozd.mp3";
    isTrue();
    arr.forEach(function (item) {
        item.classList.remove('select');
    });
    drbut.classList.add('select');
 });
 mal.addEventListener('click', () => {
    img_logo.src = "assets/svg/logo.svg";
    image.src = "assets/img/zarynka.jpg";
    audio.src = "assets/audio/zarynka.mp3";
    isTrue();
    arr.forEach(function (item) {
        item.classList.remove('select');
    });
    malbut.classList.add('select');
 });
 zav.addEventListener('click', () => {
    img_logo.src = "assets/svg/logo.svg";
    image.src = "assets/img/javoronok.jpg";
    audio.src = "assets/audio/javoronok.mp3";
    isTrue();
    arr.forEach(function (item) {
        item.classList.remove('select');
    });
    zavbut.classList.add('select');
});
sla.addEventListener('click', () => {
    img_logo.src = "assets/svg/logo.svg";
    image.src = "assets/img/slavka.jpg";
    audio.src = "assets/audio/slavka.mp3";
    isTrue();
    arr.forEach(function (item) {
        item.classList.remove('select');
    });
    slabut.classList.add('select');
});