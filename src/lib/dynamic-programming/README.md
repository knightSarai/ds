Recursion is often the culprit behind some of the slowest categories of Big O, such as O(2N). And Dynamic Programming is a technique that can be used to optimize these types of problems.

let's take a recursive max function as an example:
```ts
function max(arr: number[]): number {
  // Base case - if the array has only one element, it is
  // by definition the greatest number: 
  if (arr.length === 1) return arr[0];
  
  // Compare the first element with the greatest element
  // from the remainder of the array. If the first element
  // is greater, return it as the greatest number:
  if (arr[0] > max(arr.slice(1))) return arr[0];
  
  // Otherwise, return the greatest number from the remainder of the array:
  return max(arr.slice(1));
}
```

If we store the results of the recursive calls in a cache, we can avoid making the same recursive calls over and over again. This is the essence of Dynamic Programming.
```ts
function max(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  
  const cached_max = max(arr.slice(1));
  
  if (arr[0] > cached_max) return arr[0];
  
  return cached_max;
}
```

The time complexity of this improved function is O(N), a significant improvement over the original O(2^N) time complexity.

Let's take another famous example of a recursive function: the Fibonacci sequence.

```ts
function fib(n: number): number {
  if (n === 0 || n === 1) return n;
  
  return fib(n - 2) + fib(n - 1);
}
```
This function has a time complexity of O(2^N).

While one simple change worked to optimize the `max`, optimizing our Fibonacci sequence isn’t as simple.
And that’s because there isn’t just one single piece of data we can save in avariable.
We need to calculate both fib(n - 2) and fib(n - 1) (as each Fibonacci number is the sum of those two numbers), and storing the result of one won’t alone give us the result for the other.
This is a case of what we call overlapping subproblems.
 
For example if we passed 5 to the function, we would calculate fib(3) twice, fib(2) three times!

Dynamic programming is the process of optimizing recursive problems that have overlapping subproblems.

Optimizing an algorithm with dynamic programming is typically accomplished with one of two techniques:
1. Memoization
2. Tabulation

## Memoization
Memoization is the process of storing the results of a function call and returning the cached result when the same inputs occur again.

```ts
function fib(n: number, memo = new Map()): number {
  if (memo.has(n)) return memo.get(n);
  if (n === 0 || n === 1) return n;
  
  const result = fib(n - 2, memo) + fib(n - 1, memo);
  memo.set(n, result);
  return result;

}
```
Side note: I like starting by fib(n - 2) before fib(n - 1) because most of the latter is contained in the former.
Time complexity: O(N)

## Tabulation (Bottom-Up)
Tabulation is the process of storing the results of a previous result in a “table” (usually an array). Tabulation is usually done using iteration and is the opposite of the top-down approach.

```ts
function fib(n: number): number {
  if (n === 0 || n === 1) return n;
  
  const table = new Array(n + 1);
  table[0] = 0;
  table[1] = 1;
  
  for (let i = 2; i <=n; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }
  
  return table[n];
}
```

## Golomb Sequence (Memoization)
The Golomb sequence is a non-decreasing integer sequence where the nth term is equal to the number of times n appears in the sequence.

The first few values are
```
1, 2, 2, 3, 3, 4, 4, 4, 5, 5, ...
```

Given some integer n, find the nth Golomb number.

```ts
function golomb(n: number): number {
  if (n === 1) return 1;
  
  return 1 + golomb(n - golomb(golomb(n - 1)));
}
```

With Memoization


```ts
function golomb(n: number, memo = new Map()): number {
  if (n === 1) return 1;
  
  const result = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo)
  
  memo.set(n, result);
  
  return result;
}
```

## Golomb Sequence (Tabulation)
```ts
function golomb(n: number): number {
  const table = new Array(n + 1);
  table[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    table[i] = 1 + table[i - table[table[i - 1]]];
  }
  
  return table[n];
}
```

## Unique Paths (Memoization)

```ts
function uniquePaths(rows, columns): number {
  if (rows === 1 || columns === 1) return 1;
  
  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
}
```

With Memoization

```ts
function uniquePaths(rows, columns, memo = new Map()): number {
  const key = `${rows},{columns}`;
  if (memo.has(key)) return memo.get('key');
  if (row === 1 || columns === 1) return 1
  
  results = uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1);
  
  memo.set(results);
  
  return results;
}
```
