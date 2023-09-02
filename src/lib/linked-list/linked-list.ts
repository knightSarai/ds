type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>
}


export class SinglyLinkedList<T> {
    head?: Omit<Node<T>, 'prev'> = null;
    length = 0;

    prepend(item: T): void {
        this.length++;

        if(!this.head) {
            this.head = {value: item, next: null}
            return
        }

        const currentHead = this.head;
        this.head = {value: item, next: currentHead}
    }

    append(item: T): void {
        this.length++;

        if(!this.head) {
            this.head = {value: item, next: null};
            return
        }

        let current = this.head;

        while (current.next) {
            current = current.next
        }

        current.next = {value: item, next: null};
    }

    indexOf(item: T): number {
        let currentNode = this.head;
        let currentIndex = 0;

        while(currentNode) {
            if (currentNode.value === item) return currentIndex;
            currentIndex++;
            currentNode = currentNode.next
        }

        return -1

    }

    insertAt(item: T, idx: number): void {
        let currentNode = this.head;
        let currentIndex = 0;

        if (!currentNode) {
            this.length++;
            this.head = {value: item, next: null}
            return
        }

        while(currentNode) {
            if (currentIndex === idx - 1 || currentIndex === this.length - 1) {
                this.length++;
                currentNode.next = {value: item, next: currentNode.next}
                break
            }

            currentIndex++;
            currentNode = currentNode.next
        }
    }

    getIndex(item: T): number {
        let currentIndex = 0;
        for (const node of this) {
            if (node.value === item) {
                return currentIndex;
            }
            currentIndex++
        }

        return -1
    }

    getAt(idx: number): T | undefined {
        if (idx > this.length - 1) return

        let currentIndex = 0;
        for (const node of this) {
            if (currentIndex === idx) return node.value
            currentIndex++
        }
    }

    removeAt(idx: number): T | undefined {
        let currentNode = this.head;
        let currentIndex = 0;

        if (idx === 0) {
            this.length--;
            this.head = currentNode.next
            return currentNode.value
        }

        while(currentNode) {
            if (currentIndex === idx - 1) {
                this.length--;
                const temp = currentNode.next;
                currentNode.next = temp.next;
                return temp.value
            }

            currentIndex++;
            currentNode = currentNode.next
        }

      return

    }

    reverse(): void {
        if (this.length < 2) return;

        let currentNode = this.head;
        let prevNode = null;

        while (currentNode) {
            const nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.head = prevNode;
    }

    *display() {
        let currentNode = this.head;

        while(currentNode) {
            yield currentNode
            currentNode = currentNode.next;
        }
    }

    [Symbol.iterator]() {
        return this.display()
    } 
}


export class DoublyLinkedList<T> {
    head?: Node<T> = null;
    tail?: Node<T> = null;
    length = 0;

    insertAtEnd(item: T): void {
        this.length++
        if (!this.head) {
            this.head = this.tail = {value: item, next: null};
            return
        }

        this.tail.next = {value: item}

        const temp = this.tail;
        this.tail = this.tail.next;
        this.tail.prev = temp;
    }

    removeAtFront(): T | undefined {
        if (!this.head) return

        this.length--;
        const temp = this.head;
        this.head = this.head.next;
        return temp.value
    }

    reverse(): void {
        if(this.length < 2) return;

        let currentNode = this.head;
        let prevNode = null;

        while(currentNode) {
            const nextNode = currentNode.next;
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;
    }

}
