export class Heap<T> {
    data: T[] = [];

    get first(): T {
        return this.data[0];
    }

    get last(): T {
        return this.data[this.data.length - 1]
    }

    leftChildIndex(index: number): number {
        return index * 2 + 1;
    }

    rightChildIndex(index: number): number {
        return index * 2 + 2;
    }

    parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    insert(value: T) {
        this.data.push(value);

        let newNodeIndex = this.data.length - 1;

        while(newNodeIndex > 0 && this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]) {
            const temp = this.data[newNodeIndex];
            this.data[newNodeIndex] = this.data[this.parentIndex(newNodeIndex)];
            this.data[this.parentIndex(newNodeIndex)] = temp;
            newNodeIndex = this.parentIndex(newNodeIndex) 
        }

    }

}
