import { Vertex, dfsTraverse, dfsSearch, bfsTraverse } from './graphs';


describe('Graphs', () => {
    let v1: Vertex<number>;
    let v2: Vertex<number>;
    let v3: Vertex<number>;
    let v4: Vertex<number>;
    let v5: Vertex<number>;
    let v6: Vertex<number>;
    let v7: Vertex<number>;
    let v8: Vertex<number>;

    beforeEach(() => {
        v1 = new Vertex(1);
        v2 = new Vertex(2);
        v3 = new Vertex(3);
        v4 = new Vertex(4);
        v5 = new Vertex(5);
        v6 = new Vertex(6);
        v7 = new Vertex(7);
        v8 = new Vertex(8);

        v1.add(v2);
        v1.add(v3);
        v1.add(v4);
        v2.add(v5);
        v2.add(v6);
        v4.add(v7);
        v4.add(v8);
    });

    it('should traverse a graph in depth first order', () => {
        const visited = new Set<Vertex<number>>();

        dfsTraverse(v1, visited);

        const setValues = visited.values()

        expect(setValues.next().value).toBe(v1);
        expect(setValues.next().value).toBe(v2);
        expect(setValues.next().value).toBe(v5);
        expect(setValues.next().value).toBe(v6);
        expect(setValues.next().value).toBe(v3);
        expect(setValues.next().value).toBe(v4);
        expect(setValues.next().value).toBe(v7);
        expect(setValues.next().value).toBe(v8);
    });

    it.only('should traverse a graph in depth first order with a cycle', () => {
        const visited = new Set<Vertex<number>>();
        const v9 = new Vertex(9);

        v1.add(v9);
        v6.add(v9);

        dfsTraverse(v1, visited);

        const setValues = visited.values()

        expect(setValues.next().value).toBe(v1);
        expect(setValues.next().value).toBe(v2);
        expect(setValues.next().value).toBe(v5);
        expect(setValues.next().value).toBe(v6);
        expect(setValues.next().value).toBe(v9);
        expect(setValues.next().value).toBe(v3);
        expect(setValues.next().value).toBe(v4);
        expect(setValues.next().value).toBe(v7);
        expect(setValues.next().value).toBe(v8);
    })

    it('should search a graph in depth first order', () => {
        const visited = new Set<Vertex<number>>();

        const result = dfsSearch(v1, 7, visited);
        const setValues = visited.values()

        expect(result).toBe(v7);
        
        expect(setValues.next().value).toBe(v1);
        expect(setValues.next().value).toBe(v2);
        expect(setValues.next().value).toBe(v5);
        expect(setValues.next().value).toBe(v6);
        expect(setValues.next().value).toBe(v3);
        expect(setValues.next().value).toBe(v4);
    });

    it('should traverse a graph in breadth first order', () => {
        const visited = new Set<Vertex<number>>();

        bfsTraverse(v1, visited);

        const setValues = visited.values()

        expect(setValues.next().value).toBe(v1);
        expect(setValues.next().value).toBe(v2);
        expect(setValues.next().value).toBe(v3);
        expect(setValues.next().value).toBe(v4);
        expect(setValues.next().value).toBe(v5);
        expect(setValues.next().value).toBe(v6);
        expect(setValues.next().value).toBe(v7);
        expect(setValues.next().value).toBe(v8);
    });

})
