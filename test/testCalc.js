const assert = require('assert');
const operations = require('../calc/operations');

describe('Calc', ()=> {
it('правильно находит сумму 1 и 3', () => {
  assert.equal(operations.add(1, 3), 4);
});

//subtract(), multiply() и divide()
it('правильно находит разницу 38 и 35', () => {
  assert.equal(operations.subtract(38, 35), 3);
});

it('правильно находит произведение 2 и 3', () => {
  assert.equal(operations.multiply(2, 3), 6);
});

it('правильно находит частное 21 и 3', () => {
  assert.equal(operations.divide(21, 3), 7);
});

it('сообщает об ошибке при использовании строки вместо числа', () => {
  assert.equal(operations.validateNumbers('sammy', 5), false);
});

it('сообщает об ошибке при использовании двух строк вместо чисел', () => {
  assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
});

it('успех при использовании двух чисел', () => {
  assert.equal(operations.validateNumbers(5, 5), true);
});
});
 