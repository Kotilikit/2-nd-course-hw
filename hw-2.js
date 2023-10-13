let a = 10;
alert (a);

a = 20;
alert (a);
// 1 задача 

let yearCreated = 2007;
alert (yearCreated);
// 2 задача

let nameCreator = "Brendan Eich";
alert (nameCreator);
// 3 задача

let num1 = 10;
let num2 = 2;
let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1/num2;
alert (`Сумма ${sum}, Разность ${sub}, Произведение ${mult}, Частное ${div}`);
// 4 задача

let result = 2**5;
alert (result);
// 5 задача

let a = 9;
let b = 2;
let result = 9 % 2;
alert (result);
// 6 задача

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++ num;
- num;
alert(num);
// 7 задача

let age = prompt("Сколько Вам лет?");
alert (age);
// 8 задача

let user = {
    name: 'Alex',
    age: 25,
    isAdmin: false,
};
// 9 задача 

user.cityOfResidence = 'Moscow';
// 9.1

user.age = 35;
// 9.2

delete user.cityOfResidence;
// 9.3

let info = prompt("Что вы хотите узнать о пользователе?");
alert (user[info]);
// 9.4

let yourName = prompt("Как Вас зовут?");
alert(`Привет, ${yourName}!`);
// 10 задача