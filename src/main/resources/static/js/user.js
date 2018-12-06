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
window.location.hash = '#user';

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

//reservation
let divId = [];
let idObj = [];
for (let i = 0; i < 15; i++) {
    divId[i] = 'object' + i;
    idObj[i] = 'object' + i;
}

let parent = document.getElementById('parent');
let arrLeft = ['20px', '578px', '428px', '445px', '52px', '562px', '620px', '470px', '625px', '26px', '459px',
    '28px', '203px', '189px', '596px'];
let arrTop = ['20px', '28px', '28px', '431px', '220px', '550px', '433px', '233px', '110px', '614px', '572px',
    '425px', '427px', '614px', '291px'];

for (let i = 0; i < divId.length; i++) {
    divId[i] = document.createElement('div');
    divId[i].setAttribute('class', 'div-sprite');
    divId[i].style.left = arrLeft[i];
    divId[i].style.top = arrTop[i];
    divId[i].setAttribute('id', idObj[i]);

    let counterLock = 0;
    divId[i].addEventListener('click', function (e) {
        if (counterLock === 0) {
            let imgLock = document.createElement('button');
            setAttributes(imgLock, {'class': 'lock-img'});
            if (i !== 0){
                divId[i].append(imgLock);
            }
            counterLock++;
        }else{
            let getSome = document.querySelectorAll('.lock-img');
            for (let j = 0; j < getSome.length; j++) {
                if(counterLock !== 0) {
                    if (e.target === getSome[j]) {
                        getSome[j].remove();
                        counterLock = 0;
                    }
                }
            }
        }
    });

    parent.append(divId[i]);
}

//padding for navigation bar
let padForMenu = document.querySelectorAll('.item-nav-admin-even');
for (let i = 0; i < padForMenu.length; i++) {
    for (let j = 0; j < 9; j++) {
        padForMenu[i].style.marginLeft = String(j + 2) + 'px';
        padForMenu[i].style.width = String(j * 2 + 60) + 'px';
    }
}