import {getArrayTextLength} from './get-array-text-length'


test.each([
  {array: ["abc"], expected: 3},
  {array: ["ab", "c"], expected: 3},
  {array: ["ab", "cd", "aa"], expected: 6},
  {array: ["ab", "cd", "aa", ""], expected: 6},
])
('returns $expected when array is $array', ({array, expected}) => {
    expect(getArrayTextLength(array)).toBe(expected);
})

