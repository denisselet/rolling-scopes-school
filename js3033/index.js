let score = 0;
let arr = [];
let records = (localStorage.getItem('rec')) ? localStorage.getItem('rec').split(",") : [];
let obj = {1:22, 2:23, 3:24, 4:25, 5:0, 6:34, 7:0, 8:0, 9:0, 10:0};
const mas = [2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
const arr2 = [p11, p12, p13, p14, p21, p22, p23, p24, p31, p32, p33, p34, p41, p42, p43, p44];
const newGameBut = document.getElementById('pressNewGame');
const newGame2But = document.getElementById('pressNewGame2');
const recordsBut = document.getElementById('pressRecords');
const settingBut = document.getElementById('pressSetting');
const menuBut = document.getElementById('menuId');

const menuSelector = document.querySelector('.menu');
const gameOverSelector = document.querySelector('.gameOver');
const recordsSelector = document.querySelector('.recordsList');
const settingSelector = document.querySelector('.settingList');
menuSelector.classList.add('on');
function newGame1 () {
    arr = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]; 
    arr[getRandomInt(0, 4)][getRandomInt(0, 4)] = 2;
    arr[getRandomInt(0, 4)][getRandomInt(0, 4)] = mas[getRandomInt(0, 5)];
    menuSelector.classList.remove('on');
    gameOverSelector.classList.remove('on');
    recordsSelector.classList.remove('on');
    score = 0;
    score_id.textContent = 'Score: 0';
    outScreen();
}

function menu_on() {
    menuSelector.classList.add('on');
    gameOverSelector.classList.remove('on');
    recordsSelector.classList.remove('on');
    settingSelector.classList.remove('on');
}

function gameOver() {
    if (score !== 0) {
        gameOverSelector.classList.add('on');
        score_idGameOver.textContent = "Score: " + score;
        records.unshift(score);
        localStorage.setItem('rec', records);
        score = 0;
    }    
}

let arrr = [];
let arrTest = "";
let arrIdRecords = [rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, rec9, rec10];
function records_fun (){
    recordsSelector.classList.add('on');
    if (localStorage.getItem('rec')) {
        arrr = localStorage.getItem('rec').split(",");
    }
    for (let i = 0; i < 10; i++) {
        arrIdRecords[i].textContent = arrr[i];
    }
}
function setting_fun () {
    settingSelector.classList.add('on');
    console.log("hh");
}
//Listeners
newGameBut.addEventListener('click', newGame1);
newGame2But.addEventListener('click', newGame1);
menuBut.addEventListener('click', menu_on);
recordsBut.addEventListener('click', records_fun);
settingBut.addEventListener('click', setting_fun);
  
//sound
let sound = true;
  var checkbox = document.querySelector("input[name=check]");
  checkbox.addEventListener('change', function() {
    if (this.checked) {
        sound = true;
    } else {
      sound = false;
    }
  });

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

function audioPlay () {
    if (sound === true) {
        audio1.play();
    }
}

function checkGameOver() {
    for (let j = 0; j < 4; j++) {
        for(let i = 0; i < 3; i++) {
            if (arr[j][i] === arr[j][i+1]) {
                return 0;
            } 
        }
    }
    for (let j = 0; j < 3; j++) {
        for(let i = 0; i < 4; i++) {
            if (arr[j][i] === arr[j+1][i] || arr[j][i] == 0 || arr[j+1][i] == 0) {
                return 0;
            }
        }
    }
    gameOver();
}

function add2or4Step () {
    if (!(timeE[0][0] === arr[0][0] && timeE[0][1] === arr[0][1] && timeE[0][2] === arr[0][2] && timeE[0][3] === arr[0][3] && timeE[1][0] === arr[1][0] && timeE[1][1] === arr[1][1] && timeE[1][2] === arr[1][2] && timeE[1][3] === arr[1][3] && timeE[2][0] === arr[2][0] && timeE[2][1] === arr[2][1] && timeE[2][2] === arr[2][2] && timeE[2][3] === arr[2][3] && timeE[3][0] === arr[3][0] && timeE[3][1] === arr[3][1] && timeE[3][2] === arr[3][2] && timeE[3][3] === arr[3][3])) {
        while (true) {
            let x = getRandomInt(0, 4);
            let y = getRandomInt(0, 4);
            if (arr[x][y] === 0) {
                arr[x][y] = mas[getRandomInt(0, 5)];
                break;
            }
        }
    }
}

