const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let stringToArr = expr.split('');
    let codedChars = '';
    let arrLength = stringToArr.length;
    let counter = 0;
    let result = '';

    for (let i = 0; i < arrLength; i++) {

        let current = stringToArr.splice(0, 2).join('');

        if (current == '10') {
            codedChars += '.';
        } else if (current == '11') {
            codedChars += '-'
        } else if(current == '**') {
            stringToArr.splice(0,8);
            result += ' ';
            continue;
        }
        counter += 1
        if (counter == 5) {
            result += MORSE_TABLE[codedChars];
            counter = 0;
            codedChars = '';
        };

        if (stringToArr == 0) {break}
    }
    return result;
}

module.exports = {
    decode
}