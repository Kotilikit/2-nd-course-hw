for (let i = 0; i < 2; i++) {
    console.log("Привет");
}
// Задание 1

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
// Задание 2

for (let i = 7; i <= 22; i++) {
    console.log(i);
}
// Задание 3

let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]}`);
}
// Задание 4

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log("Полученное число:", n);
console.log("Количество итераций:", num);
// Задание 5

let day = 5;

for (; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
// Задание 6



