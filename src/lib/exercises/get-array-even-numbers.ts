export function getArrayEvenNumbers(array: number[]): number[] {
  if (array.length <= 0) return [];

  if (array[0] % 2 === 0) {
    return [array[0], ...getArrayEvenNumbers(array.slice(1))]
  }


  return getArrayEvenNumbers(array.slice(1))
}
