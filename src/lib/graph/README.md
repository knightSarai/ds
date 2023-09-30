# Graphs
## Terminology
- Cycle: A cycle is a sequence of nodes and edges that begins and ends at the same node.
- Acyclic: A graph that has no cycles.
- Connected: When every node has a path to every other node.
- Direct: When there is a direction to the connection between nodes.
- Weighted: When there is a weight to the connection between nodes.
- DAG: Directed Acyclic Graph

## Implementation Terms
- Node: A point or vertex in a graph.
- Edge: The coneection between nodes.

## BFS vs DFS
The question to always ask, then, is whether we want to stay close to the starting vertex during our search, or do we specifically want to move far away.
Breadth-first search is good for staying close, and depth-first search is ideal for moving far away quickly.

## Time Complexity
In general the time complexity of a graph is O(V + E) where V is the number of vertices and E is the number of edges.
