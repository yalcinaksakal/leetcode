/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
	nums.sort((a, b) => a - b);
	let min = nums[k - 1] - nums[0];
	const l = nums.length - k + 1;
	for (let i = 1; i < l; ) min = Math.min(min, nums[i + k - 1] - nums[i++]);
	return min;
};
minimumDifference([1, 23, 24, 3, 1241, 4, 254414, 1, 24, 14, 14, 12, 4, 4], 3);
