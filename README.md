# Big O Notation

[Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) is used to classify algorithms according to how their run time or space requirements grow as the input size grows.

## Learning Objectives

- Understand how to use Big O to describe the performance of an algorithm
- Understand how to use Big O to describe both time and space complexity
- Use Big O notation to understand how an algorithm scales - if an algorithm works with an input that has one hundred pieces of data, how will it perform with an input that has one million pieces of data?
- Use Big O notation to describe the time and space complexity of different sort algorithms

## Big O

Big O notation is used to classify algorithms (or programs) according to how their run _time_ or _space_ requirements grow as a function of their _input_. Hence, Big O characterises algorithms according to their growth rates - different functions with the same growth rate may be represented using the same O notation (the letter O is used because the growth rate of a function is also referred to as the order of the function).

Figure 1, below, shows some commonly used Big O classifications:

![Time Complexity Curves](./assets/bigO.png)

_Figure 1: Big O, where O(1) is the most efficient, and O(2^n) the least_ 

- O(1) - the growth is constant, no matter the input
- O(log n) - logarithmic growth
- O(n) - linear growth
- O(n^2) - quadratic growth
- O(2^n) - exponential growth

## Space Complexity

The [space complexity](https://en.wikipedia.org/wiki/Space_complexity) of an algorithm is the amount of memory required by the algorithm.

- O(1) - the algorithm uses a fixed (small) amount of space, irrespective of the input. For example:

```js
const tripler = (a, b, c) => {
   const x = a * b * c;
   return x;
}
```

No matter what numbers are given to `tripler`, it will _always_ use the same amount of space because [javascript numbers are always 64-bit floating point](https://www.w3schools.com/js/js_numbers.asp). Hence, `tripler` has space complexity of O(1).

- O(log n), O(n), O(n^2) O(2^n) - these indicate that the algorithm needs additional space based on the length of the input. For example:

```js
const copier = (q) {
    const copiedQ = queue();
    let front = q.front;
    while (front) {
        copiedQ.enQueue(front.data);
        front = front.next;
    }
}
```

The function `copier` creates a copy of the `queue` _q_. Hence, it takes O(n) space as you create _n_ additional queued nodes (where _n_ describes the length of the _q_, which can vary).

## Time Complexity

The [time complexity](https://en.wikipedia.org/wiki/Time_complexity) of an algorithm is the amount of time it takes to run an algorithm.

- O(1) - the algorithm uses a fixed (small) amount of time, irrespective of the input. For example:

```js
const logger = (input) => {
    console.log(input)
}
```

The function `logger` will always run a single `console.log`, no mater what the input. Hence, it has _time_ complexity of O(1).

- O(log n), O(n), O(n^2) O(2^n) - these indicate that the algorithm needs additional time based on the length of the input. For example:

```js
const sum = (stack) => {
    let total = 0;
    let top = stack.pop();
    while (top) {
        total += top.data;
        top = stack.pop();
    }
}
```

The function `sum` sums all the numbers on the `stack`. Hence, it takes O(n) time as you process _n_ additional stacked nodes (where _n_ describes the length of the `stack`, which can vary).

## Exercise

1. Fork this repository and clone the fork to your machine.
2. Run `npm ci` to install project dependencies
3. Implement each of the empty _sort_ functions inside the [src](./src) directory
    - Add a commment to each function implementation that describes:
        1. Conceptually, how the sort algorithm works. You _may_ wish to write this _first_, then try and implement your conceptual understanding
        2. The time and space complexity in Big O notation. Why does the function have that complexity?
4. Run `npx jasmine` to test your code. 
5. Add timing results for each of your sorting algorithms into the file [sortResults.md](docs/sortResults.md). Which ran fastest? Given your understanding of Big O notation in Step 3., above, were those results what you expected? Add that summary to the file, too.
