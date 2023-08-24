import {SortableArray} from './quick-sort';


describe('Partioning', () => {
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
})

