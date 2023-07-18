type Node<T> = {
  value: T;
  previous?: Node<T>;
}

export class Stack<T> {
  public length: number;
  private head: Node<T> | undefined;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    this.length++;

    const node = {value: item} as Node<T>;
    if(!this.head) {
      this.head = node;
      return
    }

    node.previous = this.head;
    this.head = node
  }

  pop(): T | undefined {
    if(!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head
    this.head = this.head.previous

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
