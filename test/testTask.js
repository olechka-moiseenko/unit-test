const assert = require('assert');
const task = require('../calc/task.js');

// isPolindrome

describe("isPolindrome", () => {
it('проверяет, что слово \'a\' палиндром', () => {
    assert.equal(task.isPolindrome('а'), true);
});


it('проверяет, что слово \'шалаш\' палиндром', () => {
    assert.equal(task.isPolindrome('шалаш'), true);
});

it('проверяет, что слово \'Анна\' палиндром', () => {
    assert.equal(task.isPolindrome('Анна'), true);
});

it('проверяет, что пустая строка не палиндром', () => {
    assert.equal(task.isPolindrome(''), false);
});

it('проверяет, что  \'актриса\' не палиндром', () => {
    assert.equal(task.isPolindrome('актриса'), false);
});
});


describe("countVowels", () => {
    const consonants = 'бвгджзклмнпрстчьъйцшщхф';
    const volwes = 'аеёиуоэяюы';
    const alphabetic = (volwes + consonants).split(''
        ).sort().filter(
            (x, i, a) => a.indexOf(x) == i).join('');
    it('весь алфавит - 33 буквы', () => {
        assert.equal(alphabetic.length, 33);
    });
        
    it('пустая строка это 0 гласных букв', () => {
        assert.equal(task.countVowels(''), 0);
    });
    it('слово \'и\' состоит из 1 гласной буквы', () => {
        assert.equal(task.countVowels('и'), 1);
    });
    it('слово \'хм\' состоит из 0 гласных букв', () => {
        assert.equal(task.countVowels('хм'), 0);
    });
    it('строка из всех гласных состоит из 10 гласных букв', () => {
        assert.equal(task.countVowels(volwes), volwes.length);
    });
    it('строка из всех согласных состоит из 0 гласных букв', () => {
        assert.equal(task.countVowels(consonants), 0);
    });
    it('строка всех букв алфавита состоит из 10 гласных букв', () => {
        assert.equal(task.countVowels(alphabetic), 10);
    });
    it('строка из всех заглавных гласных состоит из 10 гласных букв', () => {
        assert.equal(task.countVowels(volwes.toLocaleUpperCase()), volwes.length);
    });
    it('строка из всех заглавных согласных состоит из 0 гласных букв', () => {
        assert.equal(task.countVowels(consonants.toLocaleUpperCase()), 0);
    });
    it('слово \'ааа\' состоит из 3 гласных букв', () => {
        assert.equal(task.countVowels('ааа'), 3);
    });
    it('слово \'загадочный\' состоит из 3 гласных букв', () => {
        assert.equal(task.countVowels('загадочный'), 4);
    });
});

describe("isAnagram", () => {
    it('проверяет, что слова \'кабан\' и \'банка\' анаграмма', () => {
        assert.equal(task.isAnagram('кабан', 'банка'), true);
    });

    it('проверяет, что слова \'приказ\' и \'каприз\' анаграмма', () => {
        assert.equal(task.isAnagram('приказ', 'каприз'), true);
    });

    it('проверяет, что слова \'Кукла\' и \'кулак\'  анаграмма', () => {
        assert.equal(task.isAnagram('Кукла', 'кулак'), true);
    }); 

    it('проверяет, что две пустые строки \' \' \'\' не анаграмма', () => {
        assert.equal(task.isAnagram('', ''), false);
    }); 

    it('проверяет, что слова \'кабан\'и \'табак\'не анаграмма', () => {
        assert.equal(task.isAnagram('кабан', 'табак'), false);
    }); 

    it('проверяет, что слова \'кабаны\'и \'банка\' не анаграмма', () => {
        assert.equal(task.isAnagram('кабаны', 'банка'), false);
    }); 
});

describe("valueFib", () => {
    it('проверяет, что значение числа с порядковым номером 0 это 0', () => {
        assert.equal(task.valueFib('0'), true);
    });

    it('проверяет, что значение числа с порядковым номером 1 это 1', () => {
        assert.equal(task.valueFib('1'), true);
    });

    it('проверяет, что значение числа с порядковым номером 2 это 1', () => {
        assert.equal(task.valueFib('2'), true);
    }); 

    it('проверяет, что значение числа на позиции -2 это -1', () => {
                assert.equal(task.valueFib('-2'), true);
            });
});


describe("pattern", () => {
    it('проверяет результат работы функции для n=5', () => {
        assert.equal(task.pattern(5), '1\n22\n333\n4444\n55555\n');
    });
});    