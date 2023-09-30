# Terminology

* **Root** - The root of the tree is the node that has no parent.
* **Height** - The longest path from the Root to the most child node.
* **Binary Tree** - A tree where each node has at most two children and at least 0 children.
* **General Tree** - A tree whith no restrictions on the number of children each node can have.
* **Binary Search Tree** - A binary tree where the left child is less than the parent and the right child is greater than the parent.
* **Leaves** - Nodes with no children.
* **Balanced Tree** - A tree is perfectly balanced when any node's left and right children have the same height.
* **Branching Factor** - The number of children a node has.

## Preorder Traversal
**Preorder Traversal** is a depth first traversal that visits the root node first, then the left subtree, and finally the right subtree. 
Visit the node first and do something with it, then recurse.

## Inorder Traversal
**Inorder Traversal** is a depth first traversal that visits the left subtree first, then the root node, and finally the right subtree.
Recurse left to the leftmost node, then visit the node, then recurse right.

## Postorder Traversal
**Postorder Traversal** is a depth first traversal that visits the left subtree first, then the right subtree, and finally the root node.
Recurse left to the leftmost node, then visit the node, then recurse right to the rightmost node, then visit the node.

When doing these traversals, we can use a stack to keep track of currently visited nodes instead of using recursion.

**Depth first traversales preserve the shape of the tree.**

# Deleting Node rules
1. If the node being deleted has no children, simply delete it.
2. If the node being deleted has one child, delete the node and plug the childinto the spot where the deleted node was.
3. When deleting a node with two children, replace the deleted node with the successor node. The successor node is the child node whose value is the least of all values that are greater than the deleted node.
4. To find the successor node: visit the right child of the deleted value, and then keep on visiting the left child of each subsequent child until there are no more left children. The bottom value is the successor node.
5. If the successor node has a right child, after plugging the successor node into the spot of the deleted node, take the former right child of the suc- cessor node and turn it into the left child of the former parent of the successor node.
