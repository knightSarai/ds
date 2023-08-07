export function getArrayTextLength(array: string[]): number {
  if (array.length === 1) return array[0].length

  return array[0].length + getArrayTextLength(array.slice(1))
}
