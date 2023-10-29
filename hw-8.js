const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);
// Задание 1

function isPositive(value) {
    return value > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));
// Задание 2

function printCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate);
}

let secondsPassed = 0;
const intervalId = setInterval(() => {
    printCurrentDate();
    secondsPassed += 3;

    if (secondsPassed >= 30) {
        clearInterval(intervalId);
        console.log("30 секунд прошло");
    }
}, 3000);
// Задание 3

function delayForSecond(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});
// Задание 4

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi('Глеб');
});
// Задание 5