const assert = require('assert');
const taskTuesday = require('../calc/taskTuesday.js');

describe("getSubstring", ()=>{
    it('возвращает из строки "Hello world" новую строку "Hel"', () => {
        assert.equal(taskTuesday.getSubstring('Hello world', 3), 'Hel' )
    });
});

describe("formatMessage", ()=>{
    it('возвращает сообщение "Curabitur ligula..."', () => {
        assert.equal(taskTuesday.formatMessage("Curabitur ligula sapien", 16), "Curabitur ligula...")
    });

    it('возвращает сообщение "Nunc sed turpis a felis in nunc fringilla"', () => {
        assert.equal(taskTuesday.formatMessage('Nunc sed turpis a felis in nunc fringilla', 41), 'Nunc sed turpis a felis in nunc fringilla')
    });
});

describe("checkForName", ()=>{
    it('возвращает из строки "Hello world" новую строку "Hel"', () => {
        assert.equal(taskTuesday.checkForName("Egor Kolbasov", "Egor"), true )
    });
});

describe("checkForSpam", ()=>{
    it('возвращает false если сообщение не содержит слова spam или sale', () => {
        assert.equal(taskTuesday.checkForSpam("Latest technology news", false), false)
    });

    it('возвращает true если сообщение содержит слова sale', () => {
        assert.equal(taskTuesday.checkForSpam('Our book in on Sale!', true), true)
    });
    it('возвращает true если сообщение содержит слов spam', () => {
        assert.equal(taskTuesday.checkForSpam('Get rid of sPaM emails. Spam', true), true)
    });
});

describe("checkPassword", ()=>{
    it('возвращает строку "Access denied, wrong password!" при вводе неправильного пароля', () => {
        assert.equal(taskTuesday.checkPassword("mangohackzor"), "Access denied, wrong password!")
    });
});

describe("getExtremeElements", ()=>{
    it('возвращает массив с первым и последним элементом массива', () => {
        assert.deepEqual(taskTuesday.getExtremeElements(["apple", "peach", "pear", "banana"]), ["apple", "banana"])
    });
});

describe("calculateEngravingPrice", ()=>{
    it('возвращает цену гравировки', () => {
        assert.equal(taskTuesday.calculateEngravingPrice("JavaScript is in my blood", 10), 50)
    });
});

describe("slugify", ()=>{
    it('возвращает строку в нижнем регистре, слова в которой разделены тире', () => {
        assert.equal(taskTuesday.slugify("Arrays for begginers"), "arrays-for-begginers")
    });
});

describe("calculateTotal", ()=>{
    it('вызов функции возвращает сумму целых чисел от одного и до параметра number', () => {
        assert.equal(taskTuesday.calculateTotal(3), 6)
    });
});

describe("createArrayOfNumbers", ()=>{
    it('вызов функции возвращает массив чисел от min до max', () => {
        assert.deepEqual(taskTuesday.createArrayOfNumbers(1, 3), [1, 2, 3])
    });
});

describe("filterArray", ()=>{
    it('вызов функции возвращает массив с числами, которые больше параметра 3', () => {
        assert.deepEqual(taskTuesday.filterArray([1, 2, 3, 4, 5], 3), [4, 5])
    });
});

describe("getCommonElements", ()=>{
    it('вызов функции возвращает новый массив с числами, которые содержатся и в первом, и во втором массиве', () => {
        assert.deepEqual(taskTuesday.getCommonElements([1, 2, 3], [2, 4]), [2])
    });
});

