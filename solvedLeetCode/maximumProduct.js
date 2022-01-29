/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
	nums.sort((a, b) => a - b);
	const n = nums.length - 1;
	return Math.max(
		nums[n] * nums[0] * nums[1],
		nums[n] * nums[n - 1] * nums[n - 2]
	);
};
