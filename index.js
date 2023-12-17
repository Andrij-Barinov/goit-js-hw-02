// ❗ ЗАДАЧА #1

// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

// название - строка "Droid"
// цена за штуку - число 2000

// ТЕСТЫ

// ✅ Объявлена переменная productName
// ✅ Значение переменной productName это строка "Droid"
// ✅ Объявлена переменная pricePerItem
// ✅ Значение переменной pricePerItem это число 2000


// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);



// ❗ ЗАДАЧА #2

// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// ТЕСТЫ

// ✅ Переменная pricePerItem объявлена с помощью let
// ✅ При объявлении переменной pricePerItem присвоено значение - число 2000
// ✅ Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
// ✅ Переменная productName объявлена с помощью let
// ✅ При объявлении переменной productName присвоено значение - строка "Droid"
// ✅ Переменной productName присвоено новое значение - строка "Repair droid"


// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;
// console.log(productName);
// console.log(pricePerItem);



// ❗ ЗАДАЧА #3

// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// ТЕСТЫ

// ✅ Объявлена переменная topSpeed
// ✅ Значение переменной topSpeed это число 160
// ✅ Объявлена переменная distance
// ✅ Значение переменной distance это число 617.54
// ✅ Объявлена переменная login
// ✅ Значение переменной login это строка "mango935"
// ✅ Объявлена переменная isOnline
// ✅ Значение переменной isOnline это буль true
// ✅ Объявлена переменная isAdmin
// ✅ Значение переменной isAdmin это буль false


// let topSpeed = 160;
// let distance = 617.54;
// let login = "mango935";
// let isOnline = true;
// let isAdmin = false;
// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);



// ❗ ЗАДАЧА #4

// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

// ТЕСТЫ

// ✅ Объявлена переменная pricePerItem
// ✅ Значение переменной pricePerItem это число 3500
// ✅ Объявлена переменная orderedQuantity
// ✅ Значение переменной orderedQuantity это число 4
// ✅ Объявлена переменная totalPrice
// ✅ Значение переменной totalPrice это число 14000
// ✅ Использован оператор *


// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = (pricePerItem * orderedQuantity);
// console.log(totalPrice);



// ❗ ЗАДАЧА #5

// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

// ТЕСТЫ

// ✅ Объявлена переменная productName
// ✅ Значение переменной productName это строка "Droid"
// ✅ Объявлена переменная pricePerItem
// ✅ Значение переменной price это число 3500
// ✅ Объявлена переменная message
// ✅ Значение переменной message это строка "You picked Droid, price per item is 3500 credits"


// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);



// ❗ ЗАДАЧА #6

// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

// pricePerDroid - цена одного дроида, значение 800
// orderedQuantity - количество дроидов в заказе, значение 6
// deliveryFee - стоимость доставки, значение 50
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// ТЕСТЫ

// ✅ Объявлена переменная orderedQuantity
// ✅ Значение переменной orderedQuantity это число 6
// ✅ Объявлена переменная pricePerDroid
// ✅ Значение переменной pricePerDroid это число 800
// ✅ Объявлена переменная deliveryFee
// ✅ Значение переменной deliveryFee это число 50
// ✅ Объявлена переменная totalPrice
// ✅ Значение переменной totalPrice это число 4850
// ✅ Объявлена переменная message
// ✅ Значение переменной message это строка "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."


// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);



// ❗ ЗАДАЧА #7

// Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.

// ТЕСТЫ

// ✅ Ожидается объявление функции
// ✅ Функции присвоено имя sayHi
// ✅ В теле функции sayHi есть console.log("Hello, this is my first function!")
// ✅ После объявления есть вызов функции sayHi


// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();



// ❗ ЗАДАЧА #8

// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// ТЕСТЫ

// ✅ Объявлена функция add(a, b, c)
// ✅ Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
// ✅ Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
// ✅ Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"


// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);



// ❗ ЗАДАЧА #9

// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// ТЕСТЫ

// ✅ Объявлена функция add(a, b, c)
// ✅ В функции add есть оператор return
// ✅ Вызов add(15, 27, 10) возвращает 52
// ✅ Вызов add(10, 20, 30) возвращает 60
// ✅ Вызов add(5, 10, 15) возвращает 30
// ✅ Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// function add(a, b, c) {
// return a + b + c;
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));



// ❗ ЗАДАЧА #10

// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара

// Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.

// ТЕСТЫ

// ✅ Объявлена функция makeMessage(name, price)
// ✅ Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
// ✅ Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
// ✅ Вызов makeMessage('Reactor', 8000) возвращает "You picked Reactor, price per item is 8000 credits"
// ✅ Вызов makeMessage('Engine', 4070) возвращает "You picked Engine, price per item is 4070 credits"


// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));



// ❗ ЗАДАЧА #11

// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.

// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол - ва товаров на цену одного.

// ТЕСТЫ

// ✅ Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
// ✅ Вызов calculateTotalPrice(5, 100) возвращает 500
// ✅ Вызов calculateTotalPrice(8, 60) возвращает 480
// ✅ Вызов calculateTotalPrice(3, 400) возвращает 1200
// ✅ Вызов calculateTotalPrice(1, 3500) возвращает 3500
// ✅ Вызов calculateTotalPrice(12, 70) возвращает 840
// ✅ Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = (orderedQuantity * pricePerItem);
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));



// ❗ ЗАДАЧА #12

// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки

// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".Не забудь о цене доставки при вычислениях общей стоимости.

// ТЕСТЫ

// ✅ Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// ✅ Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// ✅ Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// ✅ Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."


// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// const message = `You ordered droids worth ${(orderedQuantity * pricePerDroid + deliveryFee)} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));



// ❗ ЗАДАЧА #13

// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

// ТЕСТЫ

// ✅ Объявлена функция isAdult(age)
// ✅ В выражении проверки используется оператор >=
// ✅ Вызов isAdult(20) возвращает true
// ✅ Вызов isAdult(14) возвращает false
// ✅ Вызов isAdult(8) возвращает false
// ✅ Вызов isAdult(37) возвращает true


// function isAdult(age) {
//   const passed = (age >= 18);
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));



// ❗ ЗАДАЧА #14

// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

// ТЕСТЫ

// ✅ Объявлена функция isValidPassword(password)
// ✅ В выражении проверки паролей использован оператор ===
// ✅ Вызов isValidPassword("mangodab3st") возвращает false
// ✅ Вызов isValidPassword("kiwirul3z") возвращает false
// ✅ Вызов isValidPassword("jqueryismyjam") возвращает true


// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = (SAVED_PASSWORD === password);
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));