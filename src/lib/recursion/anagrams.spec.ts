import {anagramsOf} from './anagrams';

test.each([
  {text: 'a', expected: ['a']},
  {text: 'ab', expected: ['ab', 'ba']},
  {text: 'abc', expected: ["abc","acb","bac", "bca", "cab", "cba"]},
])
('returns $expected when input is $text', ({text, expected}) => {
    const anagrams = anagramsOf(text);
    expect(anagrams.length).toEqual(expected.length);
    expect(anagrams).toEqual(expect.arrayContaining(expected));
})
