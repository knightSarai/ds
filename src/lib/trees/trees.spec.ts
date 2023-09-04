import { 
    inOrderSearch,
    postOrderSearch,
    preOrderSearch,
    breadthFirstSearch,
    compareTrees,
    searchBinarySearchTree,
    insertBinarySearchTree,
    deleteBinarySearchTreeNode
} from './trees';


const tree: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 100,
            right: null,
            left: null,
        },
        left: {
            value: 30,
            right: {
                value: 45,
                right: null,
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: null,
            }
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        }
    }
};

export const tree2: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: null,
        left: {
            value: 30,
            right: {
                value: 45,
                right: {
                    value: 49,
                    left: null,
                    right: null,
                },
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: {
                    value: 21,
                    right: null,
                    left: null,
                },
            }
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        }
    }
};

test('inOrderSearch', () => {
    expect(inOrderSearch(tree)).toEqual([
        5,
        7,
        10,
        15,
        20,
        29,
        30,
        45,
        50,
        100,
    ]);
});

test('postOrderSearch', () => {
    expect(postOrderSearch(tree)).toEqual([
        7,
        5,
        15,
        10,
        29,
        45,
        30,
        100,
        50,
        20,
    ]);
});


test('preOrderSearch', () => {
    expect(preOrderSearch(tree)).toEqual([
        20,
        10,
        5,
        7,
        15,
        50,
        30,
        29,
        45,
        100,
    ]);
});


test('breadthFirstSearch', () => {
    expect(breadthFirstSearch(tree, 45)).toEqual(true);
    expect(breadthFirstSearch(tree, 7)).toEqual(true);
    expect(breadthFirstSearch(tree, 69)).toEqual(false);
});


test('Compare trees', () => {
    expect(compareTrees(tree, tree2)).toEqual(false);
    expect(compareTrees(tree, tree)).toEqual(true);
})


test('searchBinarySearchTree', () => {
    expect(searchBinarySearchTree(tree, 45)).toEqual(true);
    expect(searchBinarySearchTree(tree, 7)).toEqual(true);
    expect(searchBinarySearchTree(tree, 69)).toEqual(false);
})


test('insertBinarySearchTree', () => {
    const testTree = JSON.parse(JSON.stringify(tree));

    insertBinarySearchTree(testTree, 69);
    expect(searchBinarySearchTree(testTree, 69)).toEqual(true);
    expect(testTree.right.right.left.value).toEqual(69);
})


describe.only("Binary Search Tree Delete", () => {
    it('should delete a node to the right if bigger than root and has no children', () => {
        const testTree: BinaryNode<number> = {
            value: 20,
            right: {
                value: 50,
                right: null,
                left: null,
            },
            left: null,
        };

        deleteBinarySearchTreeNode(testTree, 50);
        expect(testTree.right).toEqual(null);
    });

    it("should delete a node the left if less than root and has no children", () => {
        const testTree: BinaryNode<number> = {
            value: 20,
            right: null,
            left: {
                value: 10,
                right: null,
                left: null,
            },
        };

        deleteBinarySearchTreeNode(testTree, 10);
        expect(testTree.left).toEqual(null);
    })

    it("should plug the child of the deleted node into the parent if the deleted node has one child", () => {
        const testTree: BinaryNode<number> = {
            value: 20,
            right: {
                value: 50,
                right: {
                    value: 100,
                    right: null,
                    left: null,
                },
                left: null,
            },
            left: {
                value: 10,
                right: null,
                left: {
                    value: 5,
                    right: null,
                    left: null,
                }
            },
        };

        deleteBinarySearchTreeNode(testTree, 50);
        deleteBinarySearchTreeNode(testTree, 10);

        expect(testTree.right.value).toEqual(100);
        expect(testTree.left.value).toEqual(5);
    });

    it('should replace the deleted node with the smallest node in the right subtree', () => {
        const testTree: BinaryNode<number> = {
            value: 20,
            right: {
                value: 50,
                right: {
                    value: 100,
                    right: null,
                    left: null,
                },
                left: {
                    value: 30,
                    right: null,
                    left: null,
                },
            },
            left: {
                value: 10,
                right: {
                    value: 15,
                    right: null,
                    left: {
                        value: 12,
                        right: null,
                        left: {
                            value: 11,
                            right: null,
                            left: {
                                value: 9,
                                right: null,
                                left: null,
                            }
                        },
                    },
                },
                left: {
                    value: 5,
                    right: null,
                    left: null,
                }
            },
        };

        deleteBinarySearchTreeNode(testTree, 50);
        deleteBinarySearchTreeNode(testTree, 10);

        expect(testTree.right.value).toEqual(100);
        /* expect(testTree.right.right.value).toEqual(100); */
        /**/
        expect(testTree.left.value).toEqual(9);
        /* expect(testTree.left.right.value).toEqual(15); */
    })
})
