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
window.location.hash = '#admin';

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

//add list of workers
let inputOnKey = document.querySelector('.add-new-workers');
let btnOnClick = document.querySelector('.btn-add');
let list = document.querySelector('.list-of-workers');

inputOnKey.addEventListener('keyup', function () {
    inputOnKey.value !== '' ? btnOnClick.disabled = false : btnOnClick.disabled = true;
});

let scheduleList = document.querySelector('.list-text-workers');
let variable = [];

btnOnClick.addEventListener('click', function () {
    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'text-workers list-workers-for-remove');
    divEl.appendChild(document.createTextNode(inputOnKey.value));

    let btnDeleteEl = document.createElement('button');
    btnDeleteEl.setAttribute('class', 'delete-btn');
    let imgDeleteEl = document.createElement('img');
    setAttributes(imgDeleteEl, {'src': '../static/img/delete.png', 'class': 'delete-img'});
    btnDeleteEl.appendChild(imgDeleteEl);

    let commonDiv = document.createElement('div');
    commonDiv.setAttribute('class', 'common-div');
    appendChildren(commonDiv, {divEl, btnDeleteEl});

    list.appendChild(commonDiv);
    btnDeleteEl.addEventListener('click', function () {
        commonDiv.remove();
        let elAll = document.querySelectorAll('.list-workers-for-remove');
        variable = [];
        for (let i = 0; i < elAll.length; i++) {
            variable.push(elAll[i].innerText);
        }
    });
    variable.push(inputOnKey.value);
    inputOnKey.value = '';
    btnOnClick.disabled = true;
});

//schedule
let btnOnClickNew = document.querySelector('.btn-add-new');
btnOnClickNew.addEventListener('click', function () {
    let surnameName = document.createElement('select');
    surnameName.setAttribute('class', 'select-workers');
    let btnDeleteElSchedule = document.createElement('button');
    btnDeleteElSchedule.setAttribute('class', 'delete-btn-schedule text-workers');

    btnDeleteElSchedule.addEventListener('click', function () {
        commonDivForSchedule.remove();
    });

    let imgDeleteElSchedule = document.createElement('img');
    setAttributes(imgDeleteElSchedule, {'src': '../static/img/delete.png', 'class': 'delete-img-schedule'});
    btnDeleteElSchedule.appendChild(imgDeleteElSchedule);

    for (let i = 0; i < variable.length; i++) {
        let optionSelect = document.createElement('option');
        optionSelect.setAttribute('class','text-workers bg-option');
        optionSelect.appendChild(document.createTextNode(variable[i]));
        optionSelect.setAttribute('value', variable[i]);
        surnameName.appendChild(optionSelect);
    }

    let commonDivForSchedule = document.createElement('div');
    commonDivForSchedule.setAttribute('class', 'grid-for-schedule');

    let arrayOfDays = [], imgCheckBox = [];
    for (let i = 0; i < 7; i++) {
        arrayOfDays[i] = 'day' + i;
        imgCheckBox[i] = 'imgCheck' + i;
    }

    for (let i = 0; i < arrayOfDays.length; i++) {
        arrayOfDays[i] = document.createElement('div');
        imgCheckBox[i] = document.createElement('img');
        arrayOfDays[i].setAttribute('class','text-workers');
        setAttributes(imgCheckBox[i], {'src': '../static/img/check.png', 'class': 'check-img'});
        listenerDayOfWeek(arrayOfDays[i], imgCheckBox[i]);
    }

    let counter = 0;
    function listenerDayOfWeek(day, imgCheck) {
        day.addEventListener('click', function () {
            counter++;
            if(counter === 1){
                day.append(imgCheck);
            }else {
                imgCheck.remove();
                counter = 0;
            }
        })
    }

    appendChildren(commonDivForSchedule, {btnDeleteElSchedule, surnameName});
    for (let i = 0; i < arrayOfDays.length; i++) {
        commonDivForSchedule.appendChild(arrayOfDays[i]);
    }
    scheduleList.before(commonDivForSchedule);
});

