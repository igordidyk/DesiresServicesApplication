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
    let employee = { name:inputOnKey.value.split(' ')[0],
        secondName:inputOnKey.value.split(' ')[1],
        phoneNumber:inputNumber.value
    };
    console.log(employee);
    $.ajax({
        url:'/admin/addEmployee',
        type:'post',
        data:JSON.stringify(employee),
        contentType:'application/json',
        success:function (data) {
            inputOnKey.value = '';
            inputNumber.value = '';
            addEmployee.disabled = true;
            console.log("Employee "+ employee + " was added");
            getListWorker();
            },
        error:function () {
            console.log("Failed to save");
        }
    });
});

function getListWorker() {
    $.ajax({
        url:'/admin/getEmployees',
        type:'get',
        success:function (data) {
            for(let emp in data) {
                if (countNumber === 0) {
                    let divEl = document.createElement('p');
                    divEl.setAttribute('class', 'text-workers list-workers-for-remove');
                    divEl.appendChild(document.createTextNode(data[data.length-1].name + " " + data[data.length-1].secondName));

                    let divElNumber = document.createElement('p');
                    divElNumber.setAttribute('class', 'text-workers list-workers-for-remove');
                    divElNumber.appendChild(document.createTextNode(data[data.length-1].phoneNumber));

                    let btnDeleteEl = document.createElement('button');
                    btnDeleteEl.setAttribute('class', 'delete-btn');

                    let commonDiv = document.createElement('div');
                    commonDiv.setAttribute('class', 'common-div');
                    appendChildren(commonDiv, {divEl, divElNumber, btnDeleteEl});

                    list.appendChild(commonDiv);
                    btnDeleteEl.addEventListener('click', function () {
                        commonDiv.remove();
                    });
                    countNumber++;
                }
            }
        },
        error:function () {
            console.log("Failed to show");
        }
    });
}
