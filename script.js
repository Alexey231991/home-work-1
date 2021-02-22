// Первое задание

const username = prompt('Введите имя?');
const year = prompt('Какого ты года рождения?');
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

const fifeNum = prompt('Введите пятизначное число');

alert(fifeNum[0] + ' ' + fifeNum[1] + ' ' + fifeNum[2] + ' ' + fifeNum[3] + ' ' +fifeNum[4]);