//date picker
new Lightpick({
    field: document.getElementById('datepicker'),
    singleDate: false
});

//padding for navigation bar
let padForMenu = document.querySelectorAll('.item-nav-admin-even');
for (let i = 0; i < padForMenu.length; i++) {
    for (let j = 0; j < 9; j++) {
        padForMenu[i].style.marginLeft = String(j + 2) + 'px';
        padForMenu[i].style.width = String(j * 2 + 60) + 'px';
    }
}

//create elements for menu
let menuAdministrator = document.querySelectorAll('.grid-menu-administrator');
for (let i = 0; i < menuAdministrator.length; i++) {
    let inputDishMenu = document.createElement('input');
    setAttributes(inputDishMenu, {'class': 'item-menu-for-administrator name-dish', 'id': 'name-dish'});

    let inputDishConsistMenu = document.createElement('input');
    setAttributes(inputDishConsistMenu, {'class': 'item-menu-for-administrator dish-consist', 'id': 'dish-consist'});

    let inputWeightMenu = document.createElement('input');
    setAttributes(inputWeightMenu, {'class': 'item-menu-for-administrator weight', 'id': 'weight'});

    let inputPriceMenu = document.createElement('input');
    setAttributes(inputPriceMenu, {'class': 'item-menu-for-administrator price', 'id': 'price'});

    let btnMenu = document.createElement('button');
    setAttributes(btnMenu, {'class': 'add-btn-admin', 'disabled': 'disabled'});

    let imgAddMenu = document.createElement('img');
    setAttributes(imgAddMenu, {'class': 'add-img-admin', 'src': '../static/img/add.png'});

    btnMenu.append(imgAddMenu);

    let gridMenuAdministrator = document.createElement('div');
    gridMenuAdministrator.setAttribute('class', 'grid-menu-administrator');

    appendChildren(gridMenuAdministrator, {inputDishMenu, inputDishConsistMenu, inputWeightMenu,
        inputPriceMenu, btnMenu});

    menuAdministrator[i].after(gridMenuAdministrator);
}

//checking if inputs in menu aren't empty
let listOfDish = document.querySelectorAll('.list-of-dish');
let addBtnAdmin = document.querySelectorAll('.add-btn-admin');
let inputValueNameDish = document.querySelectorAll('.name-dish');
let inputValueDishConsist = document.querySelectorAll('.dish-consist');
let inputValueWeight = document.querySelectorAll('.weight');
let inputValuePrice = document.querySelectorAll('.price');
for (let i = 0; i < addBtnAdmin.length; i++) {
    for (let j = 0; j < listOfDish.length; j++) {
        if (j === i) {
            inputValueNameDish[j].addEventListener('keyup', function () {
                inputValueNameDish[j].value !== '' ? addBtnAdmin[i].disabled = false : addBtnAdmin[i].disabled = true;
            });
            inputValueDishConsist[j].addEventListener('keyup', function () {
                inputValueDishConsist[j].value !== '' ? addBtnAdmin[i].disabled = false : addBtnAdmin[i].disabled = true;
            });
            inputValueWeight[j].addEventListener('keyup', function () {
                inputValueWeight[j].value !== '' ? addBtnAdmin[i].disabled = false : addBtnAdmin[i].disabled = true;
            });
            inputValuePrice[j].addEventListener('keyup', function () {
                inputValuePrice[j].value !== '' ? addBtnAdmin[i].disabled = false : addBtnAdmin[i].disabled = true;
            });
        }
    }
    addBtnAdmin[i].addEventListener('click', function () {
        for (let j = 0; j < listOfDish.length; j++) {
            if(j === i){
                let divEl1 = document.createElement('div');
                divEl1.appendChild(document.createTextNode(inputValueNameDish[j].value));
                let divEl2 = document.createElement('div');
                divEl2.appendChild(document.createTextNode(inputValueDishConsist[j].value));
                let divEl3 = document.createElement('div');
                divEl3.appendChild(document.createTextNode(inputValueWeight[j].value));
                let divEl4 = document.createElement('div');
                divEl4.appendChild(document.createTextNode(inputValuePrice[j].value));

                let btnDeleteEl = document.createElement('button');
                btnDeleteEl.setAttribute('class', 'delete-btn-menu');
                let imgDeleteEl = document.createElement('img');
                setAttributes(imgDeleteEl, {'src': '../static/img/delete.png', 'class': 'delete-img-menu'});
                btnDeleteEl.appendChild(imgDeleteEl);

                let commonDiv = document.createElement('div');
                commonDiv.setAttribute('class', 'grid-menu-administrator');
                appendChildren(commonDiv, {divEl1, divEl2, divEl3, divEl4, btnDeleteEl});
                listOfDish[j].after(commonDiv);

                btnDeleteEl.addEventListener('click', function () {
                    commonDiv.remove();
                });

                inputValueNameDish[j].value = '';
                inputValueDishConsist[j].value = '';
                inputValueWeight[j].value = '';
                inputValuePrice[j].value = '';
                addBtnAdmin[i].disabled = true;
            }
        }
    });
}

