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

    delete(): T | undefined {
        if (!this.data.length) {
            return undefined
        }

        const deletedNode = this.data[0];

        this.data[0] = this.data.pop();

        let currentIndex = 0;

        while(this.hasGreaterChild(currentIndex)) {
            const largerChildIndex = this.getGreaterChildIndex(currentIndex);

            const temp = this.data[currentIndex];
            this.data[currentIndex] = this.data[largerChildIndex];
            this.data[largerChildIndex] = temp

            currentIndex = largerChildIndex;
        }

        return deletedNode
    }

    hasGreaterChild(index: number): boolean {
        return (
            (this.data[this.leftChildIndex(index)] && this.data[index] < this.data[this.leftChildIndex(index)]) ||
            (this.data[this.rightChildIndex(index)]  && this.data[index] < this.data[this.rightChildIndex(index)])
        )
    }

    getGreaterChildIndex(index: number): number {
        if (!this.data[this.rightChildIndex(index)]) {
            return this.leftChildIndex(index);
        }

        return this.data[this.rightChildIndex(index)] > this.data[this.leftChildIndex(index)] ? this.rightChildIndex(index) : this.leftChildIndex(index)
    }


}
