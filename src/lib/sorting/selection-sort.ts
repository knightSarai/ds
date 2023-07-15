export function selectionSort(array: number[]): void {
  for (let i = 0; i < array.length; i++) {
    let lowestNumberIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIdx]) {
        lowestNumberIdx = j
      }
    }

    if (lowestNumberIdx != i) {
      const temp = array[i];
      array[i] = array[lowestNumberIdx];
      array[lowestNumberIdx] = temp;
    }
  }

}
