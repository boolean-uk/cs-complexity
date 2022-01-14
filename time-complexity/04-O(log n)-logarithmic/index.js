const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// TC: O(n)

function linearSearch(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (num === 8) return num
  }
}

console.log(linearSearch(nums))
//=> 8

// TC: O(log n)

function binarySearch(array, query) {
  const midPoint = Math.floor(array.length / 2)

  if (array[midPoint] === query) {
    return array[midPoint]
  }

  if (array[midPoint] < query) {
    const subArray = array.slice(midPoint, array.length)

    return binarySearch(subArray, query)
  }

  if (array[midPoint] > query) {
    const subArray = array.slice(0, midPoint)

    return binarySearch(subArray, query)
  }
}

console.log(binarySearch(nums, 8))
//=> 8
