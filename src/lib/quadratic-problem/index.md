```ts 
export function hasDuplicateValue(array: number[]) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}
```
In the example obove we have a relatively inefficient algorithm O(N^2) we can enhance it by making it a linear O(N) algorithm.
We can see quadratic-problem.ts 
