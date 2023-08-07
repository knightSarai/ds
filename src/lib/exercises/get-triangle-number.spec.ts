import {getTriangleNumber} from './get-triangle-number';


test.each([
  {num: 1, expected: 1},
  {num: 7, expected: 28},
])
('returns $expected when num is $array', ({num, expected}) => {
    expect(getTriangleNumber(num)).toBe(expected);
})

