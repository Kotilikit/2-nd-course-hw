let string = "js";
let upperCaseString = string.toUpperCase();
console.log(upperCaseString);
// Задание 1

function searchStart(arr, searchString) {
    searchString = searchString.toLowerCase();

    let result = arr.filter(function (element) {
        return element.toLowerCase().startsWith(searchString);
    });

    return result;
}

let result1 = searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
console.log(result1);

let result2 = searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
console.log(result2);

let result3 = searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');
console.log(result3);
// Задание 2

let roundedDown = Math.floor(32.58884);
console.log(roundedDown);
// Задание 3.1

let roundedUp = Math.ceil(32.58884);
console.log(roundedUp);
// Задание 3.2

let rounded = Math.round(32.58884);
console.log(rounded);
// Задание 3.3

let numbers = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);

console.log("Наименьшее число: " + minNumber);
console.log("Наибольшее число: " + maxNumber);
// Задание 4

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

getRandomNumber();
// Задание 5

function getRandomArrNumbers(n) {
    let arr = [];
    let length = Math.floor(n / 2);

    for (var i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (n + 1));
        arr.push(randomNumber);
    }

    return arr;
}

let result1 = getRandomArrNumbers(7);
console.log(result1);

let result2 = getRandomArrNumbers(12);
console.log(result2);
// Задание 6

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber1 = getRandomNumberInRange(1, 10);
console.log(randomNumber1);

let randomNumber2 = getRandomNumberInRange(-10, 1);
console.log(randomNumber2);
// Задание 7

let currentDate = new Date();
console.log(currentDate);
// Задание 8

let currentDate = new Date(); // Получаем текущую дату

let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата: " + currentDate.toLocaleString());
console.log("Дата через 73 дня: " + futureDate.toLocaleString());
// Задание 9

function formatDateTime(date) {
    let daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    let dateString = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + daysOfWeek[date.getDay()] + ".";
    let timeString = "Время: " + date.toLocaleTimeString();

    return dateString + "\n" + timeString;
}

let currentDate = new Date();
let formattedDate = formatDateTime(currentDate);
console.log(formattedDate);
// Задание 10
