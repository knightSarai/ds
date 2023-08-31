type Node<T> = {
    value: T;
    next?: Node<T>
}

export class SinglyLinkedList<T> {
    private _head?: Node<T> = null;
    public length = 0;

    get head() {
        return this._head;
    }

    prepend(item: T): void {
        this.length++;

        if(!this._head) {
            this._head = {value: item, next: null}
            return
        }

        const currentHead = this._head;
        this._head = {value: item, next: currentHead}
    }

    append(item: T): void {
        this.length++;

        if(!this._head) {
            this._head = {value: item, next: null};
            return
        }

        let current = this._head;

        while (current.next) {
            current = current.next
        }

        current.next = {value: item, next: null};
    }

    insertAt(item: T, idx: number): void {
        console.log
    }


    remove(item: T): T | undefined {
      return 

    }

    get(idx: number): T | undefined {
      return 

    }

    removeAt(idx: number): T | undefined {
      return

    }
}
