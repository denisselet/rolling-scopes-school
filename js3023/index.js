const main = document.querySelector('.main');
getData('spring');
async function getData(qq) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=06510c7e094c9bfc75f3bd515d4a3354&query=${String(qq)}&page=1&per_page=0&tag_mode=all`);
    const data = await res.json();
    for (let item of data.results) {
        createDiv(item['original_title'], item['vote_average'], item.overview, item.poster_path);
    }
}

function createDiv (name, number, over, src) {
    const test = document.createElement('div');
    test.classList.add('test');
    test.innerHTML = `<div class="photo"><img src="https://image.tmdb.org/t/p/w1280${src}" alt="" height="420px" width="300px" class="image"></div><div class="nameAndNumber"><div class="name">${name}</div><div class="number"><p>${number}</p></div><div class="over"><p>${over}</p></div>`;
    main.append(test);
}

const input = document.getElementsByClassName("input")[0];
const node = document.getElementsByClassName("input")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        main.innerHTML = '';
    input.addEventListener('input', getData(this.value));
    }
});

