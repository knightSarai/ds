import { SinglyLinkedList } from './linked-list';

describe('test singly linked list', () => {
    it('should be initialised with empty head and 0 length', () => {
        const list = new SinglyLinkedList();
        expect(list.head).toBeNull();
        expect(list.length).toBe(0);
    })

    it('should set node to head if head is empty when append', () => {
        const list = new SinglyLinkedList();
        list.append(1)
        expect(list.head.value).toEqual(1);
        expect(list.length).toEqual(1);
    })

    it('should append node to the end of the list', () => {
        const list = new SinglyLinkedList();
        list.append(1)
        list.append(2)
        expect(list.head.value).toEqual(1);
        expect(list.head.next.value).toEqual(2);
        expect(list.length).toEqual(2);
    })

    it('should prepend node to the head of the list', () => {
        const list = new SinglyLinkedList();
        list.append(1)
        list.append(2)
        list.prepend(3)
        expect(list.head.value).toEqual(3);
        expect(list.head.next.value).toEqual(1);
        expect(list.length).toEqual(3);
    })

})
