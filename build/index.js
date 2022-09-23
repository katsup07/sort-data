"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Numbers_js_1 = require("./Numbers.js");
const Strings_js_1 = require("./Strings.js");
const dates = [
    new Date(2010, 9, 24),
    new Date(2035, 9, 24),
    new Date(2001, 9, 24),
    new Date(2029, 9, 24),
];
const years = dates.map(date => date.getFullYear());
console.log('before sort', years);
// console.log('after sort', sortNumberData.sort());
const numbersData = new Numbers_js_1.Numbers([100, 3, 4, -5]);
console.log(numbersData.swap(0, 1));
console.log(numbersData);
numbersData.sort();
console.log(numbersData.numbers);
const stringData = new Strings_js_1.Strings('hotdog party yes');
stringData.sort();
console.log(stringData.str);
const stringData2 = new Strings_js_1.Strings('Luke');
stringData2.sort();
console.log(stringData2.str);
