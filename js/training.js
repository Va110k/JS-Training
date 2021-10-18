// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   totalSalary += salary;
// }
// console.log("totalSalary: ", totalSalary);

// ex2
// const min = 0;
// const max = 4;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   //   console.log(i);

//   if (i % 2 !== 0) {
//     console.log("не четное: ", i);
//     continue;
//   }

//   console.log("четное: ", i);

//   total += i;
// }

// console.log("total: ", total);

// ex3
// let balance = 20000;
// const payment = 4000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (payment <= balance) {
//   //   console.log("ок");

//   balance -= payment;
//   console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log("На счету недостаточно средств для проведения операции!");
// }

// console.log("Операция завершена");

// ex4
// let totalSpent = 0;
// let payment = 2000;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log("Бронзовый партнер, скидка 2%");
//   discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   console.log("Серебряный партнер, скидка 5%");
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log("Золотой партнер, скидка 10%");
//   discount = 0.1;
// } else {
//   console.log("Не партнер, скидка 0%");
// }

// payment -= payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} usd со скидкой ${discount * 100}%`
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);

// ex5
// const btnAdd = document.querySelector(`button[data-add]`);
// const resBtn = document.querySelector(`button[data-reset]`);
// const valueInput = document.querySelector(`button[data-value]`);
// const outputEl = document.querySelector(`.js-output span`);

// let total = 0;

// btnAdd.addEventListener("click", function () {
//   console.log(`click hehehehe`);

//   const value = Number(valueInput.value);
//   total += value;
//   outputEl.textContent = total;
//   valueInput.value = "";
// });

// resBtn.addEventListener("click", function () {
//   total = 0;
//   outputEl.textContent = total;
// });

// Modul 2
// const friends = ["q", "w", "e", "r", "t"];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   console.log(friends[i]);
// }

// const logins = ["fjdkdkfj", "eopckfvtk", "scmcddl"];
// const loginToFind = "eopckfvtk21";

// const message = logins.includes(loginToFind)
//   ? "Пользователь ${loginToFind} найден."
//   : "Пользователь ${loginToFind} не найден.";
// console.log(message);

// 2
// const numbers = [5, 12, 17, 2, 189, 49, 35];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log("biggestNumber :", biggestNumber);

// 3
// const title = "Top 10 benefits of React framework";

// const normalazedString = title.toLowerCase().split(" ").join("-");

// console.log(normalazedString);

// ex 4

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log("Выполняется функция add");

//   return x + y;
// };

// const r1 = add(3, 4);
// console.log("r1:", r1);

// const fn = function (value) {
//   if (value < 50) {
//     return "Меньше чем 50";
//   }
//   return "Больше чем 50";
// };

// console.log("Результат функции: ", fn(60));

// const bookShelf = {
//   authors: ["Бернард Корнуэлл", "Роберт Шекли"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли']
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors()); //

//ex 6
// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach((num) => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const users = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find((user) => user.id === "002");
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find((x) => x.id === id);

// console.log(getUserById(users, "001"));
// console.log(getUserById(users, "003"));

// Функция которая проверяет величину значения, возвращает true или false.
// const isBigEnough = (val) => val >= 10;

// // Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// // Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// // когда все элементы коллекции будут удовлетворять условию в callback-функции.

// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// // Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// // или больше. Все что нам нужно это буль true/false. Метод some вернет true
// // только тогда, когда хотябы 1 или более элементов коллекции будут
// // удовлетворять условию в callback-функции.

// console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
// console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbers.filter((x) => x % 2 === 0);

const doubled = even.map((x) => x * 2);

const reversed = doubled.reverse();

console.log(reversed);
