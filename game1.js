function timeYear(monthNum) {
    if (monthNum < 1 || monthNum > 12) {
        return "Неправильный номер месяца";
    } else if (monthNum >= 1 && monthNum <= 2 || monthNum === 12) {
        return "Зима";
    } else if (monthNum >= 3 && monthNum <= 5) {
        return "Весна";
    } else if (monthNum >= 6 && monthNum <= 8) {
        return "Лето";
    } else {
        return "Осень";
    }
}

function calculateSeason() {
    let monthNum = parseInt(prompt("Введите номер месяца (от 1 до 12)"));
    
    alert(`${monthNum} месяц - это ${timeYear(monthNum)}`);    
}
// Задание 8