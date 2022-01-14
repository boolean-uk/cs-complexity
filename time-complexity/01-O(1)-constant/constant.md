# O(1)

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

- The algorithm takes the same amount of time to run every time
- The runtime complexity is O(1) where the size of the input doesn't matter
- The algorithm runs in constant time

## Variations

### O(2)

```
const nums = [10, 20, 30]

function logFirstNumTwice(nums) {
  console.log(nums[0])
  console.log(nums[0])
}

logFirstNumTwice()
//=> 10
//=> 10
```

## Real World Examples
