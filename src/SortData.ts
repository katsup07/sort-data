// ? Loose coupling with classes and method signatures contract
/* interface SortingProps{
  length: number;
  compare(indexLeft: number, indexRight: number): boolean;
  swap(indexLeft: number, indexRight: number): void;
} */

// ? Strong coupling with classes and inheritance of method signatures and/or implementation
/* Data Sorting Class */
/* Other classes must meet specifications of the SortingProps abstract class.*/
export abstract class SortData {
  abstract compare(indexLeft: number, indexRight: number): boolean;
  abstract swap(indexLeft: number, indexRight: number): void;
  abstract length: number;

  sort(){
    const { length } = this;
    let passes;
  
    for(let i = 0; i < length; i++){
    passes = 0;
    for(let j = 0; j < length - i - 1; j++){
      if (this.compare(j, j+1)){
          passes++;
          this.swap(j, j+1);
        }
      }
    if(passes === 0) break;// minimize the number of passes
    }
  }

}