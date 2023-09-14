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

    it('should be get words', () => {
        const trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("apps");
        trie.insert("banana");

        expect(trie.getWrods()).toEqual(["apple", "app", "apps", "banana"]);
    })

    it('should autocomplete with simialar words', () => {
        const trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("apps");
        trie.insert("banana");

        expect(trie.autoComplete('ban')).toEqual(["ana"]);
        expect(trie.autoComplete('ap')).toEqual(["ple", "p", "ps"]);
    })

    it('should autocorrect wrong words', () => {
        const trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("apps");
        trie.insert("banana");

        expect(trie.autoCorrect('appqer')).toEqual("apple");
    })
})
