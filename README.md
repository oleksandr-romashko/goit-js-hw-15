# goit-js-hw-14

Homework for DOM topic.

## Стартові файли

[Завантажуй стартові файли](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/06/src) з готовою розміткою та підключеними файлами скриптів для кожного завдання. Скопіюй їх собі у проект.

## Завдання 1

HTML містить список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт, який:

1. Порахує і виведе в консоль кількість категорій в `ul#categories`, тобто елементів `li.item`.
1. Для кожного элемента `li.item` у списку `ul#categories`, знайде і виведе в консоль текст заголовку елемента (тегу `<h2>`) і кількість елементів в категорії (усіх `<li>`, вкладених в нього).
Для виконання цього завдання потрібно використати метод `forEach()` і властивості навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

```
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

## Завдання 2

HTML містить порожній список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

JavaScript містить масив рядків.

```JavaScript
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```


Напиши скрипт, який для кожного елемента масиву `ingredients`:

Створить окремий елемент `<li>`. Обов'язково використовуй метод `document.createElement()`.
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас `item`.
Після чого, вставить усі `<li>` за одну операцію у список `ul#ingredients`.

## Завдання 3

Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список `ul.gallery`.

```html
<ul class="gallery"></ul>
```

Використовуй масив об'єктів `images` для створення елементів `<img>`, вкладених в `<li>`. Для створення розмітки використовуй шаблонні рядки і метод `insertAdjacentHTML()`.

* Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
* Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

```JavaScript
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```

## Завдання 4

Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

```html
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
```

* Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
* Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
* Оновлюй інтерфейс новим значенням змінної counterValue.

## Завдання 5

Напиши скрипт, який під час набору тексту в інпуті `input#name-input` (подія `input`), підставляє його поточне значення в `span#name-output`. Якщо інпут порожній, у спані повинен відображатися рядок `"Anonymous"`.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```
