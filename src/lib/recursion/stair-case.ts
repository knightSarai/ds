export function countPossiblePaths(totalSteps: number): number {
  if (totalSteps <= 0) return 0;
  if (totalSteps === 1) return 1;
  if (totalSteps === 2) return 2;
  if (totalSteps === 3) return 4;

  return countPossiblePaths(totalSteps - 1) + countPossiblePaths(totalSteps - 2) + countPossiblePaths(totalSteps - 3)
}
