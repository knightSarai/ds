import {hasDuplicateValue, greatestNumber}  from './quadratic-problem';

describe.each([
  {array: [1, 4, 2, 7, 1], expected: true},
  {array: [1, 4, 2, 7], expected: false},
])
('Test if array $array has duplicate value', ({array, expected}) => {
    test(`returns ${expected}`, ()=> expect(hasDuplicateValue(array)).toBe(expected))
})

describe.each([
  {array: [1, 4, 2, 7, 1], expected: 7},
  {array: [0, 0, 1, 4, 2, 7, 10], expected: 10},
])
('Test if $array largest value $expected', ({array, expected}) => {
    test(`returns ${expected}`, ()=> expect(greatestNumber(array)).toBe(expected))
})
