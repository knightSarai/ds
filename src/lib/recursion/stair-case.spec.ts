import {countPossiblePaths} from './stair-case'

test.each([
  {totalSteps: -1, expected: 0},
  {totalSteps: 0, expected: 0},
  {totalSteps: 1, expected: 1},
  {totalSteps: 2, expected: 2},
  {totalSteps: 3, expected: 4},
  {totalSteps: 4, expected: 7},
  {totalSteps: 10, expected: 274},
])
('returns $expected when totalSteps is $totalSteps', ({totalSteps, expected}) => {
    expect(countPossiblePaths(totalSteps)).toBe(expected);
})

