console.log("include requests js");

let addEmployee = document.querySelector("#addEmployee");

let inputOnKey = document.querySelector('#fullName');
let inputNumber = document.querySelector('#number');
let list = document.querySelector('.list-of-workers');

inputOnKey.addEventListener('keyup', function () {
    inputOnKey.value !== '' ? addEmployee.disabled = false : addEmployee.disabled = true;
});

inputNumber.addEventListener('keyup', function () {
    inputNumber.value !== '' ? addEmployee.disabled = false : addEmployee.disabled = true;
});

let countNumber = 0;
addEmployee.addEventListener('click', function () {
    countNumber = 0;
    let employee = {
        fullName: inputOnKey.value,
        phoneNumber: inputNumber.value
    };
    console.log(employee);
    $.ajax({
        url: '/admin/addEmployee',
        type: 'post',
        data: JSON.stringify(employee),
        contentType: 'application/json',
        success: function (data) {
            inputOnKey.value = '';
            inputNumber.value = '';
            addEmployee.disabled = true;
            console.log("Employee " + employee + " was added");

            $("#employeeList").load(' #employeeList');
        },
        error: function () {
            console.log("Failed to save");
        }
    });
});

let btnDeleteEl = document.querySelectorAll('#deleteEmployee');
let commonDivDelete = document.querySelectorAll('.common-div');
for (let i = 0; i < btnDeleteEl.length; i++) {
    for (let j = 0; j < commonDivDelete.length; j++) {
        btnDeleteEl[i].addEventListener('click', function (e) {
            // console.log('/admin/removeEmployee/'+btnDeleteEl[i].getAttribute('value'));
            if(e.target){
                if(i===j){
                    $.ajax({
                        url: '/admin/removeEmployee/'+btnDeleteEl[i].getAttribute('value'),
                        type: 'delete',
                        contentType: 'application/json',
                        success: function () {

                            $("#employeeList").load(' #employeeList');
                        },
                        error: function () {
                            console.log("Failed to delete");
                        }
                    });
                }
            }
        });
    }
}

