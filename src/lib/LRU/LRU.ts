type Node<T> = {
    value: T;
    next?: Node<T>;
    previous?: Node<T>;
}

export class LRU<K, V> {
    private length = 0;
    private head?: Node<V>;
    private tail?: Node<V>;
    private cache = new Map<K, Node<V>>();
    private reverseLookup = new Map<Node<V>, K>();

    constructor(private capacity: number = 10) {}

    update(key: K, value: V): void {
        let node = this.cache.get(key);

        if (!node) {
            node = {value}
            this.length++;
            this.prepend(node);
            this.trimCache();

            this.cache.set(key, node);
            this.reverseLookup.set(node, key);
        } else {
            this.detach(node);
            this.prepend(node);
            node.value = value;
        }

    }

    get(key: K): V | undefined {
        const node = this.cache.get(key);
        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node);

        return node.value;
    }

    detach(node: Node<V>): void {
        if (node.previous) {
            node.previous.next = node.next;
        }

        if (node.next) {
            node.next.previous = node.previous
        }

        if (node == this.head) {
            this.head = this.head.next
        }

        if (node == this.tail) {
            this.tail = this.tail.previous
        }

        node.next = undefined;
        node.previous = undefined;
    }

    prepend(node: Node<V>): void {
        if (!this.head) {
            this.head = this.tail = node;
            return
        }

        node.next = this.head;
        this.head.previous = node;
        this.head = node;
    }

    trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }

        const tail = this.tail;
        this.detach(tail);

        const key = this.reverseLookup.get(tail);
        this.cache.delete(key);
        this.reverseLookup.delete(tail);

        this.length--;
    }

}
