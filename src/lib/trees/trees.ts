import { QueueWithLinkedList as Queue } from '../queue/queue';

function walkInOrder<T>(node: BinaryNode<T> | null, path: T[]): T[]{
  if(!node) return path;

  walkInOrder(node.left, path);
  path.push(node.value);
  walkInOrder(node.right, path);

  return path

}

export function inOrderSearch<T>(head: BinaryNode<T>): T[] {
  return walkInOrder<T>(head, []);
}

function walkPostOrder<T>(node: BinaryNode<T> | null, path: T[]): T[]{
  if(!node) return path;

  walkPostOrder(node.left, path);
  walkPostOrder(node.right, path);

  path.push(node.value);

  return path

}

export function postOrderSearch<T>(head: BinaryNode<T>): T[] {
  return walkPostOrder(head, []);
}


function walkPreOrder<T>(node: BinaryNode<T> | null, path: T[]): T[]{
  if(!node) return path;

  path.push(node.value);

  walkPreOrder(node.left, path);
  walkPreOrder(node.right, path);

  return path

}

export function preOrderSearch<T>(head: BinaryNode<T>): T[] {
  return walkPreOrder(head, []);
}

export function breadthFirstSearch<T>(head: BinaryNode<T>, needle: T): boolean {
    const queue = new Queue<BinaryNode<T>>();
    queue.enqueue(head);

    while(queue.length) {
        const current = queue.deque();

        if(current.value === needle) {
            return true;
        }

        if (current.left) {
            queue.enqueue(current.left);
        }

        if (current.right) {
            queue.enqueue(current.right);
        }
    }

    return false


}


export function compareTrees<T>(a: BinaryNode<T> | null, b: BinaryNode<T> | null): boolean {
    if (a === null && b === null) {
        return true;
    }


    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return compareTrees(a.left, b.left) && compareTrees(a.right, b.right);


}


export function searchBinarySearchTree<T>(node: BinaryNode<T> | null, value: T) {
    if (!node) {
        return false
    }

    if (node.value === value) {
        return true;
    }


    if (node.value >= value) {
        return searchBinarySearchTree(node.left, value);
    }

    return searchBinarySearchTree(node.right, value);
}


