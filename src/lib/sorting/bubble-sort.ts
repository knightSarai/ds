export default function bubbleSort(arr: number[]): void {
  let max = arr.length - 1;
  do {
    for(let i = 0; i < max; i++) {
      if (arr[i] > arr[i +1]) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp
      }
    }

    max--;
  } while (max);

  // another solution
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j +1]
        arr[j + 1] = temp
      }
    }
  }

  // another solution
  let sorted = false

  do {
    sorted = true
    for (let i = 0; i < max; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i +1]
        arr[i + 1] = temp
        sorted = false
      }
    }
    max-=1;

  } while (!sorted);

}
