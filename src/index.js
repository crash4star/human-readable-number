const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const fromTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'];
const tensWord = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    let words = [];
    let hundred = Math.trunc(number / 100);

    if (hundred) {
        words.push(digits[hundred - 1] + ' hundred');
    }

    let tens = number % 100;

    if (tens >= 10 && tens <= 19) {
        let index = tens % 10;

        words.push(fromTenToNineteen[index]);

        return words.join(' ');
    }

    if (tens > 19) {
        let index = Math.trunc(tens / 10);

        words.push(tensWord[index - 2]);
    }

    let digit = number % 10;

    if (digit) {
        words.push(digits[digit - 1]);
    }

    return words.join(' ');
};