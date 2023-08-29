import {SortableArray} from './quick-sort';


it("should partition the array correctly", () => {
  const array = [0, 5, 2, 1, 6, 3];
  const sortableArray = new SortableArray(array);
  const partitionIndex = sortableArray.partition(0, array.length - 1);
  expect(sortableArray.value).toEqual([0, 1, 2, 3, 6, 5]);
  expect(partitionIndex).toEqual(3);
})

it("should sort the array correctly", () => {
  const array = [0, 5, 2, 1, 6, 3];
  const sortableArray = new SortableArray(array);
  sortableArray.quicksort(0, array.length - 1)
  expect(sortableArray.value).toEqual([0, 1, 2, 3, 5, 6]);
})

it.each([
  {kthLowestValue: 0, expected: 0},
  {kthLowestValue: 1, expected: 3},
  {kthLowestValue: 2, expected: 5},
])
('returns kthLowestValue $expected when input is $kthLowestValue', ({kthLowestValue, expected}) => {
    const array = [0, 5, 9, 8, 6, 3];
    const sortableArray = new SortableArray(array);

    expect(sortableArray.quickselect(kthLowestValue, 0, array.length - 1)).toEqual(expected)
})


