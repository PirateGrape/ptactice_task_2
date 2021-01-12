/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//Задание 1 Удалить все рекламные блоки со страницы (правая часть сайта)
// const addBlock = document.querySelector('.promo__adv').querySelectorAll('img');

document.querySelectorAll('.promo__adv img').forEach(item => {
    item.remove();
});

//Задание 2 Изменить жанр фильма, поменять "комедия" на "драма"

document.getElementsByClassName('promo__genre')[0].textContent = 'Драма';

// Задание 3 Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

document.querySelector('.promo__bg').style.cssText = 'background-image: url(../img/bg.jpg)';

// Задание 4 Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту ооооооооооооооооооооочень костыльно
 
const dynamicMovies = document.querySelectorAll('.promo__interactive-item'); /*Получил элементы списка*/
dynamicMovies.forEach((item, it) => {
    item.textContent = movieDB.movies[it];
});


let testArr = []; /*Скопировал массив для sort()*/ 
for(let i = 0; i < dynamicMovies.length; i++) {
    testArr[i] = dynamicMovies[i].textContent;
}

testArr.sort(); /*Сделал sort()*/

for(let i = 0; i < dynamicMovies.length; i++) { /*отсортировал список*/
    dynamicMovies[i].textContent = `${i+1}) ${testArr[i]}`;
}

//задание 5 Добавить нумерацию выведенных фильмов */
document.querySelectorAll('.promo__interactive-item')[0].style.cssText = 'list-style: decimal';