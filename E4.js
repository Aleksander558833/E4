// Задание 1 по модулю Е4. Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
function logOwnProperty(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
        }
    }
}

// Пример использования
const obj = {
    apple: 'Яблоко',
    banana: 'Банан',
    cherry: 'Вишня'
};

Object.prototype.test = 'унаследованное свойство';
logOwnProperty(obj)

// Задание 2. Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
function hasProperty(propertyName, obj){
    return obj.hasOwnProperty(propertyName);
}

const user = {
    name: 'Alex',
    age: 42,
    profession: 'developer'
};

console.log(hasProperty('age', user));
console.log(hasProperty('gender', user));

// Задание 3. Написать функцию, которая создает пустой объект, но без прототипа.
function obj() {
    return Object.create(null);
}
const a = obj();
console.log(a);

// Задание 4.
//
// Создаем родительскую функцию для электроприборов.
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// Добавление методов в прототип. Метод включения и отключения приборов.
ElectricalAppliance.prototype.plugIn = function () {
    this.isPlugged = true;
    console.log(`${this.name} подключен к розетке.`);
};

ElectricalAppliance.prototype.unplug = function () {
    this.isPlugged = false;
    console.log(`${this.name} отключен от розетки.`);
};

// Создание делегирующих связей для лампы.
function Lamp(name, power, color) {
    this.name = name;
    this.power = power;
    this.color = color;
    this.isPlugged = false;
}

// Наследование от ElectricalAppliance
Lamp.prototype = Object.create(ElectricalAppliance.prototype);
Lamp.prototype.changeColor = function (newColor) {
    this.color = newColor;
    console.log(`${this.name} теперь светит ${this.color} светом`);
};

// Создание делегирующих связей для компьютера.
function Computer(name, power, brand) {
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.isPlugged = false;
}

// Наследование от ElectricalAppliance
Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.showBrand = function () {
    console.log(`Это ${this.name} от бренда ${this.brand}.`);
};

// Создание экземпляров приборов.
const tableLamp = new Lamp('Настольная лампа', 60, 'теплый белый');
const gamePC = new Computer('Игровой компьютер', 400, 'Hyperpc Cyber Max');

// Использование методов и подсчет мощностей
tableLamp.plugIn();
gamePC.plugIn();

console.log('Подключенные приборы:');
console.log(`- ${tableLamp.name} (${tableLamp.power} Вт)`);
console.log(`- ${gamePC.name} (${gamePC.power} Вт)`);

// Подсчет общей мощности
const totalPower = (tableLamp.isPlugged ? tableLamp.power : 0)+
                   (gamePC.isPlugged ? gamePC.power : 0);
console.log(`Общая потребляемая мощность: ${totalPower} Вт);`);

tableLamp.changeColor('Холодный белый');
gamePC.showBrand();
tableLamp.unplug();
console.log(`Общая потребляемая мощность после отключения ПК: ${gamePC.power} Вт`);

// Задание 5.
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn(){
        this.isPlugged = true;
        console.log(`${this.name} подключен к розетке.`);
    }

    unplug(){
        this.isPlugged = false;
        console.log(`${this.name} отключен от розетки.`);
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, power, color) {
        super(name, power);
        this.color = color;
    }

    changeColor(newColor) {
        this.color = newColor;
        console.log(`${this.name} теперь светит ${this.color} светом.`);
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    showBrand(){
        console.log(`Это ${this.name} от бренда ${this.brand}.`);
    }
}

const tableLamp = new Lamp('Настольная лампа', 60, 'Холодный белый');
const gamePC = new Computer('Игровой компьютер', 400, 'Hyperpc Cyber Max');

tableLamp.plugIn();
gamePC.plugIn();

console.log('Подключенные приборы:');
console.log(`- ${tableLamp.name} (${tableLamp.power} Вт)`);
console.log(`- ${gamePC.name} (${gamePC.power} Вт)`);

const totalPower = (tableLamp.isPlugged ? tableLamp.power : 0)+
                   (gamePC.isPlugged ? gamePC.power : 0);
console.log(`Общая потребляемая мощность: ${totalPower} Вт);`);

tableLamp.changeColor('Холодный белый');
gamePC.showBrand();
tableLamp.unplug();
console.log(`Общая потребляемая мощность после отключения ПК: ${gamePC.power} Вт`);