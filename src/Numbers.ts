import { SortData } from './SortData.js'

export class Numbers extends SortData {
  constructor(public numbers: number[]){
    super();
  }

  compare(indexLeft: number, indexRight: number): boolean{
    return this.numbers[indexLeft] > this.numbers[indexRight];
  }

  swap(indexLeft: number, indexRight: number): void{
    [this.numbers[indexLeft], this.numbers[indexRight]] = 
    [this.numbers[indexRight], this.numbers[indexLeft]];
  }

  // accessor/getter method. Adding get makes it behave like object property
  get length(): number{
    return this.numbers.length;
  }

}

