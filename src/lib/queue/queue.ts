type Node<T> = {
  value: T;
  next?: Node<T>;
  previous?: Node<T>;
}

export class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    this.length++;

    const node = {value: item};

    if (!this.tail) {
      this.tail = this.head = node;
      return
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next

    // Free
    // No real need for it
    head.next = undefined;

    if (!this.length) {
      this.tail = undefined
    }

    return head.value

  }

  peek(): T | undefined {
    return this.head?.value
  }
}
