export function insertionSort(array: number[]): void {
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    let position = i - 1;

    while(position >= 0) {
      if(array[position] > temp) {
        array[position + 1] = array[position];
        position -= 1;
      } else {
        break;
      }
    }

    array[position + 1] = temp;
    
  }

}
