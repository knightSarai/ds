import {getArrayEvenNumbers} from './get-array-even-numbers';


test.each([
  {array: [1, 2], expected: [2]},
  {array: [1, 2, 3, 4], expected: [2, 4]},
  {array: [2, 3, 4, 4], expected: [2, 4, 4]},
])
('returns $expected when array is $array', ({array, expected}) => {
    expect(getArrayEvenNumbers(array)).toStrictEqual(expected);
})
