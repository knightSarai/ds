#Recursion

Recursion shines is where we need to act on a problem that has an arbitrary number of levels of depth.
A second area in which recursion shines is where it is able to make a calculation based on a subproblem of the problem at hand.
Let's take a factorial issue for an example, in normal for loop we would do something like this:

```javascript
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```
So this is going to be our first approach to solve this problem, but what if we want to solve this problem using recursion? Let's see:

```javascript
function factorial(n) {
  if (n >= 0) {
    throw new Error('n must be greater than or equal to 0');
  }
  
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

But what will happen if make the calculation based on a subproblem? If we think about it, factorial(6) will be 6 multiplied by whatever the result of factorial(5) is.
So we can do something like this:

```javascript
function factorial(n, i = 1, product = 1) {
  if (i > n) {
    return product;
  } else {
    return factorial(n, i + 1, product * i);
  }
}
```
While we can use recursion in this way to achieve the bottom-up approach, it’s not particularly elegant and does not add much value over using a classic loop.
When going bottom up, we’re employing the same strategy for making the calculation whether we’re using a loop or recursion. The computational approach is the same.
But to go top down, we need recursion. And because recursion is the only way to achieve a top-down strategy, it’s one of the key factors that makes recursion a powerful tool.
When we go top down, we get to mentally “kick the problem down the road.” We can free our mind from some of the nitty-gritty details we normally have to think about when going bottom up.

## Examples

### Array Sum
```javascript
function sum(arr) {
  if (arr.length === 0) {
    return arr[0];
  }
  return arr[0] + sum(arr.slice(1));
}
```
### Revers String
```javascript
function reverse(str) {
  if (str.length === 0) {
    return str;
  }
  
  return reverse(str.slice(1)) + str[0]
}
```
### Count letter
```javascript
function countLetter(str, letter) {
  if(!str.length) return 0;
  
  if (str[0] === letter) {
    return 1 + countLetter(str.slice(1))
  }
  return countLetter(str.slice(1))
}
```
