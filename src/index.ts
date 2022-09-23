import { Numbers } from './Numbers.js';
import { SortData } from './SortData.js';
import { Strings } from './Strings.js';

const dates = [
  new Date(2010, 9, 24),
  new Date(2035, 9, 24),
  new Date(2001, 9, 24),
  new Date(2029, 9, 24),
];

const years = dates.map( date => date.getFullYear());
console.log('before sort', years);


const numbersData: Numbers = new Numbers([100, 3 ,4,-5]);
console.log(numbersData.swap(0,1));
console.log(numbersData);


// sort numbers
numbersData.sort();
console.log(numbersData.numbers);

// sort strings
const stringData = new Strings('pizza party time');
stringData.sort();
console.log(stringData.str);

const stringData2 = new Strings('Luke');
stringData2.sort();
console.log(stringData2.str);



