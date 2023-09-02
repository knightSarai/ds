import { SinglyLinkedList, DoublyLinkedList} from './linked-list';

describe('test singly linked list', () => {
    it('should be initialised with empty head and 0 length', () => {
        const list = new SinglyLinkedList<number>();

        expect(list.head).toBeNull();
        expect(list.length).toBe(0);
    })

    it('should set node to head if head is empty when append', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1)

        expect(list.head.value).toEqual(1);
        expect(list.length).toEqual(1);
    })

    it('should append node to the end of the list', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1)
        list.append(2)

        expect(list.head.value).toEqual(1);
        expect(list.head.next.value).toEqual(2);
        expect(list.length).toEqual(2);
    })

    it('should prepend node to the head of the list', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1)
        list.append(2)
        list.prepend(3)

        expect(list.head.value).toEqual(3);
        expect(list.head.next.value).toEqual(1);
        expect(list.length).toEqual(3);
    })

    it('should return index of value', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(2);

        expect(list.indexOf(1)).toEqual(0);
        expect(list.indexOf(2)).toEqual(1);
        expect(list.indexOf(3)).toEqual(-1);
    })

    it('should insert at head when empty', () => {
        const list = new SinglyLinkedList<number>();
        list.insertAt(1, 0);

        expect(list.length).toEqual(1);
        expect(list.head.value).toEqual(1);
        expect(list.head.next).toBeNull();
    })

    it('should insert at index at given value', ()=> {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(3);
        list.append(6);
        list.insertAt(5, 1);

        expect(list.length).toEqual(4);
        expect(list.head.value).toEqual(1)
        expect(list.head.next.value).toEqual(5)
        expect(list.head.next.next.value).toEqual(3)
        expect(list.head.next.next.next.value).toEqual(6)
    })

    it('should insert at the end if idx is the last or it is bigger than the current index', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.insertAt(11, 1);
        list.insertAt(12, 4);
        list.insertAt(1200, 8);

        expect(list.length).toEqual(4);
        expect(list.head.next.value).toEqual(11);
        expect(list.head.next.next.value).toEqual(12);
        expect(list.head.next.next.next.value).toEqual(1200);
    })

    it('should remove the head if index is zero', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(2);
        list.removeAt(0);

        expect(list.length).toEqual(1);
        expect(list.head.value).toEqual(2);
    })

    it('should remove node $expected at index $index', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(3);
        list.append(6);
        list.append(7);

        expect(list.removeAt(1)).toEqual(3);
        expect(list.length).toEqual(3);
        expect(list.head.next.value).toEqual(6);
        expect(list.removeAt(2)).toEqual(7);
        expect(list.length).toEqual(2);
        expect(list.head.next.next).toBeNull();
    })

    it('should loop through the list', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(3);
        list.append(6);
        list.append(7);

        const newList = [];

        for (const node of list) {
            newList.push(node.value);
        }

        expect(newList).toStrictEqual([1, 3, 6, 7])
    })

    it('should return index for given value', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(3);
        list.append(6);
        list.append(7);

        expect(list.getIndex(6)).toEqual(2);
    })

    it('should return value for given index', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(3);
        list.append(6);
        list.append(7);

        expect(list.getAt(1)).toEqual(3);
    })

    it('should reverse the values in the linked list', () => {
        const list = new SinglyLinkedList<number>();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);

        list.reverse();

        expect(list.head.value).toEqual(4);
        expect(list.head.next.value).toEqual(3);
        expect(list.head.next.next.next.value).toEqual(1);
    })
})

describe('test singly linked list', () => {
    it('should be initialised with empty head and 0 length', () => {
        const list = new DoublyLinkedList<number>();
        list.insertAtEnd(6);

        expect(list.length).toEqual(1);
        expect(list.head.value).toEqual(6)
    })

    it('should insert value at the end', () => {
        const list = new DoublyLinkedList<number>();
        list.insertAtEnd(6);
        list.insertAtEnd(8);
        list.insertAtEnd(9);

        expect(list.length).toEqual(3);
        expect(list.tail.prev.value).toEqual(8);
        expect(list.tail.value).toEqual(9);
        expect(list.tail.next).toBeUndefined();
        expect(list.head.next).toEqual(list.tail.prev);
    })

    it('should remove value at the beginning', () => {
        const list = new DoublyLinkedList<number>();
        list.insertAtEnd(6);
        list.insertAtEnd(8);
        list.insertAtEnd(9);
        list.removeAtFront();

        expect(list.length).toEqual(2);
        expect(list.head.value).toEqual(8);
        expect(list.head.next.value).toEqual(9);
        expect(list.head.next.next).toBeUndefined();
    })

    it('should reverse the values in the linked list', () => {
        const list = new DoublyLinkedList<number>();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtEnd(3);
        list.insertAtEnd(4);

        list.reverse();

        expect(list.head.value).toEqual(4);
        expect(list.head.next.value).toEqual(3);
        expect(list.tail.value).toEqual(1);
        expect(list.tail.next).toBeNull();
        expect(list.tail.prev.value).toEqual(2);

    })
})
