function wordGame() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    words = words.sort(() => Math.random() - 0.5);
    
    alert('Перемешанный массив слов: ' + words.join(', '));
    
    let firstGuess = prompt('Чему равнялся первый элемент массива?');
    let lastGuess = prompt('Чему равнялся последний элемент массива?');
    
    firstGuess = firstGuess.toLowerCase();
    lastGuess = lastGuess.toLowerCase();

    words = words.map(words => words.toLowerCase());

    if (firstGuess === words[0] && lastGuess === words[words.length - 1]) {
        alert('Поздравляем! Вы угадали оба элемента.');
    } else if (firstGuess === words[0] || lastGuess === words[words.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно.');
    }   
}
// Задание 11