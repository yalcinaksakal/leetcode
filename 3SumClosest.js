// Share
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0

// Constraints:

// 3 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

const combinationOf3 = (nums, target) => {
  dif = null;
  len = nums.length;
  result = 0;
  for (i = 0; i < len - 2; i++) {
    for (j = i + 1; j < len - 1; j++) {
      for (k = j + 1; k < len; k++) {
        sum = nums[i] + nums[j] + nums[k];
        newDif = Math.abs(target - sum);
        if (dif === null || newDif < dif) {
          dif = newDif;
          result = sum;
        }
      }
    }
  }
  return result;
};

result = combinationOf3([0, 1, 2], 3);
console.log(result);
