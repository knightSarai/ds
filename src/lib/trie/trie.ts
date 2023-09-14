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

    getWrods(node=null, word='', words=[]): string[] {
        const currentNode = node || this.root;

        for (const [key, value] of currentNode.children.entries()) {
            if (key === "*") {
                words.push(word);
                continue;
            }

            this.getWrods(value, word + key, words);
        }

        return words

    }

    autoComplete(prefix: string): string[] {
        const currentNode = this.search(prefix);
        if (!currentNode) {
            return undefined;
        }

        return this.getWrods(currentNode);
    }

    autoCorrect(word: string): string {
        let currentNode = this.root;

        let found = '';
        for (const char of word) {
            if (currentNode.children.has(char)) {
                found += char;
                currentNode = currentNode.children.get(char);
                continue
            }
            return found + this.getWrods(currentNode)[0]
        }
        return word
    }

}
