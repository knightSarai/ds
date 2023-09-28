export type Graph = {
    [key: string]: {[key : string]: number}
}

export function initialiseData(graph: Graph) {
    const distances = new Map<string, number>();
    const previous = new Map<string, string | null>();
    const queue: string[] = [];

    for (const nodeKey in graph) {
        distances.set(nodeKey, Infinity);
        previous.set(nodeKey, null);
        queue.push(nodeKey);
    }

    return {distances, previous, queue}

}

export function getClosestNodeKey(distances: Map<string, number>, queue: string[]) {
    return queue.reduce((min, node) => 
        distances.get(min) > distances.get(node) ? node : min, queue[0]
    )
}

export function dijkstra(graph: Graph, start: string, end: string): string[] {
    const {distances, previous, queue} = initialiseData(graph);

    distances.set(start, 0)

    while(queue.length) {
        const closestNodeKey = getClosestNodeKey(distances, queue);
        const neighbors = graph[closestNodeKey];

        for (const key in neighbors) { 
            const candidate = distances.get(closestNodeKey) + neighbors[key] 

            if (candidate < distances.get(key)) {
                distances.set(key, candidate);
                previous.set(key, closestNodeKey);
            }
        }

        queue.splice(queue.indexOf(closestNodeKey), 1)
    }

    const path: string[] = [];
    let currentNode = end;

    while(currentNode) {
        path.unshift(currentNode);
        currentNode = previous.get(currentNode)
    }

    if (path[0] === start) {
        return path
    }

    return ['Path not found']

}

