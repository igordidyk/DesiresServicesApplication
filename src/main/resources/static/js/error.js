let getH1 = document.getElementById('h1');
let getSp1 = document.getElementById('sp1');
let getSp2 = document.getElementById('sp2');
let getSp3 = document.getElementById('sp3');
let getSpinner1 = document.querySelector('span:nth-of-type(2)');
let getSpinner2 = document.querySelector('span:nth-of-type(3)');
let gepP = document.getElementById('main-text');
let getA = document.getElementById('on-main-page');
let errorFromPage = '404';
let error = {
    '400': '400',
    '401': '401',
    '403': '403',
    '404': '404',
    '500': '500',
    '501': '501',
    '502': '502',
    '503': '503',
    '520': '520',
    '521': '521',
    '533': '533'
};

/*Modifying errors styles*/
if (error["400"] === errorFromPage) {
    getH1.innerText = '400 Поганий запит';
    getSp1.innerText = '4';
    getSpinner2.style.setProperty('--opacity', 1);
    gepP.innerText = 'Сервер не може обробити запит, помилка у клієнта. Повернутись';
    gepP.appendChild(getA);
}else if (error["401"] === errorFromPage) {
    getH1.innerText = '401 Не авторизований';
    getSp1.innerText = '4';
    getSpinner2.style.setProperty('--opacity', 0);
    getSp3.innerText = '1';
    gepP.innerText = 'Запитаний ресурс вимагає аутентифікації. Повернутись';
    gepP.appendChild(getA);
}else if (error["403"] === errorFromPage) {
    getH1.innerText = '403 Доступ заборонено';
    getSp1.innerText = '4';
    getSpinner2.style.setProperty('--opacity', 0);
    getSp3.innerText = '3';
    gepP.innerText = 'Запитаний ресурс вимагає аутентифікації. Повернутись';
    gepP.appendChild(getA);
}else if (error["404"] === errorFromPage) {
    getH1.innerText = '404 Ресурс не знайдено';
    getSp1.innerText = '4';
    getSpinner2.style.setProperty('--opacity', 0);
    getSp3.innerText = '4';
    gepP.innerText = 'Сторінки не знайдено. Повернутись';
    gepP.appendChild(getA);
}else if (error["500"] === errorFromPage) {
    getH1.innerText = '500 Веб-сервіс наразі недоступний';
    getSp1.innerText = '5';
    getSpinner2.style.setProperty('--opacity', 1);
    gepP.innerText = 'Несподівана помилка, роботу скоро буде відновлено';
}else if (error["501"] === errorFromPage) {
    getH1.innerText = '501 Не впроваджений';
    getSp1.innerText = '5';
    getSpinner2.style.setProperty('--opacity', 0);
    getSp3.innerText = '1';
    gepP.innerText = 'Веб-сервер не може розпізнати метод запиту. Повернутись';
    gepP.appendChild(getA);
}else if (error["502"] === errorFromPage) {
    getH1.innerText = '502 Веб-сервіс наразі недоступний';
    getSp1.innerText = '5';
    getSpinner2.style.setProperty('--opacity', 0);
    getSp3.innerText = '2';
    gepP.innerText = 'У нас є певні проблеми з бекендом. Очікуйте відновлення ресурсу.';
}else if (error["503"] === errorFromPage) {
    getH1.innerText = '503 Веб-сервіс наразі недоступний';
    getSp1.innerText = '5';
    getSpinner2.style.setProperty('--opacity', 0);
    getSp3.innerText = '3';
    gepP.innerText = 'У нас є певні проблеми з бекендом. Очікуйте відновлення ресурсу.';
}else if (error["520"] === errorFromPage) {
    getH1.innerText = '520 Невідомий хост';
    getSp1.innerText = '5';
    getSpinner2.style.animation = 'colordancing3 4s infinite';
    getSp2.innerText = '2';
    getSpinner1.style.setProperty('--opacity', 0);
    gepP.innerText = 'Запитане ім\'я хоста не перенаправлено. Використовуйте лише коректні імена для доступу до ресурсу.';
    gepP.appendChild(getA);
}else if (error["521"] === errorFromPage) {
    getH1.innerText = '521 Веб-сервіс наразі недоступний';
    getSp1.innerText = '5';
    getSpinner1.style.setProperty('--opacity', 0);
    getSp2.innerText = '2';
    getSpinner2.style.setProperty('--opacity', 0);
    getSpinner2.style.animation = 'colordancing 4s infinite';
    getSp3.innerText = '1';
    gepP.innerText = 'У нас є певні проблеми з бекендом. Очікуйте відновлення ресурсу.';
}else if (error["533"] === errorFromPage) {
    getH1.innerText = '533 Планове технічне обслуговування';
    getSp1.innerText = '5';
    getSpinner1.style.setProperty('--opacity', 0);
    getSp2.innerText = '3';
    getSpinner2.style.setProperty('--opacity', 0);
    getSpinner2.style.animation = 'colordancing 4s infinite';
    getSp3.innerText = '3';
    gepP.innerText = 'Цей сайт в даний час на обслуговуванні. Наша сервісна команда наполегливо працює над його поверненням.';
}
