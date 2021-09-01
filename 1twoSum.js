/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const comp = {};
  nums.forEach((el, i) => (comp[el] = i));
  let i = 0;
  while (i < nums.length) {
    if (comp[target - nums[i]] && i !== comp[target - nums[i]])
      return [i, comp[target - nums[i]]];

    i++;
  }
};

/* Leetcode
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
  
  
  */
