module.exports = function toReadable (number) {
    let result1 = '';
    let result2 = '';
    let result3 = '';

    let numString = String(number);
    let hundred = numString[numString.length - 3];
    let dozen = numString[numString.length - 2];
    let unit = numString[numString.length - 1];

    let table = {
        0 : '',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
    }

    let dozens = {
        2 : 'twenty',
        3 : 'thirty',
        4 : 'forty',
        5 : 'fifty',
        6 : 'sixty',
        7 : 'seventy',
        8 : 'eighty',
        9 : 'ninety',
    }

    let teens = {
        0 : 'ten',
        1 : 'eleven',
        2 : 'twelve',
        3 : 'thirteen',
        4 : 'fourteen',
        5 : 'fifteen',
        6 : 'sixteen',
        7 : 'seventeen',
        8 : 'eighteen',
        9 : 'nineteen',
    }

    
    if (hundred) {
        result1 = `${table[+hundred]} hundred`;
    } else {
        result1 = ``;
    };

    if (dozen) {
        if (dozen > 1) {
            result2 = ` ${dozens[+dozen]}`;
        }
    } else {
        result2 = ``;
    };

    if (unit) {
        result3 = ` ${table[+unit]}`;
    };

    let result = result1 + result2 + result3;

    if (dozen == 1) {
        result = result1 + ` ${teens[+unit]}`;
    };

    if (number == 0) {
        result = `zero`;
    };


    return result.trim();
}
