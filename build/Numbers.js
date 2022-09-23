"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
const SortData_js_1 = require("./SortData.js");
class Numbers extends SortData_js_1.SortData {
    constructor(numbers) {
        super();
        this.numbers = numbers;
    }
    compare(indexLeft, indexRight) {
        return this.numbers[indexLeft] > this.numbers[indexRight];
    }
    swap(indexLeft, indexRight) {
        [this.numbers[indexLeft], this.numbers[indexRight]] =
            [this.numbers[indexRight], this.numbers[indexLeft]];
    }
    // accessor/getter method. Adding get makes it behave like object property
    get length() {
        return this.numbers.length;
    }
}
exports.Numbers = Numbers;
