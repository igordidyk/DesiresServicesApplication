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
