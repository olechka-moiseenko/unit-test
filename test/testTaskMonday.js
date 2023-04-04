const assert = require('assert');
const taskMonday = require('../calc/taskMonday.js');

describe("dayOfWeek", ()=>{
    it('при вводе цифры 1 выводит понедельник ', () => {
        assert.equal(taskMonday.dayOfWeek(1), 'Понедельник');
    });
});

describe("sumMultEl", ()=>{
    it('проверяет, что сумма умноженных элементов массива 37', () => {
        assert.equal(taskMonday.sumMultEl([3, 5, 3, 9]), 42);
    });
});

describe("ucFirst", ()=>{
    it('проверяет, что функция возвращает строку с первым заглавным символом', () => {
        assert.equal(taskMonday.ucFirst('петр'),'Петр');
    });
});

describe("makeOrderMessage", ()=>{
    it('проверяет, что функция возвращает сообщение о стоимости доставки', () => {
        assert.equal(taskMonday.makeOrderMessage(2, 100, 50),'You ordered droids worth 250 credits. Delivery (50 credits) is included in total price.');
    });
});

describe("isAdult", ()=>{
    it('проверяет, достиг ли человек совершеннолетия', () => {
        assert.equal(taskMonday.isAdult(14), false);
    });
});

describe("isValidPassword", ()=>{
    it('проверяет, что пользователь ввёл правильный пароль', () => {
        assert.equal(taskMonday.isValidPassword('jqueryismyjam'), true);
    });
});

describe("checkStorage", ()=>{
    it('проверяет, достаточно ли денежных средств для покупки товара', () => {
        assert.equal(taskMonday.checkStorage(5000, 10, 8000),  "Not enough goods in stock!");
    });
});

describe("makeTransaction", ()=>{
    it('показывает сообщение недостаточно средств', () => {
        assert.equal(taskMonday.makeTransaction(5000, 10, 8000), 'Insufficient funds!');
    });

    it('показывает сообщение о стоимости товара', () => {
        assert.equal(taskMonday.makeTransaction(1000, 3, 15000), `You ordered 3 droids, you have 12000 credits left.`);
    });
});

describe("checkStorage1", ()=>{
    it('проверяет, достаточно ли денежных средств для покупки товара', () => {
        assert.equal(taskMonday.checkStorage1(100, 50), 'The order is accepted, our manager will contact you' );
    });
});

describe("isNumberInRange", ()=>{
    // it('проверяет, входит ли данное число в числовой ряд', () => {
    //     assert.equal(taskMonday.isNumberInRange(10, 30, 17), true);
    // });
    it('проверяет, входит ли данное число в числовой ряд', () => {
        assert.equal(taskMonday.isNumberInRange(20, 50, 76), false);
    });
});

describe("checkIfCanAccessContent", ()=>{
    it('проверяет, есть ли у пользователя доступ к контенту', () => {
        assert.equal(taskMonday.checkIfCanAccessContent("vip"), true)
    });
});

describe("getDiscount", ()=>{
    it('пользователь должен получить скидку 0.02', () => {
        assert.equal(taskMonday.getDiscount(5000), 0.02)
    });
    it('пользователь должен получить скидку 0.02', () => {
        assert.equal(taskMonday.getDiscount(20000),0.05)
    });
    it('пользователь должен получить скидку 0.02', () => {
        assert.equal(taskMonday.getDiscount(137000), 0.1)
    });
});

describe("checkPassword", ()=>{
    it('проверяет, ввёл ли пользователь правильный пароль', () => {
        assert.equal(taskMonday.checkPassword(null), "Canceled by user!")
    });
});

describe("lastElement", ()=>{
    it('возвращает последний символ строки', () => {
        assert.equal(taskMonday.lastElement("JavaScript essentials"), "s")
    });
});