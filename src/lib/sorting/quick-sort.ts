export class SortableArray {
  value: number[];

  constructor(value: number[]) {
    this.value = value;
  }

  partition(leftPointer: number, rightPointer: number) {
    // We always choose the right-most element as the pivot.
    // We keep the index of the pivot for later use:
    const pivotIndex = rightPointer;
    // We grab the pivot value itself:
    const pivot = this.value[pivotIndex];
    // We start the right pointer immediately to the left of the pivot
    rightPointer--;

    while (true) {
      // Move the left pointer to the right as long as it
      // points to a value that is less than the pivot:
      while (this.value[leftPointer] < pivot) {
        leftPointer++;
      }

      // Move the right pointer to the left as long as it
      // points to a value that is greater than the pivot:
      while (this.value[rightPointer] > pivot) {
        rightPointer--;
      }

      // We've now reached the point where we've stopped
      // moving both the left and right pointers.
      // We check whether the left pointer has reached
      // or gone beyond the right pointer. If it has,
      // we break out of the loop so we can swap the pivot later
      // on in our code:
      if (leftPointer >= rightPointer) {
        break;
      } else {
        // If the left pointer is still to the left of the right
        // pointer, we swap the values of the left and right pointers:
        const temp = this.value[leftPointer];
        this.value[leftPointer] = this.value[rightPointer];
        this.value[rightPointer] = temp;
        leftPointer++;
      }
    }

    // As the final step of the partition, we swap the value
    // of the left pointer with the pivot:
    const temp = this.value[leftPointer];
    this.value[leftPointer] = this.value[pivotIndex];
    this.value[pivotIndex] = temp;

    // We return the leftPointer for the sake of the quicksort method
    return leftPointer;
  }

  quicksort(leftIndex: number, rightIndex: number) {
    if ((rightIndex - leftIndex) <= 0) return;

    const pivotIndex = this.partition(leftIndex, rightIndex);

    this.quicksort(leftIndex, pivotIndex - 1);
    this.quicksort(pivotIndex + 1, rightIndex);
  }
}

