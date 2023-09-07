#Binary Max-Heap
1. The value of each node must be greater than each of its descendant nodes.This rule is known as the heap condition.
2. The tree must be complete.

##Complete Tree
A complete tree is a tree that is completely filled with nodes; no nodes are missing.
So, if you read each level of the tree from left to right, all of the nodes are there.
However, the bottom row can have empty positions, **as long as there aren’t any nodes to the RIGHT of these empty positions**.

* Heaps are said to be weakly ordered.S
* because the root node will always have the greatest value. (In a min-heap, the root will contain the smallest value.) **This will be the key as to why the heap is a great tool for implementing priority queues.**
* The heap has something called a last node. A heap’s last node is the rightmost node in its bottom level.

##Heap Operations
###Insertion
1. Insert the new node at the bottom rightmost spot.
2. If the new node is greater than its parent node, we swap the new node with the parent node.
3. We repeat Step 3, effectively moving the new node up through the heap, until it has a parent whose value is greater than it.

* The process of moving the new node up the heap, is called trickling the nodeup through the heap.
* The efficiency of inserting into a heap is O(log N).

###Deletion
**We only ever delete the root node**
1. Move the last node into where the root node was, effectively removing the original root node.
2. Trickle the root node down into its proper place.
    1. We check both children of the trickle node and see which one is larger.
    2. If the trickle node is smaller than the larger of the two child nodes, we swap the trickle node with that larger child.
    3. We repeat Steps 1 and 2 until the trickle node has no children who are greater than it.

**The reason why we always swap the trickle node with the greater of its two children is because if we swap it the with the smaller one, we’d end up violating the heap condition immediately.**
Like insertion, the efficiency of deletion is O(log N).

##The Last Node
Because finding the last node is so critical to the heap’s operations, and we want to make sure that finding the last node is efficient, **heaps are usually implemented using arrays**.
When we implement the heap using array, the last node will always be the final element of the array.
