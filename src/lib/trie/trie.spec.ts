import {Trie} from "./trie";

describe('test trie', () => {
    it('shuold be insert and search', () => {
        const trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("banana");

        expect(trie.search("apple")).toBeTruthy();
        expect(trie.search("app")).toBeTruthy();
        expect(trie.search("banana")).toBeTruthy();
        expect(trie.search("apples")).toBeFalsy();
    })

})
