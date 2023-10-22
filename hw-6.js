const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
        console.log(arr[i]);
        break;
    } else {
        console.log(arr[i]);
    }
}
// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

const index = arr.indexOf(4);

if (index !== -1) {
    console.log(`Число 4 находится в массиве по индексу ${index}`);
} else {
    console.log("Число 4 не найдено в массиве");
}
// Задание 2

const arr = [1, 3, 5, 10, 20];

const arrString = arr.join('');

console.log(arrString);
// Задание 3

const arr = [];

for (let i = 0; i < 3; i++) {

    const row = [];

    for (let j = 0; j < 3; j++) {

        row.push(1);
    }

    arr.push(row);
}

console.log(arr);
// Задание 4

const arr = [1, 1, 1];

arr.push(2, 2, 2);

console.log(arr);
// Задание 5

const arr = [9, 8, 7, 'a', 6, 5];

const filterArr = arr.filter(item => typeof item === 'number');

filterArr.sort((a, b) => a - b);

console.log(filterArr);
// Задание 6

const arr = [9, 8, 7, 6, 5];
const userInput = prompt("Угадайте число:");

if (userInput === null) {

    alert("Игра завершена.");
} else {
    const userNumber = parseInt(userInput);

    if (!isNaN(userNumber)) {
        if (arr.includes(userNumber)) {
            alert("Угадал!");
        } else {
            alert("Не угадал.");
        }
    } else {
        alert("Введите корректное число.");
    }
}
// Задание 7

const str = 'abcdef';
let reverseStr = '';

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}

console.log(reverseStr);
// Задание 8

const arr = [[1, 2, 3], [4, 5, 6]];

const flatArr = [].concat(...arr);

console.log(flatArr);
// Задание 9

const numbers = [3, 7, 2, 5, 8, 1, 9, 4, 6, 10];
const length = numbers.length;

for (let i = 0; i < length - 1; i++) {
    const currentNumber = numbers[i];
    const nextNumber = numbers[i + 1];
    const sum = currentNumber + nextNumber;

    console.log(`Сумма ${currentNumber} и ${nextNumber} равна ${sum}`);
}
// Задание 10

function squareArr(numbers) {
    const squareNumbers = numbers.map(number => number * number);

    return squareNumbers;
}

const inputArr = [1, 2, 3, 4, 5];
const resultArr = squareArr(inputArr);

console.log(resultArr);
// Задание 11

function getLengthWords(strings) {
    const lengths = strings.map(word => word.length);
    return lengths;
}

const inputArr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const resultArr = getLengthWords(inputArr);

console.log(resultArr);
// Задание 12

function filterPositive(array) {
    const negativeValues = array.filter(number => number < 0);

    return negativeValues;
}

const inputArray1 = [-1, 0, 5, -10, 56];
const resultArray1 = filterPositive(inputArray1);
console.log(resultArray1);

const inputArray2 = [-25, 25, 0, -1000, -2];
const resultArray2 = filterPositive(inputArray2);
console.log(resultArray2);
// Задание 13

const arr = [];

for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 11);
    arr.push(randomValue);
}

console.log("Исходный массив:", arr);

const evenValues = arr.filter(value => value % 2 === 0);

console.log("Массив с четными значениями:", evenValues);
// Задание 14

const arr = [];
const length = 6;

for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    arr.push(randomValue);
}

const sum = arr.reduce((intermediate, currentValue) => intermediate + currentValue, 0);

const average = sum / length;

console.log("Массив:", arr);
console.log("Среднее арифметическое:", average);
// Задание 15