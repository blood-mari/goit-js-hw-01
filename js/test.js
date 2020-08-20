class Car {
    constructor(carSpeed) { this.carSpeed = carSpeed; }
    viewSpeed() {return `Моя скорость ${this.carSpeed} km/h`; }
}

let audi = new Car(200);
document.querySelector('#car').innerText = audi.viewSpeed();

audi.carSpeed=300;
document.querySelector('#car2').innerText = audi.viewSpeed();

// задачи для примера
/*
 * Напиши скрипт проверки подписки пользователя при доступе к контенту
 * - Есть три типа подписки: free, pro и vip.
 * - Получить доступ могут только пользователи pro и vip
 */

const subscribtion = 'free';
const canAccess = subscribtion === 'pro' || subscribtion === 'vip';
console.log('Есть доступ к контенту?', canAccess);

/*
 * Напиши скрипт который проверяет возможность открыть чат с пользователем.
 * Для этого пользователь должен быть:
 * - другом
 * - онлайн
 * - без режима не беспокоить
 */

const isOnline = 'true';
const isFriend = 'true';
const isDnD = 'false';

isOnline === 'true' && isFriend === 'true' && isDnD === 'false' ? console.log('Открываем чат с пользователем') : console.log('Чат с пользователем недоступен');

/*
 * Напиши скрипт который проверяет вхождение числа
 * в отрезок обозначенный x1 и x2.
 *
 * - До x1
 * - После x2
 * - От x1 до x2
 * - До x1 или после x2
 */

const x1 = 10;
const x2 = 55;
const number = 0;

console.log('Число ${number} попадает в отрезок до ${x1}', number < x1);

console.log('Число ${number} попадает в отрезок после ${x2}', number > x2);

const res1 = number < x2 && number > x1;
console.log('Число ${number} попадает в отрезок от ${x1} до ${x2}', res1);

const res2 = number < x1 || number > x2;
console.log('Число ${number} попадает в отрезок до ${x1} или после ${x2}', res2);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const room = 716;
const type = 'VIP';

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

/*
 * Нормализация с методом toLowerCase()
 */

let brand = 'SamSUnG';
brand = brand[0] + brand.slice(1).toLowerCase();

console.log(brand);

/*
 * Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';

const normalizedString1 = string1.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
let base = prompt('Давай число');
base = Number(base);
console.log(base);

//  2. попросить ввести степень и сохранить в переменную

let power = prompt('Давай степень');
power = Number(power);
console.log(power);

//  3. Возвести введенные данные в степень и вывести
const result = base ** power;

console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// Math.random() * (max - min) + min
const max = 80;
const min = 10;

const result = Math.round(Math.random() * (max - min) + min);

console.log(result);