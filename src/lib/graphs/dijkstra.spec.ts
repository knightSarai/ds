import { WeightedVertex } from './graphs';
import { Graph, initialiseData, dijkstra, getClosestNodeKey, dijkstraOPP } from './dijkstra';

describe('Dijkstra', () => {
    let graph: Graph;

    beforeEach(() => {
        graph = {
            "Atlanta": { "Boston": 100, "Denver": 160},
            "Boston": { "Chicago": 120, "Denver": 180},
            "Chicago": { "El Paso": 80},
            "Denver": { "Chicago": 40, "El Paso": 140},
            "El Paso": { "Boston": 100}
        }
    });

    it('should initialise the data', () => {
        const { distances, previous, queue } = initialiseData(graph);

        expect(distances.get('Atlanta')).toBe(Infinity);
        expect(distances.get('Boston')).toBe(Infinity);
        expect(distances.get('Chicago')).toBe(Infinity);
        expect(distances.get('Denver')).toBe(Infinity);
        expect(distances.get('El Paso')).toBe(Infinity);

        expect(previous.get('Atlanta')).toBe(null);
        expect(previous.get('Boston')).toBe(null);
        expect(previous.get('Chicago')).toBe(null);
        expect(previous.get('Denver')).toBe(null);
        expect(previous.get('El Paso')).toBe(null);

        expect(queue).toEqual(['Atlanta', 'Boston', 'Chicago', 'Denver', 'El Paso']);
    });


    it.each([
        { distances: new Map([['Atlanta', 0], ['Boston', Infinity], ['Chicago', Infinity], ['Denver', Infinity]]), queue: ['Atlanta', 'Boston', 'Chicago', 'Denver'], expected: 'Atlanta' },
        { distances: new Map([['Atlanta', 0], ['Boston', 1], ['Chicago', Infinity], ['Denver', Infinity]]), queue: ['Boston', 'Chicago', 'Denver'], expected: 'Boston' },
        { distances: new Map([['Atlanta', 0], ['Boston', 1], ['Chicago', 2], ['Denver', Infinity]]), queue: ['Chicago', 'Denver'], expected: 'Chicago' },
    ])('should get the closest node', ({ distances, queue, expected }) => {
        expect(getClosestNodeKey(distances, queue)).toBe(expected);
    });

    it('should find the shortest path', () => {
        const path = dijkstra(graph, 'Atlanta', 'El Paso');
        expect(path).toEqual(['Atlanta', 'Denver', 'Chicago', 'El Paso']);
    });

    it.only('should find the shortest path for OPP implementation', () => {
        const atlanta = new WeightedVertex('Atlanta');
        const boston = new WeightedVertex('Boston');
        const chicago = new WeightedVertex('Chicago');
        const denver = new WeightedVertex('Denver');
        const elPaso = new WeightedVertex('El Paso');

        atlanta.add(boston, 100);
        atlanta.add(denver, 160);
        boston.add(chicago, 120);
        boston.add(denver, 180);
        chicago.add(elPaso, 80);
        denver.add(chicago, 40);
        denver.add(elPaso, 140);
        elPaso.add(boston, 100);

        const path = dijkstraOPP(atlanta, elPaso);

        expect(path).toEqual([atlanta, denver, chicago, elPaso]);

    });
});
