import { Queue } from '../queue/queue';


export class Vertex<T> {
    value: T;
    adjacentVertices: Vertex<T>[] = [];

    constructor(value: T) {
        this.value = value
    }

    add(vertex: Vertex<T>) {
        if (!this.adjacentVertices.includes(vertex)) {
            this.adjacentVertices.push(vertex);
            vertex.add(this);
        }
    }
}


export function dfsTraverse<T>(vertex: Vertex<T>, visited: Set<Vertex<T>> = new Set()): void {
    if (visited.has(vertex)) {
        return;
    }

    visited.add(vertex);

    for (const adjacentVertice of vertex.adjacentVertices) {
        dfsTraverse(adjacentVertice, visited)
    }
}


export function dfsSearch<T>(vertex: Vertex<T>, searchValue: T, visited: Set<Vertex<T>> = new Set()): Vertex<T> | undefined {
    if (vertex.value === searchValue) {
        return vertex;
    }

    if (visited.has(vertex)) {
        return;
    }

    visited.add(vertex);

    for (const adjacentVertex of vertex.adjacentVertices) {
        const result = dfsSearch(adjacentVertex, searchValue, visited);
        if (result) {
            return result;
        }
    }

    return;
}


export function bfsTraverse<T>(vertex: Vertex<T>, visited: Set<Vertex<T>> = new Set()): void {
    const queue = new Queue<Vertex<T>>();

    visited.add(vertex);
    queue.enqueue(vertex);

    while (queue.peek()) {
        const currentNode = queue.deque();

        for (const adjacentVertex of currentNode.adjacentVertices) {
            if (!visited.has(adjacentVertex)) {
                visited.add(adjacentVertex);
                queue.enqueue(adjacentVertex);
            }
        }
    }
}
