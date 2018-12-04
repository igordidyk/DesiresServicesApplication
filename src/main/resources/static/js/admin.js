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

    let inputDishConsistMenu = document.createElement('textarea');
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

let vanishedInput = document.querySelectorAll('.input-title');
let vanishedBtn = document.querySelectorAll('.btn-title-dish');
let headerH = document.querySelectorAll('.menu-header-administrator');

let pizza = document.querySelectorAll('.pizza');
let dishHotCold = document.querySelectorAll('.dish-hot-cold');
let soupHot = document.querySelectorAll('.soup-hot');
let pancakesDesserts = document.querySelectorAll('.pancakes-desserts');
let alcoAndNon = document.querySelectorAll('.alco-and-non');
let counter1 = 0;

/*Reading title input data*/
for (let i = 0; i < vanishedBtn.length; i++) {
    for (let j = 0; j < listOfDish.length; j++) {
        if (j === i) {
            vanishedInput[j].addEventListener('keyup', function () {
                vanishedInput[j].value !== '' ? vanishedBtn[i].disabled = false : vanishedBtn[i].disabled = true;
            });
        }
    }

    /*Creating redacting button, image on that button and wrapper div for both */
    let btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'btn-edit');
    let imgEdit = document.createElement('img');
    imgEdit.setAttribute('class', 'img-edit');
    imgEdit.setAttribute('src', '../static/img/edit.png');
    let commonDivEdit = document.createElement('div');
    commonDivEdit.setAttribute('class', 'common-div-edit');
    let pEl = document.createElement('p');
    pEl.setAttribute('class', 'p-el');
    btnEdit.append(imgEdit);
    let formNone = document.querySelectorAll('.menu-header-administrator-form');

    /*Add Event Listener for add button on dish title in menu*/
    vanishedBtn[i].addEventListener('click', function () {
        let counterStop = 0;
        for (let j = 0; j < listOfDish.length; j++) {
            if (j === i) {
                vanishedBtn[i].style.display = 'none';
                vanishedInput[j].style.display = 'none';
                formNone[i].style.display = 'none';
                pEl.append(vanishedInput[j].value);
                commonDivEdit.append(pEl);
                commonDivEdit.append(btnEdit);
                headerH[i].append(commonDivEdit);
            }
        }

        /*Add Event Listener for remove button on dish title in menu*/
        btnEdit.addEventListener('click', function () {
            counterStop++;
            if (counterStop === 1) {
                for (let j = 0; j < listOfDish.length; j++) {
                    if (j === i) {
                        vanishedBtn[i].style.display = 'block';
                        vanishedInput[j].style.display = 'block';
                        formNone[i].style.display = 'grid';
                        pEl.innerText = '';
                        vanishedInput[j].value = '';
                        commonDivEdit.value = '';
                        commonDivEdit.remove();
                        counter1 = i;

                        /*Checking and removing first or second element in dish navigation bar*/
                        function circleTwoСondition(array) {
                            for (let k = 0; k < array.length; k++) {
                                if (array[k].childNodes[1]) {
                                    array[k].childNodes[1].remove();
                                } else {
                                    array[k].childNodes[0].remove();
                                }
                            }
                        }

                        /*Removing first element in dish navigation bar*/
                        function circleEasy(array) {
                            for (let k = 0; k < array.length; k++) {
                                array[k].childNodes[0].remove();
                            }
                        }

                        /*Checking item in dish navigation bar when removing data from bar*/
                        if (counter1 === 0) {
                            circleEasy(pizza);
                        }
                        if (counter1 === 1) {
                            circleTwoСondition(pizza);
                        }
                        if (counter1 === 2) {
                            circleEasy(dishHotCold);
                        }
                        if (counter1 === 3) {
                            circleTwoСondition(dishHotCold);
                        }
                        if (counter1 === 4) {
                            circleEasy(soupHot);
                        }
                        if (counter1 === 5) {
                            circleTwoСondition(soupHot);
                        }
                        if (counter1 === 6) {
                            circleEasy(pancakesDesserts);
                        }
                        if (counter1 === 7) {
                            circleTwoСondition(pancakesDesserts);
                        }
                        if (counter1 === 8) {
                            circleEasy(alcoAndNon);
                        }
                        if (counter1 === 9) {
                            circleTwoСondition(alcoAndNon);
                        }
                    }
                }
            }
        });

        /*Checking item in dish navigation bar*/
        counter1 = i;
        if(counter1 === 0){
            circleNone(counter1, pizza);
        }
        if(counter1 === 1){
            circleS(counter1, pizza);
        }
        if(counter1 === 2){
            circleNone(counter1, dishHotCold);
        }
        if(counter1 === 3){
            circleS(counter1, dishHotCold);
        }
        if(counter1 === 4){
            circleNone(counter1, soupHot);
        }
        if(counter1 === 5){
            circleS(counter1, soupHot);
        }
        if(counter1 === 6){
            circleNone(counter1, pancakesDesserts);
        }
        if(counter1 === 7){
            circleS(counter1, pancakesDesserts);
        }
        if(counter1 === 8){
            circleNone(counter1, alcoAndNon);
        }
        if(counter1 === 9){
            circleS(counter1, alcoAndNon);
        }

        /*Duplicates data from dish title into dish navigation bar  (two functions)*/
        function circleNone(counter, array) {
            for (let k = 0; k < array.length; k++) {
                array[k].append(document.createTextNode(vanishedInput[counter].value));
            }
        }
        function circleS(counter, array) {
            for (let k = 0; k < array.length; k++) {
                array[k].append(document.createTextNode(' / ' + vanishedInput[counter].value));
            }
        }
    });
}

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

    btnDragAndDrop.addEventListener('click', function () {
        divId[i].makeDraggable();
    });
    btnDragAndDropNone.addEventListener('click', function () {
        divId[i].makeDraggableNone();
    });

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

//order admin
let orderAdmin = document.querySelectorAll('.order');
let orderBtnLeft = document.querySelectorAll('.style-triangle-left');
let orderBtnRight = document.querySelectorAll('.style-triangle-right');

for (let i = 1; i < orderAdmin.length; i++) {
    orderAdmin[i].style.display = 'none';
}

for (let i = 0; i < orderBtnLeft.length; i++) {

    /*Order page slider for left button*/
    orderBtnLeft[i].addEventListener('click', function (e) {
        if(0 === i){
            orderAdmin[i].style.display = 'none';
            orderAdmin[orderAdmin.length - 1].style.display = 'grid';
        } else{
            orderAdmin[i].style.display = 'none';
            orderAdmin[i - 1].style.display = 'grid';
        }
    });

    /*Order page slider for left button*/
    orderBtnRight[i].addEventListener('click', function (e) {
        if(orderAdmin.length - 1 === i){
            orderAdmin[i].style.display = 'none';
            orderAdmin[0].style.display = 'grid';
        } else{
            orderAdmin[i].style.display = 'none';
            orderAdmin[i + 1].style.display = 'grid';
        }
    });
}
