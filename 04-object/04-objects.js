const person = {
  name: "Kate",
  age: 34,
  isMother: true,
  adress: {
    city: "Rostov",
    street: "Pecherskogo",
  },
  "dother name": "Masha",
  [1 + 1]: "computed value",
  languages: ["ru", "uk"],
  hello() {
    console.log("hello " + this.name); //обычная функция, перенимает контекст объекта, внутри которго создана, ключевое слово this - работает
  },
  hello1: () => {
    console.log("hello 1 " + this.name); //стрелочная функция, перенимает контекст более глобального объекта Window (при условии работы в браузере)
  },
};
const n = null; // null -> object в js
console.log(person);
person.hello();
person.hello1();
console.log(person["dother name"]);
console.log(person.age);
console.log(person[1 + 1]);
const adress = person.adress;
console.log(adress);
person.age++; // можем менять значения объектов
console.log(person.age);

//удаление ключей объекта

delete person.age;

console.log(person);

//Деструктуризация объекта (взять и сохранить часть полей в отдельные переменные)

const { adress: adressFull = "TEST", languages, isMother } = person; //если указать просто adres, то будет ошибка
// - так как переменная такая была определена выше - const adress = person.adress;
//  adress:adressFull - говорим, возьми ключ  adress и положи в переменную adressFull
// adress: adressFull='TEST' - говорим, возьми ключ  adress и положи в переменную adressFull, но если у объекта
// не будет ключа adress или его значение будет = undefinded, то по умолчанию он равен 'TEST'

console.log(adressFull);
console.log(languages);
console.log(isMother);

//  Итерация по ключам объекта

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}

//  Итерация по значениям объекта

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(person[key]);
  }
}

//  if (person.hasOwnProperty(key)) - эта проверка нужна, чтобы проходиться только по собственным ключам, избегая
//  [[Prototype]]:Object

const keys = Object.keys(person); // получаем массив из строк ключей объекта

console.log(keys);

keys.forEach((key) => console.log(person[key]));

// если нам нужен универсальный объект, который бы имел функции, которые бы работали для других объектов, то

// 1. Создаем универсальный объект

const logger = {
  printKey() {
    console.log(Object.keys(this));
  },
  printValue(text = true) {
    if (text) Object.keys(this).forEach((key) => console.log( "WithText: object value = " + this[key]));
    else Object.keys(this).forEach((key) => console.log(this[key]));
  },
};
logger.printKey();
logger.printValue();

// 2. Чтобы вызвать эти методы для других объектов, например person есть 3 варианта

// - 1 вариант - bind, принимает в себя контекст (другой объект) и возвращает новую фукцию, но не вызывает ее
// чтобы сразу эту функцию вызвать я после bind(person) добавляю  скобки () - вызываю
logger.printKey.bind(person)();

// - 2 вариант - тоже что и  bind, но сразу вызывает возвращаемую функцию,
// принимает в себя любок количество парметров - контекст и пречисление аргументов
logger.printValue.call(person, true);

// - 3 вариант - тоже что и call, но
// принимает в себя только 2 параментра - контекст и массив с аргументами (в колл - контекст и лю

logger.printValue.apply(person, [false]);
