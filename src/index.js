module.exports = function toReadable(number) {
    let num = String(number);
    const arr = [];
    const obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };

    for (let key in obj) {
        if (num === key) {
            return obj[key];
        }
    }

    if (num.length === 2) {
        arr[0] = obj[num[0] + '0'];
        arr[1] = obj[num[1]];
        return arr.join(' ');
    }

    if (num.length === 3 && number % 100 === 0) {
        return `${obj[num[0]]} hundred`
    }

    if (num.length === 3 && number % 10 === 0) {
        arr[0] = `${obj[num[0]]} hundred`;
        arr[1] = obj[num[1] + '0'];
        return arr.join(' ');
    }



    if (num[1] !== '0') {
        let str = num.slice(1);
        if (obj[str] !== undefined) {
            arr[0] = `${obj[num[0]]} hundred`;
            arr[1] = obj[str];
            return arr.join(' ');
        } else {
            arr[0] = `${obj[num[0]]} hundred`;
            arr[1] = obj[num[1] + '0'];
            arr[2] = obj[num[2]];
        }

        return arr.join(' ');

    } else if (num[1] === '0') {
        arr[0] = `${obj[num[0]]} hundred`;
        arr[1] = obj[num[2]];
        return arr.join(' ');
    }


}

