function less(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(less(2, 5));
// Задание 1

function integer(num) {
    if (num % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(integer(12));
// Задание 2

function squareNum(num) {
    const square = num * num;
    console.log(square);
}

squareNum(10);
// Задание 3.1

function squareNum(num) {
    return num * num;
}

console.log(squareNum(5));
// Задание 3.2

function hello() {
    let age = parseInt(prompt("Сколько вам лет?"));

    if (age < 0) {
        console.log("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}

hello();
// Задание 4

function checkMult(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

console.log(checkMult(2, 5));
// Задание 5

function numSquare() {
    let input = prompt("Введите число:");
    let num = parseFloat(input);

    if (!isNaN(num)) {
        let square = num ** 3;
        return `${num} в кубе равняется ${square}`;
    } else {
        return "Переданный параметр не является числом";
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(numSquare());
}
// Задание 6

function getCircleArea() {
    return this.radius ** 2 * Math.PI;
}
function getCirclePerimeter() {
    return this.radius * 2 * Math.PI;
}

const circle1 = {
    radius: 10,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 5,

    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
// Задание 7

