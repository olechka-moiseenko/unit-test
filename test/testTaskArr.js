const assert = require('assert');
const taskArr = require('../calc/taskArr.js');

describe("includes", ()=>{
    it('возвращает true если в массиве содержится второй параметр функции', () => {
        assert.equal(taskArr.includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"), true)
    });

    it('возвращает false если в массиве не содержится второй параметр функции', () => {
        assert.equal(taskArr.includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'), false)
    });

});