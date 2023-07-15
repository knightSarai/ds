import {hasDuplicateValue}  from './quadratic-problem';

describe.each([
  {array: [1, 4, 2, 7, 1], expected: true},
  {array: [1, 4, 2, 7], expected: false},
])
('Test if array $array has duplicate value', ({array, expected}) => {
    test(`returns ${expected}`, ()=> expect(hasDuplicateValue(array)).toBe(expected))
})
