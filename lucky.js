// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let sum = nums[0],
    curSum = 0;
  for (const num of nums) {
    if (curSum < 0) curSum = 0;
    curSum += num;
    if (curSum > sum) sum = curSum;
  }
  return sum;
};

const luckyNums = nums => {
  const mapLucky = {};
  for (const num of nums) {
    if (num < 1) continue;
    if (!mapLucky[num]) {
      mapLucky[num] = { num, occurence: 1 };
      continue;
    }
    mapLucky[num].occurence++;
  }
  console.log(mapLucky);
  const luckies = Object.values(mapLucky).filter(
    item => item.num === item.occurence
  );

  if (!luckies.length) return -1;

  let max = 0;
  for (const lucky of luckies) {
    if (lucky.num > max) max = lucky.num;
  }
  return max;
};

console.log(luckyNums([2, 2, 3, 3, 3, -1, 0, 5]));
