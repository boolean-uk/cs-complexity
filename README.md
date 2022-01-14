# Big O Notation

## Key Points

- We use Big O to describe the performance of an algorithm.
- We use Big O to decide if the algorithm will scale.
- What does scale mean? If an algorithm works with an input that has one hundred pieces of data... how will it perform with an input that has one million pieces of data.
- What do algorithm mean? In the following examples you will see various functions that perform actions, these are algorithms.
- When we think about Big O notation we want to think about the performance of the algorithm when the size of the input increases.

## Time Complexity

Time Complexity is when we analyse the performace of an algorithm according to it's input, below is an image of the types of curves we will take a look at.

The `O(2ⁿ)` algorithm is the least efficient.

The `O(1)` algorithm is the most efficient.

![Time Complexity Curves](./assets/time-complexity-curves.png)

### Table of Content

Each link will direct you to a explanation of each type of algorithm. Each explanation is accompanied by an `index.js` file with some code that can be run.

1. [O(1)](<./time-complexity/01-O(1)-constant/constant.md>)

Command to run the sample code:

`node time-complexity/01-O(1)-constant/index.js`

2. [O(n)](<./time-complexity/02-O(n)-linear/linear.md>)

Command to run the sample code:

`node time-complexity/02-O(n)-linear/index.js`

3. [O(n²)](<./time-complexity/03-O(n²)-quadratic/quadratic.md>)

Command to run the sample code:

`node time-complexity/03-O(n²)-quadratic/index.js`

4. [O(log n)](<./time-complexity/04-O(log n)-logarithmic/logarithmic.md>)

Command to run the sample code:

`node time-complexity/04-O(log n)-logarithmic/index.js`
