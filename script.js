// Первое задание

const username = prompt('Введите имя?');
const year = Number(prompt('Какого ты года рождения?'));
const age = 2021 - year;
alert(username + ' ' +  age);


// Второе задание

const a = Number(prompt('Введите a'));
const b = Number(prompt('Введите b'));
const c = Number(prompt('Введите c'));

const sum = a + b + c;
alert(sum);

if (a % 2 === 0) {
    alert('a - Четное число');

} else {
    alert('a - Нечетное число');
}

if (b % 2 === 0) {
    alert('b - Четное число');

} else {
    alert('b - Нечетное число');
}

if (c % 2 === 0) {
    alert('c - Четное число');

} else {
    alert('c - Нечетное число');
}

alert('Cреднее арифметическое - ' + (sum / 3).toFixed(3));



// Третье задание

const fifeNum = Number(prompt('Введите пятизначное число')); // 54321
const first = Math.floor( fifeNum / 10000 );
const second = Math.floor( fifeNum / 1000 ) - first * 10;
const third = Math.floor( fifeNum / 100 ) - first * 100 - second * 10;
const fourth = Math.floor( fifeNum / 10 ) - first * 1000 - second * 100 - third * 10;
const fifth = fifeNum - first * 10000 - second * 1000 - third * 100 - fourth * 10;
alert( first + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth);