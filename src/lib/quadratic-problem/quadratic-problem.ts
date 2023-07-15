export function hasDuplicateValue(array: number[]): boolean {
  const existingNums = {};
  for (let i = 0; i < array.length; i++) {
    if (existingNums[array[i]]) {
      return true
    } else {
      existingNums[array[i]] = true
    }
    
  }
  return false

}

export function greatestNumber(array: number[]): number {
  let greatest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > greatest) {
      greatest = array[i];
    }
  }

  return greatest;

}

