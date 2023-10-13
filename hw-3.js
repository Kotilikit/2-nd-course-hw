let password = 'qwerty';
let input = prompt('Введите пароль');

if (input === 'qwerty') {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}
// Задание 1


let c = 2;

(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');
// Задание 2


let d = 7;
let e = 105;

(c > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');
// Задание 3


let a = '2';
let b = '3';

alert(Number(a) + Number(b));
// Задание 4


let monthNumber = prompt('Введите месяц');
monthNumber = monthNumber.toLowerCase();

switch (monthNumber) {
    case 'январь':
    case 'февраль':
    case 'декабрь':
    case '1':
    case '2':
        alert('Зима');
        break;
    case 'март':
    case 'апрель':
    case 'май':
    case '3':
    case '4':
    case '5':
        alert('Весна');
        break;
    case 'июнь':
    case 'июль':
    case 'август':
    case '6':
    case '7':
    case '8':
        alert('Лето');
        break;
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
    case '9':
    case '10':
    case '11':
        alert('Осень');
        break;
    default:
        alert('Нет такого месяца');
        break;
}
// Задание 5


let inp = prompt("Пожалуйста, введите любое число");
let number = parseFloat(inp);

if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
} else {
    alert("Вы ввели не число");
}
// Задание 7


let clientOS = 1;

if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
    console.log("Установите версию приложения для Android по ссылке");
} else {
    console.log("Не удалось определить операционную систему");
}
// Задание 8


let client = 0;
let clientDeviceYear = 2015;

if (client === 0) {
    if (clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для iOS по ссылке");
    } else {
        console.log("Установите версию приложения для iOS по ссылке");
    }
} else if (client === 1) {
    if (clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    } else {
        console.log("Установите версию приложения для Android по ссылке");
    }
} else {
    console.log("Не удалось определить операционную систему");
}
// Задание 9
