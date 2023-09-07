import {Heap} from './binary-heap';

describe('binary heap', () => {
    it('should insert into with right order', ()=> {
        const heap = new Heap();
        heap.insert(100);
        heap.insert(88);
        heap.insert(25);
        heap.insert(87);
        heap.insert(16);
        heap.insert(8);
        heap.insert(12);
        heap.insert(86);
        heap.insert(50);
        heap.insert(2);
        heap.insert(15);
        heap.insert(3);

        expect(heap.data).toStrictEqual([100, 88, 25, 87, 16, 8, 12, 86, 50, 2, 15, 3]);

    })
})
