# O(n)

```
const nums = [10, 20, 30]

function loopNums(nums) {
	for (let i = 0; i < nums.length; i++) {
		console.log(nums[i])
	}
}

loopNums(nums)
//=> 10
//=> 20
//=> 30
```

## Key points

- In `O(n)` the `n` represents the size of the input
- The algorithm runs in direct correlation with the size of the input
- The runtime complexity is `O(n)` where the size of the input does matter
- The algorithm runs in linear time

## Variations

### O(2 + n)

The time complexity of the algorithm below is `O(2 + n)` when it comes to analysing the algorithm the operations running in constant time ie. `console.log("LOOP START")` don’t have a significant impact on the cost of the algorithm.

In this scenario we can simplify the time complexity to `O(n)`.

```
const nums = [10, 20, 30]

function loopNumsWithExtraOperations(nums) {
  console.log("LOOP START")
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
  }
  console.log("LOOP END")
}

loopNumsWithExtraOperations(nums)
//=> LOOP START
//=> 10
//=> 20
//=> 30
//=> LOOP END
```

### O(2n)

The time complexity of the algorithm below is `O(2n)` when it comes to analysing the algorithm the two loops running in sequence don’t have a significant impact on the cost of the algorithm.

In this scenario we can simplify the time complexity to `O(n)`.

```
const nums = [10, 20, 30]

function loopNumsTwice(nums) {
	for (let i = 0; i < nums.length; i++) {
		console.log(nums[i])
	}

	for (let i = 0; i < nums.length; i++) {
		console.log(nums[i])
	}
}

loopNumsTwice(nums)
//=> 10
//=> 20
//=> 30
//=> 10
//=> 20
//=> 30
```

## Real World Examples
