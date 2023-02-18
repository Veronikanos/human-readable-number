// module.exports = function toReadable(number) {
//     if (num === 0) {
//         return "zero";
//     }
// };

const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
const dozens = [
    "one",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let res = [];
    if (number >= 1000) {
        const num = Math.trunc(number / 1000);
        res.push(`${units[num]} thousand`);
        number = Number(number.toString().slice(1));
    }

    if (number >= 100) {
        const num = Math.trunc(number / 100);
        res.push(`${units[num]} hundred`);
        number = Number(number.toString().slice(1));
    }
    if (number >= 10 && number < 20) {
        const num = number % 10;
        res.push(`${teens[num]}`);
    } else if (number >= 20) {
        const num = Math.trunc(number / 10);
        res.push(`${dozens[num]}`);
        number = +number % 10;
    }
    if (number < 10) {
        res.push(`${units[number]}`);
    }
    return res.join(" ").trim();
};
