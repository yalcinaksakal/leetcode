/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
	let max = 1,
		l = 1;

	for (let i = 1; i < nums.length; i++)
		nums[i] > nums[i - 1] ? (max = Math.max(++l, max)) : (l = 1);

	return max;
};
