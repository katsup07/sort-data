import { SortData } from './SortData.js'

export class Strings extends SortData{
  constructor(public str: String){
    super();
  };

  compare(indexLeft: number, indexRight: number): boolean{
    // compare left and right letters
    return this.str[indexLeft].toLowerCase() > this.str[indexRight].toLowerCase();
  }

  
  swap(indexLeft: number, indexRight: number): void{
    let strChars = [...this.str];
    [strChars[indexLeft], strChars[indexRight]] = 
    [strChars[indexRight], strChars[indexLeft]];
    
    this.str = strChars.join('');
  }

  swap2(indexLeft: number, indexRight: number): void{
    const left =  this.str[indexLeft];
    const right = this.str[indexRight];
    const beforeLeft = indexLeft === 0 ? '' : this.str.slice(0,indexLeft);
    const afterRight =  indexRight === this.length ? '' : this.str.slice(indexRight+1);
    this.str = (beforeLeft + right + left + afterRight);
  }
  
  // accessor/getter method. Adding get makes it behave like object property
  get length(): number{
    return this.str.length;
  }
}
