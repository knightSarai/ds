export function binarySearch(array: number[], searchValue: number): boolean {
  let low = 0;
  let high = array.length;

  do {
    const mid = Math.floor(low + (high -low) / 2)
    const valueAtMidPoint = array[mid]

    if (searchValue === valueAtMidPoint) {
      return true;
    } 

    if (searchValue > valueAtMidPoint) {
      low = mid + 1;
    } 

    if (searchValue < valueAtMidPoint){
      high = mid
    }
    
  } while (low < high);

  return false
}
