import { Graph, initialiseData, dijkstra, getClosestNodeKey } from './dijkstra';

describe('Dijkstra', () => {
    let graph: Graph;

    beforeEach(() => {
        graph = {
            A: { B: 1, C: 4 },
            B: { A: 1, C: 2, D: 5 },
            C: { A: 4, B: 2, D: 1 },
            D: { B: 5, C: 1 },
        };
    });

    it('should initialise the data', () => {
        const { distances, previous, queue } = initialiseData(graph);

        expect(distances.get('A')).toBe(Infinity);
        expect(distances.get('B')).toBe(Infinity);
        expect(distances.get('C')).toBe(Infinity);
        expect(distances.get('D')).toBe(Infinity);

        expect(previous.get('A')).toBe(null);
        expect(previous.get('B')).toBe(null);
        expect(previous.get('C')).toBe(null);
        expect(previous.get('D')).toBe(null);

        expect(queue).toEqual(['A', 'B', 'C', 'D']);
    });


    it.each([
        { distances: new Map([['A', 0], ['B', Infinity], ['C', Infinity], ['D', Infinity]]), queue: ['A', 'B', 'C', 'D'], expected: 'A' },
        { distances: new Map([['A', 0], ['B', 1], ['C', Infinity], ['D', Infinity]]), queue: ['B', 'C', 'D'], expected: 'B' },
        { distances: new Map([['A', 0], ['B', 1], ['C', 2], ['D', Infinity]]), queue: ['C', 'D'], expected: 'C' },
    ])('should get the closest node', ({ distances, queue, expected }) => {
        expect(getClosestNodeKey(distances, queue)).toBe(expected);
    });

    it.only('should find the shortest path', () => {
        const path = dijkstra(graph, 'A', 'D');

        expect(path).toEqual(['A', 'B', 'C', 'D']);
    });
});
