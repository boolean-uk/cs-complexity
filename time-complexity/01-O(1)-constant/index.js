const nums = [10, 20, 30]

// TC: O(1)

function logFirstNum(nums) {
  console.log(nums[0])
}

logFirstNum(nums)
//=> 10

// TC: O(2)

function logFirstNumTwice(nums) {
  console.log(nums[0])
  console.log(nums[0])
}

logFirstNumTwice(nums)
//=> 10
//=> 10
