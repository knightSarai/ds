export function getTriangleNumber(num: number): number {
  if (num === 1) return 1;

  return num + getTriangleNumber(num - 1);
}
