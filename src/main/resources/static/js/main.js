console.log("include requests js");

let addEmployee = document.querySelector("#addEmployee");
let getEmployees = document.querySelector("#getAll");


let inputOnKey = document.querySelector('#fullName');
let inputNumber = document.querySelector('#number');
let list = document.querySelector('.list-of-workers');


inputOnKey.addEventListener('keyup', function () {
    inputOnKey.value !== '' ? addEmployee.disabled = false : addEmployee.disabled = true;
});

inputNumber.addEventListener('keyup', function () {
    inputNumber.value !== '' ? addEmployee.disabled = false : addEmployee.disabled = true;
});


addEmployee.addEventListener('click', function () {
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
        success:function () {
            inputOnKey.value = '';
            inputNumber.value = '';
            addEmployee.disabled = true;
            console.log("Employee "+ employee + " was added");
        },
        error:function () {
            console.log("Failed to save");
        }
    });
});


getEmployees.addEventListener('click', function () {

    $.ajax({
        url:'/admin/getEmployees',
        type:'get',
        success:function (data) {

            for(emp in data){
                let divEl = document.createElement('p');
                divEl.setAttribute('class', 'text-workers list-workers-for-remove');
                divEl.appendChild(document.createTextNode(emp.name + " "+ emp.secondName));

                let divElNumber = document.createElement('p');
                divElNumber.setAttribute('class', 'text-workers list-workers-for-remove');
                divElNumber.appendChild(document.createTextNode(emp.phoneNumber));

                let btnDeleteEl = document.createElement('button');
                btnDeleteEl.setAttribute('class', 'delete-btn');
                let imgDeleteEl = document.createElement('img');
                setAttributes(imgDeleteEl, {'src': '../static/img/delete.png', 'class': 'delete-img'});
                btnDeleteEl.appendChild(imgDeleteEl);

                let commonDiv = document.createElement('div');
                commonDiv.setAttribute('class', 'common-div');
                appendChildren(commonDiv, {divEl, divElNumber, btnDeleteEl});

                list.appendChild(commonDiv);
                btnDeleteEl.addEventListener('click', function () {
                    commonDiv.remove();
                });
            }


        },
        error:function () {
            console.log("Failed to show");
        }
    });
});


