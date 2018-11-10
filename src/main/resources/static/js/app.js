function showPage(pageId) {
    let item = document.getElementsByClassName('anonymous');
    let id = String(pageId);
    let newItem = document.querySelector(id);
    for (let i = 0; i < item.length; i++) {
        item[i].style.display = 'none';
    }
    newItem.style.display = 'block';
}

window.addEventListener('hashchange', function (event) {
    showPage(window.location.hash);
});
window.location.hash = '';
window.location.hash = '#main';

//setting all Attributes
function setAttributes(el, attrs) {
    for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

//appending elements
function appendChildren(parent, children) {
    for(let key in children) {
        parent.appendChild(children[key]);
    }
}

// slides--------------------------------------------
let controls = document.querySelectorAll('.controls');
for(let i = 0; i < controls.length; i++) {
    controls[i].style.display = 'inline-block';
}

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

let playing = true;
let pauseButton = document.getElementById('pause');

function pauseSlideShow() {
    pauseButton.innerHTML = '&#9658;';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideShow() {
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
    if (playing) {
        pauseSlideShow();
    }else {
        playSlideShow();
    }
};

let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.onclick = function () {
    pauseSlideShow();
    nextSlide();
};

previous.onclick = function () {
    pauseSlideShow();
    previousSlide();
};