function outScreen () {
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            (arr[j][i] !== 0) ? arr2[(j*4)+i].textContent = arr[j][i] : arr2[(j*4)+i].textContent = "";
        }
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft') {
        left();
    }
    if (event.code == 'ArrowRight') {
        right();
    }
    if (event.code == 'ArrowUp') {
        up();
    }
    if (event.code == 'ArrowDown') {
        down();
    } 
    score_id.textContent = "Score: " + score;
    outScreen ();
  });

var timeE;
function left () {
    timeE = arr.map(function (item) {
        return [...item]
    })
    for (let j = 0; j < 4; j++) {
        function pledge() {
            for (let t = 0; t < 3; t++) {
                for (let i = 3; i !== 0; i--) {
                    if (arr[j][i-1] == 0 && arr[j][i] !== 0) {
                        arr[j][i-1] = arr[j][i];
                        arr[j][i] = 0;            
                    }
                }
            }
        }
        pledge();
            for (let i = 0; i < 4; i++) {
                if (arr[j][i] === arr[j][i+1]) {
                    arr[j][i] = arr[j][i] * 2;
                    arr[j][i+1] = 0;
                    score = score + arr[j][i];
                    audioPlay();
                }
            }
        pledge();
    }
    checkGameOver();
    add2or4Step();
}

function right () {
    timeE = arr.map(function (item) {
        return [...item]
    })
    for (let j = 0; j < 4; j++) {
        function pledge() {
            for (let t = 0; t < 3; t++) {
                for (let i = 0; i < 3; i++) {
                    if (arr[j][i] !== 0 && arr[j][i+1] == 0) {
                        arr[j][i+1] = arr[j][i];
                        arr[j][i] = 0;   
                        audioPlay();       
                    }
                }
            }
        }
    pledge();
        for (let i = 3; i >= 0; i--) {
            if (arr[j][i] === arr[j][i-1]) {
                arr[j][i] = arr[j][i] * 2;
                arr[j][i-1] = 0;
                score = score + arr[j][i];
            }
        }
    pledge();
    }
    checkGameOver();
    add2or4Step();
}

function down () {
    timeE = arr.map(function (item) {
        return [...item]
    })
    for (let j = 0; j < 4; j++) {
        function pledge() {
            for (let t = 0; t < 3; t++) {
                for (let i = 0; i < 3; i++) {
                    if (arr[i][j] !== 0 && arr[i+1][j] == 0) {
                        arr[i+1][j] = arr[i][j];
                        arr[i][j] = 0;   
                        audioPlay();       
                    }
                }
            }
        }
    pledge();
        for (let i = 3; i > 0; i--) {
            if (arr[i][j] === arr[i-1][j]) {
                arr[i][j] = arr[i][j] * 2;
                arr[i-1][j] = 0;
                score = score + arr[i][j];
            }
        }
    pledge();
    }
    checkGameOver();
    add2or4Step();
}

function up () {
    timeE = arr.map(function (item) {
        return [...item]
    })
    for (let j = 0; j < 4; j++) {
        function pledge() {
            for (let t = 0; t < 3; t++) {
                for (let i = 3; i !== 0; i--) {
                    if (arr[i-1][j] == 0 && arr[i][j] !== 0) {
                        arr[i-1][j] = arr[i][j];
                        arr[i][j] = 0;            
                    }
                    }
            }
        }
        pledge();
            for (let i = 0; i < 3; i++) {
                if (arr[i][j] === arr[i+1][j]) {
                    arr[i][j] = arr[i][j] * 2;
                    arr[i+1][j] = 0;
                    score = score + arr[i][j];
                    audioPlay();
                }
            }
        pledge();
    }
    checkGameOver();
    add2or4Step();
}

