/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = (nums, k) =>
	nums
		.map((num, i) => [num, i])
		.sort((a, b) => a[0] - b[0])
		.slice(nums.length - k)
		.sort((a, b) => a[1] - b[1])
		.map(n => n[0]);
