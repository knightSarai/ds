export function anagramsOf(text: string): string[] {
  if (text.length === 1) {
    return [text[0]]; 
  }
  const collection = [];

  const substringAnagrams = anagramsOf(text.slice(1));

  for (const substringAnagram of substringAnagrams) {
    for (let index = 0; index <= substringAnagram.length; index++) {
      const copy = substringAnagram.split('');
      copy.splice(index, 0, text[0]);
      collection.push(copy.join(''));
    }
  }

  return collection;
}
