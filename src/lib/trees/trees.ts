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


    if (value <= node.value) {
        return searchBinarySearchTree(node.left, value);
    }

    return searchBinarySearchTree(node.right, value);
}


export function insertBinarySearchTree<T>(node: BinaryNode<T>, value: T):void {
    if (value <= node.value) {
        if (node.left === null) {
            node.left = {
                value,
                left: null,
                right: null
            }
        } else {
            insertBinarySearchTree(node.left, value)
        }
    }

    if (value > node.value) {
        if (node.right === null) {
            node.right = {
                value,
                left: null,
                right: null
            }
        } else {
            insertBinarySearchTree(node.right, value)
        }
    }
}


export function deleteBinarySearchTreeNode<T>(node: BinaryNode<T>, value: T): BinaryNode<T> | null {
    if (node === null || node === undefined) {
        return null;
    }

    if (value > node.value) {
        node.right = deleteBinarySearchTreeNode(node.right, value);
    }

    if (value < node.value) {
        node.left = deleteBinarySearchTreeNode(node.left, value);
    }

    if (value === node.value) {
        if (node.left === null && node.right === null) {
            return null;
        }

        if (node.left === null) {
            return node.right
        }

        if (node.right === null) {
            return node.left
        }

        node.right = left(node.right, node);
    }

    return node;
}

function left<T>(currentNode: BinaryNode<T>, nodeToDelete: BinaryNode<T>): BinaryNode<T> | null {
    if (currentNode.left) {
        currentNode.left = left(currentNode.left, nodeToDelete);
        return currentNode
    }

    nodeToDelete.value = currentNode.value
    return currentNode.right
}


export function findTreeMaxValue<T>(currentNode: BinaryNode<T>): T {
    if (currentNode.right) {
        return findTreeMaxValue(currentNode.right)
    }

    return currentNode.value

}
