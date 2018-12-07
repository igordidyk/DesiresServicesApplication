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

//add form for log in
let blockForm = document.createElement('div');
blockForm.setAttribute('class', 'block-form');

let closeForm = document.createElement('span');
closeForm.setAttribute('class', 'close');
closeForm.appendChild(document.createTextNode('⊗'));

let formLogIn = document.createElement('form');
setAttributes(formLogIn, {'class': 'form-log-in', 'method': 'post'});

let hEl = document.createElement('h1');
hEl.setAttribute('class', 'header-for-login');
hEl.appendChild(document.createTextNode('Login'));

let formP1 = document.createElement('p');
formP1.setAttribute('class', 'style-form');
formP1.appendChild(document.createTextNode('Login:'));

let formInput1 = document.createElement('input');
setAttributes(formInput1, {
    'class': 'style-form',
    'type': 'email',
    'placeholder': 'email',
    'id': 'login'
});

let formP2 = document.createElement('p');
formP2.setAttribute('class', 'style-form');
formP2.appendChild(document.createTextNode('Password:'));

let formInput2 = document.createElement('input');
setAttributes(formInput2, {
    'class': 'style-form',
    'type': 'password',
    'placeholder': 'password',
    'id': 'password',
    'pattern': '.{6,}'
});

let formSubmit = document.createElement('button');
setAttributes(formSubmit, {
    'class': 'submit-form',
    'id': 'submit-form-for-login',
    'role': 'button'
});

let inputLogin = 'admin@gmail.com';
let inputPassword = '1234';

formSubmit.addEventListener('click', function () {
    let email = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if(email === inputLogin && password === inputPassword){
        formLogIn.setAttribute('action', 'admin.html');
    }else {
        alert('Login or password aren\'t valid');
    }
});

formSubmit.appendChild(document.createTextNode('Login'));

appendChildren(formLogIn, {hEl, formP1, formInput1, formP2, formInput2, formSubmit});
appendChildren(blockForm, {closeForm, formLogIn});

let centerClass = document.querySelectorAll('.center');
let logIn = document.querySelectorAll('.log-in-and-open-from');
for(let i = 0; i < logIn.length; i++){
    for(let j = 0; j < centerClass.length; j++){
        if(j === i){
            logIn[i].addEventListener('click', function (e) {
                centerClass[j].before(blockForm);
                e.preventDefault();
                blockForm.style.display = 'block';
            }, false);

            closeForm.addEventListener('click', function () {
                blockForm.style.display = 'none';
                let getElForClean = document.querySelectorAll('input.style-form');//clean after close form
                for (let k = 0; k < getElForClean.length; k++) {
                    getElForClean[k].value = '';
                }
            });
        }
    }
}

blockForm.addEventListener('click', e => {
    e.target.style.display = 'none';
    formLogIn.style.display = 'grid';
    closeForm.style.display = 'grid';
    hEl.style.display = 'grid';
    formP1.style.display = 'grid';
    formInput1.style.display = 'grid';
    formP2.style.display = 'grid';
    formInput2.style.display = 'grid';
    formSubmit.style.display = 'grid';
});

//add form for sign up
let blockFormSignUp = document.createElement('div');
blockFormSignUp.setAttribute('class', 'block-form');

let closeFormSignUp = document.createElement('span');
closeFormSignUp.setAttribute('class', 'close');
closeFormSignUp.appendChild(document.createTextNode('⊗'));

let formSignUp = document.createElement('form');
setAttributes(formSignUp, {'class': 'form-log-in', 'method': 'get', 'action': 'user.html'});

let hEl2 = document.createElement('h1');
hEl2.setAttribute('class', 'header-for-login');
hEl2.appendChild(document.createTextNode('Sing Up'));

let signUpFormP1 = document.createElement('p');
signUpFormP1.setAttribute('class', 'style-form');
signUpFormP1.appendChild(document.createTextNode('Full name:'));

let signUpFormInput1 = document.createElement('input');
setAttributes(signUpFormInput1, {
    'class': 'style-form',
    'type': 'text',
    'placeholder': 'Name',
    'name': 'user-name',
    'required': 'required'
});

let signUpFormP2 = document.createElement('p');
signUpFormP2.setAttribute('class', 'style-form');
signUpFormP2.appendChild(document.createTextNode('Email:'));

let signUpFormInput2 = document.createElement('input');
setAttributes(signUpFormInput2, {
    'class': 'style-form',
    'type': 'email',
    'placeholder': 'Email',
    'name': 'user-email',
    'required': 'required'
});

let signUpFormP3 = document.createElement('p');
signUpFormP3.setAttribute('class', 'style-form');
signUpFormP3.appendChild(document.createTextNode('Password:'));

let signUpFormInput3 = document.createElement('input');
setAttributes(signUpFormInput3, {
    'class': 'style-form',
    'type': 'password',
    'placeholder': 'Password',
    'name': 'user-surname',
    'required': 'required',
    'pattern': '.{6,}'
});

let signUpFormP4 = document.createElement('p');
signUpFormP4.setAttribute('class', 'style-form');
signUpFormP4.appendChild(document.createTextNode('Phone:'));

let signUpFormInput4 = document.createElement('input');
setAttributes(signUpFormInput4, {
    'class': 'style-form',
    'type': 'tel',
    'placeholder': '0932067890',
    'name': 'user-phone',
    'required': 'required'
});

let signUpFormFormSubmit = document.createElement('button');
setAttributes(signUpFormFormSubmit, {
    'class': 'submit-form',
    'id': 'submit-form-for-sign-up',
    'role': 'button'
});

signUpFormFormSubmit.appendChild(document.createTextNode('Sign up'));

appendChildren(formSignUp, {hEl2, signUpFormP1, signUpFormInput1, signUpFormP2, signUpFormInput2,
    signUpFormP3, signUpFormInput3, signUpFormP4, signUpFormInput4, signUpFormFormSubmit});
appendChildren(blockFormSignUp, {closeFormSignUp, formSignUp});

let signUp = document.querySelectorAll('.sign-up-and-open-form');
for(let i = 0; i < signUp.length; i++){
    for(let j = 0; j < centerClass.length; j++){
        if(j === i){
            signUp[i].addEventListener('click', function (e) {
                centerClass[j].before(blockFormSignUp);
                e.preventDefault();
                blockFormSignUp.style.display = 'block';
            }, false);

            closeFormSignUp.addEventListener('click', function () {
                blockFormSignUp.style.display = 'none';
                let getElForClean = document.querySelectorAll('input.style-form');
                for (let k = 0; k < getElForClean.length; k++) {
                    getElForClean[k].value = '';
                }
            });
        }
    }
}

blockFormSignUp.addEventListener('click', e => {
    e.target.style.display = 'none';
    formSignUp.style.display = 'grid';
    closeFormSignUp.style.display = 'grid';
    hEl2.style.display = 'grid';
    signUpFormP1.style.display = 'grid';
    signUpFormInput1.style.display = 'grid';
    signUpFormP2.style.display = 'grid';
    signUpFormInput2.style.display = 'grid';
    signUpFormP3.style.display = 'grid';
    signUpFormInput3.style.display = 'grid';
    signUpFormP4.style.display = 'grid';
    signUpFormInput4.style.display = 'grid';
    signUpFormFormSubmit.style.display = 'grid';
});

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
