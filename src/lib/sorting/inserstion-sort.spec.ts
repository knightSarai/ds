import {insertionSort} from './insertion-sort';

test("insertion-sort", function () {
    const arr = [9, 3, 7, 4, 69, 69, 420, 69, 42];
    insertionSort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 69, 69, 420]);
});
