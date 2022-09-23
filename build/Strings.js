"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = void 0;
const SortData_js_1 = require("./SortData.js");
class Strings extends SortData_js_1.SortData {
    constructor(str) {
        super();
        this.str = str;
    }
    ;
    compare(indexLeft, indexRight) {
        // compare left and right letters
        return this.str[indexLeft].toLowerCase() > this.str[indexRight].toLowerCase();
    }
    swap(indexLeft, indexRight) {
        let strChars = [...this.str];
        [strChars[indexLeft], strChars[indexRight]] =
            [strChars[indexRight], strChars[indexLeft]];
        this.str = strChars.join('');
    }
    swap2(indexLeft, indexRight) {
        const left = this.str[indexLeft];
        const right = this.str[indexRight];
        const beforeLeft = indexLeft === 0 ? '' : this.str.slice(0, indexLeft);
        const afterRight = indexRight === this.length ? '' : this.str.slice(indexRight + 1);
        this.str = (beforeLeft + right + left + afterRight);
    }
    // accessor/getter method. Adding get makes it behave like object property
    get length() {
        return this.str.length;
    }
}
exports.Strings = Strings;