//reservation
Element.prototype.makeDraggableNone = function () {
    let o = this;
    o.onmousedown = null;
};

Element.prototype.makeDraggable = function () {
    let o = this;
    o.onmousedown = function (e) {
        let offsetX = e.pageX - parseInt(o.style.left);
        let offsetY = e.pageY - parseInt(o.style.top);
        document.onmousemove = function (e) {
            o.style.left = Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) + 'px';
            o.style.top = Math.max(Math.min(e.pageY - offsetY, o.parentNode.clientHeight - o.clientHeight), 0) + 'px';
        }
        document.onmouseup = function (e) {
            document.onmousemove = o.onmouseup = null;
        }
    }
    o.ondragstart = function () {
        return false;
    }
};

let btnDragAndDrop = document.querySelector('.drag-and-drop');
let btnDragAndDropNone = document.querySelector('.none-drag-and-drop');
let divId = [], imgSprite = [];
let idObj = [], sprite = [];
for (let i = 0; i < 15; i++) {
    divId[i] = 'object' + i;
    imgSprite[i] = 'sprite' + i;
    idObj[i] = 'object' + i;
}

for (let i = 0; i < 10; i++) {
    sprite[i] = '../static/img/sprite' + i + '.png';
}

sprite[10] = '../static/img/sprite7.png';
sprite[11] = '../static/img/sprite8.png';
sprite[12] = '../static/img/sprite8.png';
sprite[13] = '../static/img/sprite9.png';
sprite[14] = '../static/img/sprite9.png';

let parent = document.getElementById('parent');
let arrLeft = ['20px', '578px', '428px', '445px', '52px', '562px', '620px', '470px', '625px', '26px', '459px',
    '28px', '203px', '189px', '596px'];
let arrTop = ['20px', '28px', '28px', '431px', '220px', '550px', '433px', '233px', '110px', '614px', '572px',
    '425px', '427px', '614px', '291px'];

for (let i = 0; i < divId.length; i++) {
    divId[i] = document.createElement('div');
    divId[i].setAttribute('class', 'div-sprite');
    imgSprite[i] = document.createElement('img');
    imgSprite[i].setAttribute('class', 'img-sprite');
    divId[i].style.left = arrLeft[i];
    divId[i].style.top = arrTop[i];
    divId[i].setAttribute('id', idObj[i]);
    imgSprite[i].setAttribute('src', sprite[i]);
    divId[i].append(imgSprite[i]);

    btnDragAndDrop.addEventListener('click', function () {
        divId[i].makeDraggable();
    });
    btnDragAndDropNone.addEventListener('click', function () {
        divId[i].makeDraggableNone();
    });

    let counterLock = 0;
    divId[i].addEventListener('click', function (e) {
        if (counterLock === 0) {
            let imgLock = document.createElement('img');
            setAttributes(imgLock, {'src': '../static/img/lock.png', 'class': 'lock-img', 'width': '50px'});
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
    imgSprite[i].onload = function() {
        imgSprite[i].width /= 1.5;
    }
}
