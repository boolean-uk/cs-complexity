const nums = [10, 20, 30]

// TC: O(n)

function loopNums(nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
  }
}

loopNums(nums)
//=> 10
//=> 20
//=> 30

// TC: O(2 + n)

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

// TC: O(2n)

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
