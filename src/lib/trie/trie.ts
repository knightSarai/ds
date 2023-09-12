export class TrieNode {
    children = new Map();
}
    
export class Trie {
    root = new TrieNode();

    search(word: string): TrieNode | undefined {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return undefined
            }
            currentNode = currentNode.children.get(char)
        }
        return currentNode
    }

    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                const newNode = new TrieNode();
                currentNode.children.set(char, newNode);
                currentNode = newNode;
                continue
            }

            currentNode = currentNode.children.get(char);
        }

        currentNode.children.set("*", null)

    }
}