let scheduleList = document.querySelector('.list-text-workers');
let variableCheckLimit = 0;
let btnOnClickNew = document.querySelector('.btn-add-new');
btnOnClickNew.addEventListener('click', function () {
    variableCheckLimit++;
    let surnameName = document.createElement('select');
    surnameName.setAttribute('class', 'select-workers');
    let btnDeleteElSchedule = document.createElement('button');
    btnDeleteElSchedule.setAttribute('class', 'delete-btn-schedule text-workers');

    btnDeleteElSchedule.addEventListener('click', function () {
        commonDivForSchedule.remove();
        variableCheckLimit--;
    });

    let imgDeleteElSchedule = document.createElement('img');
    setAttributes(imgDeleteElSchedule, {'class': 'delete-img-schedule'});
    btnDeleteElSchedule.appendChild(imgDeleteElSchedule);

    $.ajax({
        url:'/admin/getEmployeesList',
        type:'get',
        success:function (data) {
            for (let i = 0; i < data.length; i++) {
                let optionSelect = document.createElement('option');
                optionSelect.setAttribute('class', 'text-workers bg-option');
                optionSelect.appendChild(document.createTextNode(data[i].fullName));
                optionSelect.setAttribute('value', data[i].fullName);
                surnameName.appendChild(optionSelect);
            }
        },
        error:function () {
            console.log("Failed to show");
        }
    });

    let commonDivForSchedule = document.createElement('div');
    commonDivForSchedule.setAttribute('class', 'grid-for-schedule');

    let arrayOfDays = [], imgCheckBox = [];
    for (let i = 0; i < 7; i++) {
        arrayOfDays[i] = 'day' + i;
        imgCheckBox[i] = 'imgCheck' + i;
    }

    for (let i = 0; i < arrayOfDays.length; i++) {
        arrayOfDays[i] = document.createElement('div');
        arrayOfDays[i].setAttribute('class', 'text-workers text-workers-check');
        listenerDayOfWeek(arrayOfDays[i]);
    }

    $.ajax({
        url:'/admin/getEmployeesList',
        type:'get',
        success:function (data) {
            for (let i = 0; i < arrayOfDays.length; i++) {
                for (let j = 0; j < data.length; j++){
                    arrayOfDays[i].setAttribute('id', data[j].id + String(i) + new Date().getDate() +
                        (Number(new Date().getMonth())+1) +  new Date().getFullYear());
                    console.log (data[j].id + String(i));
                }
            }
        },
        error:function () {
            console.log("Failed to show");
        }
    });

    // for (let i = 0; i < arrayOfDays.length; i++) {
    //     arrayOfDays[i] = document.createElement('div');
    //     arrayOfDays[i].setAttribute('class', 'text-workers text-workers-check');
    //     listenerDayOfWeek(arrayOfDays[i]);
    // }

    let counter = 0;

    function listenerDayOfWeek(day) {
        day.addEventListener('click', function () {
            counter++;
            if (counter === 1) {
                day.style.background = 'url(\'../img/check.png\') center center no-repeat rgb(202, 165, 112)';
                day.style.backgroundSize = '30px';
            } else {
                day.style.background = 'none';
                day.style.background = 'rgb(202, 165, 112)';
                counter = 0;
            }
        });
    }

    appendChildren(commonDivForSchedule, {btnDeleteElSchedule, surnameName});
    for (let i = 0; i < arrayOfDays.length; i++) {
        commonDivForSchedule.appendChild(arrayOfDays[i]);
    }
    let message = document.createElement('div');
    message.setAttribute('class', 'schedule-message');
    let massageNone = document.querySelector('.schedule-message');
    $.ajax({
        url:'/admin/getEmployeesList',
        type:'get',
        success:function (data) {
            if (variableCheckLimit <= data.length){
                if (massageNone){
                    massageNone.style.display = 'none';
                }
                scheduleList.before(commonDivForSchedule);
            }else{
                message.appendChild(document.createTextNode('Кількість праціників у розкладі не має перевищувати ' +
                    'за кількість працівників у списку. Додайте нового працівника, щоб повторити операцію'));
                scheduleList.before(message);
                variableCheckLimit--;
            }
        },
        error:function () {
            console.log("Failed to show");
        }
    });
    // scheduleList.before(commonDivForSchedule);
});





// let getWorkersFromWorkersList = document.querySelector('#get-employee-from-list');
// getWorkersFromWorkersList.addEventListener('click', function () {

//     $.ajax({
//         url:'/admin/getEmployeesList',
//         type:'get',
//         success:function (data) {
// let getListOf
//
//         },
//         error:function () {
//             console.log("Failed to show");
//         }
//     });
// });


// function getListWorker() {
//     $.ajax({
//         url:'/admin/getEmployees',
//         type:'get',
//         success:function (data) {
//             for(let emp in data) {
//                 if (countNumber === 0) {
//                     let divEl = document.createElement('p');
//                     divEl.setAttribute('class', 'text-workers list-workers-for-remove');
//                     divEl.appendChild(document.createTextNode(data[data.length-1].name + " " + data[data.length-1].secondName));
//
//                     let divElNumber = document.createElement('p');
//                     divElNumber.setAttribute('class', 'text-workers list-workers-for-remove');
//                     divElNumber.appendChild(document.createTextNode(data[data.length-1].phoneNumber));
//
//                     let btnDeleteEl = document.createElement('button');
//                     btnDeleteEl.setAttribute('class', 'delete-btn');
//
//                     let commonDiv = document.createElement('div');
//                     commonDiv.setAttribute('class', 'common-div');
//                     appendChildren(commonDiv, {divEl, divElNumber, btnDeleteEl});
//
//                     list.appendChild(commonDiv);
//                     btnDeleteEl.addEventListener('click', function () {
//                         commonDiv.remove();
//                     });
//                     countNumber++;
//                 }
//             }
//         },
//         error:function () {
//             console.log("Failed to show");
//         }
//     });
// }
